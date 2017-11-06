# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.core import serializers
from .models import User, Preferences, Attributes, Dealbreakers
from django.http import HttpResponse, JsonResponse

import json
from collections import OrderedDict
# from django.http import HttpResponse
from django.contrib.auth.models import User as AuthUser
from django.contrib.auth import authenticate, login

# Create your views here.


def getuser(request, pk):

    if request.method == 'GET':

        targetemail = pk
        # check that user exists
        try:
            User.objects.get(email=targetemail)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        # serialize query results
        attr = json.loads(serializers.serialize(
            'json', Attributes.objects.filter(email=targetemail)))
        pref = json.loads(serializers.serialize(
            'json', Preferences.objects.filter(email=targetemail)))
        usr = json.loads(
            serializers.serialize(
                'json', User.objects.filter(
                    email=targetemail)))

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

        return JsonResponse(data)

    else:
        return HttpResponse(status=404)


def getmatches(request, pk):

    if request.method == 'GET':

        targetemail = pk
        # check that user exists
        try:
            compUser = User.objects.get(email=targetemail)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        userlist = User.objects.all()

        matchesjson = []

        # loop through and calculate matc percentage
        # Build response json
        for user in userlist:
            if (user.email == compUser.email):
                continue

            # compare target users preferences to other user's attributes

            pypref = serializers.serialize(
                "python", Preferences.objects.filter(
                    email=targetemail))
            pyattr = serializers.serialize(
                "python", Attributes.objects.filter(
                    email=user.email))

            dealbreakers = serializers.serialize(
                "python", Dealbreakers.objects.filter(
                    email=targetemail))

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
                'json', Attributes.objects.filter(email=user.email)))
            pref = json.loads(serializers.serialize(
                'json', Preferences.objects.filter(email=user.email)))
            usr = json.loads(
                serializers.serialize(
                    'json', User.objects.filter(
                        email=user.email)))

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

        matchResponse = {'userlist': matchesjson}

        return JsonResponse(matchResponse)
    else:
        return HttpResponse(status=404)


def registeruser(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    # ensure the email isn't already registered
    if AuthUser.objects.get(
            email=request.POST['email']) is None:
        # create the user with the username=email, email=None, and
        # password=password
        if AuthUser.objects.create_user(
            request.POST['email'],
            None,
            request.POST['password']
        ) is not None:
            response = {'response': 'true', 'email': request.POST['email']}
        else:
            response = {'response': 'Unable to create user.'}
    else:
        response = {'response': 'A user with that email already exists.'}

    return JsonResponse(response)


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
def updateuserinfo(request):
    if request.method != 'POST':
        return HttpResponse(status=404)

    # check if the user is logged in
    if request.user.is_authenticated:
        # store the handle and description in the PublicUser
        (user, created) = User.objects.update_or_create(
            usr=request.user.username,
            defaults={
                'email': request.user.username,
                'handle': request.POST['handle'],
                'description': request.POST['preferences']})
        # ensure the basic user info was updated
        if user is not None:
            # create dict for the attributes
            data = {}
            data['email'] = request.user.username
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
            data['budget'] = int(request.POST['budget'])
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
                                usr=user, defaults=data)
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
                data['drugs'] = (True if request.POST['drugs_pref']
                                 is 'True' else False)
                data['shower'] = (True if request.POST['shower_pref']
                                  is 'True' else False)
                data['tv'] = (True if request.POST['tv_pref']
                              is 'True' else False)
                # store preferences
                (pref, created) = Preferences.objects.update_or_create(
                                    usr=user, defaults=data)
                # ensure the preferences were updated
                if pref is not None:
                    # update dict for the dealbreakers
                    data['gender'] = (True if request.POST['db_gender']
                                      is 'True' else False)
                    data['pet'] = (True if request.POST['db_pet']
                                   is 'True' else False)
                    data['smoke'] = (True if request.POST['db_smoke']
                                     is 'True' else False)
                    data['sleep_late'] = (True if request.POST['db_sleep_late']
                                          is 'True' else False)
                    data['rise_early'] = (True if request.POST['db_rise_early']
                                          is 'True' else False)
                    data['neat'] = (True if request.POST['db_neat']
                                    is 'True' else False)
                    data['friends'] = (True if request.POST['db_friends']
                                       is 'True' else False)
                    data['music'] = (True if request.POST['db_music']
                                     is 'True' else False)
                    data['language'] = (True if request.POST['db_language']
                                        is 'True' else False)
                    # del data['budget']
                    data['budget'] = False
                    data['dishes'] = (True if request.POST['db_dishes'] is
                                      'True' else False)
                    data['skimpy'] = (True if request.POST['db_skimpy'] is
                                      'True' else False)
                    data['drink'] = (True if request.POST['db_drink'] is
                                     'True' else False)
                    data['drugs'] = (True if request.POST['db_drugs'] is
                                     'True' else False)
                    data['shower'] = (True if request.POST['db_shower'] is
                                      'True' else False)
                    data['tv'] = (True if request.POST['db_tv'] is
                                  'True' else False)
                    # store dealbreakers
                    (db, created) = Dealbreakers.objects.update_or_create(
                                        usr=user, defaults=data)
                    # ensure the dealbreakers were updated
                    if db is not None:
                        return JsonResponse({'response': 'true',
                                             'email': request.user.username})
                    else:
                        response = 'Unable to store user dealbreakers.'
            else:
                response = 'Unable to store user attributes.'
        else:
            response = 'Unable to store user information.'
    else:
        # anonymous users shouldn't be able to access this
        response = 'User not logged in.'

    return JsonResponse({'response': response})
