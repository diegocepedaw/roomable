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

    targetemail = 'adam'
    compUser = User.objects.get(email=targetemail)
    userlist = User.objects.all()

    matchesjson = []
    # loop through and calculate matc percentage
    # Build response json
    for user in userlist:
        if (user.email == compUser.email):
            continue

        # compare target users preferences to other user's attributes

        pypref = serializers.serialize( "python", Preferences.objects.filter(email=targetemail) )
        pyattr = serializers.serialize( "python", Attributes.objects.filter(email=user.email) )

        # calculate match percentage
        questionCount = 0.0
        correctCount = 0.0
        for (k,v), (k2,v2) in zip(pypref[0]['fields'].items(), pyattr[0]['fields'].items()):
            questionCount += 1.0
            if(v == v2):
                correctCount +=1.0

        matchPercentage = (correctCount/questionCount)*100
        
        #serialize query results
        attr = json.loads(serializers.serialize('json', Attributes.objects.filter(email=user.email)))
        pref = json.loads(serializers.serialize('json', Preferences.objects.filter(email=user.email)))
        usr  = json.loads(serializers.serialize('json', User.objects.filter(email=user.email)))



        data = OrderedDict([('email',usr[0]['fields']['email']), ('handle',usr[0]['fields']['handle']),('description',usr[0]['fields']['description']), ('attributes',attr[0]['fields']), ('preferences',pref[0]['fields']), ('match',matchPercentage)])



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
