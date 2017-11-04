# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from geoposition.fields import GeopositionField

# Create your models here.

class User(models.Model):
    usr = models.ForeignKey('auth.User')
    email =  models.CharField(max_length=100, unique=True)
    handle = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.email


class Attributes(models.Model):
    usr = models.ForeignKey('server.User')
    email =  models.CharField(max_length=100, unique=True)
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
    usr = models.ForeignKey('server.User')
    email =  models.CharField(max_length=100, unique=True)
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

class Location(models.Model):
    usr = models.ForeignKey('server.User')
    email =  models.CharField(max_length=100, unique=True)
    radius = models.IntegerField(default=0)
    position = GeopositionField()
