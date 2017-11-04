# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.core import serializers
from .models import User, Attributes, Preferences

import json
from collections import OrderedDict
# from django.http import HttpResponse

# Create your views here.
def index(request):

    compUser = "user1"
    userlist = User.objects.all()

    matchesjson = []
    # loop through and calculate matc percentage
    # Build response json
    for user in userlist:
        if (str(user.email) == compUser):
            continue

        # calculate match percentage


        #serialize query results
        attr = json.loads(serializers.serialize('json', Attributes.objects.filter(email=user.email)))
        pref = json.loads(serializers.serialize('json', Preferences.objects.filter(email=user.email)))
        usr  = json.loads(serializers.serialize('json', User.objects.filter(email=user.email)))

        data = OrderedDict([('email',usr[0]['fields']['email']), ('handle',usr[0]['fields']['handle']),('description',usr[0]['fields']['description']), ('attributes',attr[0]['fields']), ('preferences',pref[0]['fields'])])

        matchesjson.append(data)


    matchResponse = json.dumps({'userlist':matchesjson})

    context = {
        'sitename':'Roomable!',
        'page': 'testpage.html',
        'matches': matchResponse,
    }

    return render(request, 'server/index.html', context)

def testpage(request):
    context = {
    }
    return render(request, 'server/testpage.html', context)
