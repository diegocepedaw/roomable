# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {
        'sitename':'Roomable!',
        'page': 'testpage.html',
    }
    return render(request, 'server/index.html', context)

def testpage(request):
    context = {
    }
    return render(request, 'server/testpage.html', context)
