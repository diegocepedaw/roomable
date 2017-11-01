# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import User, Attributes, Preferences

# Register your models here.
admin.site.register(User)
admin.site.register(Attributes)
admin.site.register(Preferences)
