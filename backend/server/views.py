# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.core import serializers
from .models import User, Preferences, Attributes, Dealbreakers, Location
from django.http import HttpResponse, JsonResponse

import json
from collections import OrderedDict
# from django.http import HttpResponse
from django.contrib.auth.models import User as AuthUser
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


class Profile:

    def __init__(self, targetemail):
        self.email = targetemail
        self.user = User.objects.filter(email=targetemail)
        self.attributes = Attributes.objects.filter(email=targetemail)
        self.preferences = Preferences.objects.filter(email=targetemail)
        self.dealbreakers = Dealbreakers.objects.filter(email=targetemail)
        self.location = Location.objects.filter(email=targetemail)

    def get_details(self):
        # serialize query results
        attr = json.loads(serializers.serialize('json', self.attributes))
        pref = json.loads(serializers.serialize('json', self.preferences))
        usr = json.loads(serializers.serialize('json', self.user))

        # build final json object
        data = OrderedDict([('email',
                             usr[0]['fields']['email']),
                            ('handle',
                             usr[0]['fields']['handle']),
                            ('description',
                             usr[0]['fields']['description']),
                            ('attributes',
                             attr[0]['fields']),
                            ('preferences',
                             pref[0]['fields'])])
        return data


class Matcher:

    def __init__(self):
        self.userlist = User.objects.all()

    def get_matches(self, targetemail):
        matchesjson = []

        # loop through and calculate matc percentage
        # Build response json
        target_profile = Profile(targetemail)

        for user in self.userlist:
            if (user.email == targetemail):
                continue

            curr_profile = Profile(user.email)
            # compare target users preferences to other user's attributes

            pypref = serializers.serialize(
                "python", target_profile.preferences)
            pyattr = serializers.serialize(
                "python", curr_profile.attributes)

            dealbreakers = serializers.serialize(
                "python", target_profile.dealbreakers)

            # calculate match percentage
            questionCount = 0.0
            correctCount = 0.0
            # if dealbreakers are encountered skip the current user
            skipflag = 0
            for (
                    k, v), (k2, v2) in zip(
                    pypref[0]['fields'].items(), pyattr[0]['fields'].items()):

                questionCount += 1.0
                if(v == v2):
                    correctCount += 1.0
                elif (dealbreakers[0]['fields'][k] is True):
                    skipflag = 1
                    break

            if skipflag == 1:
                break

            matchPercentage = (correctCount / questionCount) * 100

            # serialize query results
            attr = json.loads(serializers.serialize(
                'json', curr_profile.attributes))
            pref = json.loads(serializers.serialize(
                'json', curr_profile.preferences))
            usr = json.loads(
                serializers.serialize(
                    'json',  curr_profile.user))

            data = OrderedDict([('email',
                                 usr[0]['fields']['email']),
                                ('handle',
                                 usr[0]['fields']['handle']),
                                ('description',
                                 usr[0]['fields']['description']),
                                ('attributes',
                                 attr[0]['fields']),
                                ('preferences',
                                 pref[0]['fields']),
                                ('match',
                                 matchPercentage)])

            matchesjson.append(data)

        match_response = {'userlist': matchesjson}
        return match_response


def getuser(request, pk):

    if request.method == 'GET':

        targetemail = pk
        # check that user exists
        try:
            User.objects.get(email=targetemail)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        # create profile object
        target_profile = Profile(targetemail)
        # get JSON serialized user data
        return JsonResponse(target_profile.get_details())

    else:
        return HttpResponse(status=404)


def getmatches(request, pk):

    if request.method == 'GET':

        targetemail = pk
        # check that user exists
        try:
            User.objects.get(email=targetemail)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        # create matcher object
        matcher_object = Matcher()
        # get json list of matches
        return JsonResponse(matcher_object.get_matches(targetemail))
    else:
        return HttpResponse(status=404)


# registers the user in the authentication system if the email hasn't been
# registered already
def registeruser(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    # ensure the email isn't already registered
    if not AuthUser.objects.filter(email=request.POST['email']).exists():
        # create the user with the username=email, email=None, and
        # password=password
        if AuthUser.objects.create_user(
            request.POST['email'],
            None,
            request.POST['password']
        ) is not None:
            response = {
                'response': 'true',
                'email': request.POST['email'],
                'authenticated': True
            }
        else:
            response = {'response': 'Unable to create user.'}
    else:
        response = {'response': 'A user with that email already exists.'}

    return JsonResponse(response)


# logs the user into the authentication system as long as the email and
# password are correct
def loginuser(request):
    if request.method != 'POST':
        return HttpResponse(status=404)
    # authenticate user
    user = authenticate(
        username=request.POST['email'],
        password=request.POST['password'])
    if user is not None:
        login(request, user)
        # A backend authenticated the credentials
        response = {
            'authenticated': True,
            'email': request.POST['email']}
    else:
        # No backend authenticated the credentials
        response = {'authenticated': False}
    return JsonResponse(response)


# updates the user's handle, description, preferences, attributes, and
# dealbreakers
@csrf_exempt  # ADDED BECAUSE CSRF ERROR THROWN WITH EXTERNAL POST REQUESTS
def updateuserinfo(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    print(request.POST)

    # check if the user is logged in
    # if request.user.is_authenticated:
    if True:
        # store the handle and description in the PublicUser
        (user, created) = User.objects.update_or_create(
            email=request.POST['email'],
            defaults={
                'email': request.POST['email'],
                'handle': request.POST['handle'],
                'description': request.POST['description']})

        print('user', user)
        # ensure the basic user info was updated
        if user is not None:
            # create dict for the attributes
            data = {}
            data['email'] = request.POST['email']
            data['gender'] = 'M' if request.POST['gender'] is 'Male' else 'F'
            data['pet'] = True if request.POST['pet'] is 'True' else False
            data['smoke'] = True if request.POST['smoke'] is 'True' else False
            data['sleep_late'] = (True if request.POST['sleep_late'] is 'True'
                                  else False)
            data['rise_early'] = (True if request.POST['rise_early'] is 'True'
                                  else False)
            data['neat'] = True if request.POST['neat'] is 'True' else False
            data['friends'] = (True if request.POST['friends'] is 'True'
                               else False)
            data['music'] = True if request.POST['music'] is 'True' else False
            data['language'] = request.POST['language'].lower()
            data['budget'] = int(request.POST['budget'] or 0)
            data['dishes'] = (True if request.POST['dishes'] is 'True'
                              else False)
            data['skimpy'] = (True if request.POST['skimpy'] is 'True'
                              else False)
            data['drink'] = True if request.POST['drink'] is 'True' else False
            data['drugs'] = True if request.POST['drugs'] is 'True' else False
            data['shower'] = (True if request.POST['shower'] is 'True'
                              else False)
            data['tv'] = True if request.POST['tv'] is 'True' else False
            # store attributes
            (attr, created) = Attributes.objects.update_or_create(
                email=user, defaults=data)
            # ensure the attributes were updated
            if attr is not None:
                # update dict for the preferences
                data['gender'] = (True if request.POST['gender_pref']
                                  is 'True' else False)
                data['pet'] = (True if request.POST['pet_pref']
                               is 'True' else False)
                data['smoke'] = (True if request.POST['smoke_pref']
                                 is 'True' else False)
                data['sleep_late'] = (True if request.POST['sleep_late_pref']
                                      is 'True' else False)
                data['rise_early'] = (True if request.POST['rise_early_pref']
                                      is 'True' else False)
                data['neat'] = (True if request.POST['neat_pref']
                                is 'True' else False)
                data['friends'] = (True if request.POST['friends_pref']
                                   is 'True' else False)
                data['music'] = (True if request.POST['music_pref']
                                 is 'True' else False)
                data['language'] = (True if request.POST['language_pref']
                                    is 'True' else False)
                # del data['budget']
                data['budget'] = 0
                data['dishes'] = (True if request.POST['dishes_pref']
                                  is 'True' else False)
                data['skimpy'] = (True if request.POST['skimpy_pref']
                                  is 'True' else False)
                data['drink'] = (True if request.POST['drink_pref']
                                 is 'True' else False)
                data['drugs'] = (True if request.POST['drug_pref']
                                 is 'True' else False)
                data['shower'] = (True if request.POST['shower_pref']
                                  is 'True' else False)
                data['tv'] = (True if request.POST['tv_pref']
                              is 'True' else False)
                # store preferences
                (pref, created) = Preferences.objects.update_or_create(
                    email=user, defaults=data)
                # ensure the preferences were updated
                if pref is not None:
                    # update dict for the dealbreakers
                    data['gender'] = (True if 'db_gender' in request.POST
                                      else False)
                    data['pet'] = (True if 'db_pet' in request.POST
                                   else False)
                    data['smoke'] = (True if 'db_smoke' in request.POST
                                     else False)
                    data['sleep_late'] = (True if 'db_sleep_late'
                                          in request.POST
                                          else False)
                    data['rise_early'] = (True if 'db_rise_early'
                                          in request.POST
                                          else False)
                    data['neat'] = (True if 'db_neat' in request.POST
                                    else False)
                    data['friends'] = (True if 'db_friends' in request.POST
                                       else False)
                    data['music'] = (True if 'db_music' in request.POST
                                     else False)
                    data['language'] = (True if 'db_language' in request.POST
                                        else False)
                    # del data['budget']
                    data['budget'] = False
                    data['dishes'] = (True if 'db_dishes' in request.POST
                                      else False)
                    data['skimpy'] = (True if 'db_skimpy' in request.POST
                                      else False)
                    data['drink'] = (True if 'db_drink' in request.POST
                                     else False)
                    data['drugs'] = (True if 'db_drugs' in request.POST
                                     else False)
                    data['shower'] = (True if 'db_shower' in request.POST
                                      else False)
                    data['tv'] = (True if 'db_tv' in request.POST
                                  else False)
                    # store dealbreakers
                    (db, created) = Dealbreakers.objects.update_or_create(
                        usr=user, defaults=data)
                    # ensure the dealbreakers were updated
                    if db is not None:
                        # return JsonResponse({'response': 'true',
                        #                      'email': request.POST['email']})
                        response = HttpResponse("", status=302)
                        response['Location'] = 'localhost:3000/profile'
                        return response
                    else:
                        response = 'Unable to store user dealbreakers.'
            else:
                response = 'Unable to store user attributes.'
        else:
            response = 'Unable to store user information.'
    else:
        # anonymous users shouldn't be able to access this
        response = 'User not logged in.'
    print("test")

    response = HttpResponse("", status=302)
    response['Location'] = 'localhost:3000/profile'
    return response
    # return JsonResponse({'response': response})
