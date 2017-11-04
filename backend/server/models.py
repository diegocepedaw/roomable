# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    email =  models.ForeignKey('auth.User')
    handle = models.CharField(max_length=200)
    description = models.TextField()



class Attributes(models.Model):
    email = models.ForeignKey('auth.User')
    gender = models.CharField(max_length=1, default='M')
    pet = models.BooleanField(default=False)
    smoke = models.BooleanField(default=False)
    sleep_late = models.BooleanField(default=False)
    rise_early = models.BooleanField(default=False)
    neat = models.BooleanField(default=False)
    friends = models.BooleanField(default=False)
    music = models.BooleanField(default=False)
    language = models.CharField(max_length=200, default='english')
    budget= models.IntegerField(default=0)
    dishes = models.BooleanField(default=False)
    skimpy = models.BooleanField(default=False)
    drink = models.BooleanField(default=False)
    drugs = models.BooleanField(default=False)
    shower = models.BooleanField(default=False)
    tv = models.BooleanField(default=False)

class Preferences(models.Model):
    email = models.ForeignKey('auth.User')
    gender = models.CharField(max_length=1, default='M')
    pet = models.BooleanField(default=False)
    smoke = models.BooleanField(default=False)
    sleep_late = models.BooleanField(default=False)
    rise_early = models.BooleanField(default=False)
    neat = models.BooleanField(default=False)
    friends = models.BooleanField(default=False)
    music = models.BooleanField(default=False)
    language = models.CharField(max_length=200, default='english')
    budget= models.IntegerField(default=0)
    dishes = models.BooleanField(default=False)
    skimpy = models.BooleanField(default=False)
    drink = models.BooleanField(default=False)
    drugs = models.BooleanField(default=False)
    shower = models.BooleanField(default=False)
    tv = models.BooleanField(default=False)
