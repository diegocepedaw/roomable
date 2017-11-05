# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
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
    if AuthUser.objects.filter(
            email=request.POST['email']).first() is not None:
        response = {'response': 'false'}
    else:
        # create the user with the username=email, email=None, and
        # password=password
        AuthUser.objects.create_user(
            request.POST['email'],
            None,
            request.POST['password'])

        response = {'response': 'true', 'email': request.POST['email']}
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
            'authenticated': 'true',
            'email': request.POST['email']}
    else:
        # No backend authenticated the credentials
        response = {'authenticated': 'false'}
    return JsonResponse(response)

# updates the user's handle, description, preferences, attributes, and
# dealbreakers


def updateuserinfo(request):
    if request.method != 'POST':
        return HttpResponse(status=404)
    '''
    # check if the user is logged in
    if request.user.is_authenticated:
        # store the handle and description in the PublicUser
        User.objects.update_or_create(
            usr=request.user.username,
            defaults={
                'email':request.user.username, handle=,
                description='im october')
    else:
        # anonymous users shouldn't be able to access this
        return HttpResponse(status=404)

    try:
        print('hi')
        testUser = AuthUser.objects.get(username='kevin')
        print('bye')
    except AuthUser.DoesNotExist:
        return HttpResponse(status=404)

    # create the user with the username=email, email=None, and
     password=password
    user = create_user(request.POST['email'], None,
     request.POST['password'])'''
    return render(request, 'REGISTRATION_PAGE_NAME')
