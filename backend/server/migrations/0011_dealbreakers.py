# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-04 18:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0010_location'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dealbreakers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100, unique=True)),
                ('gender', models.CharField(default='M', max_length=1)),
                ('pet', models.BooleanField(default=False)),
                ('smoke', models.BooleanField(default=False)),
                ('sleep_late', models.BooleanField(default=False)),
                ('rise_early', models.BooleanField(default=False)),
                ('neat', models.BooleanField(default=False)),
                ('friends', models.BooleanField(default=False)),
                ('music', models.BooleanField(default=False)),
                ('language', models.CharField(default='english', max_length=200)),
                ('budget', models.IntegerField(default=0)),
                ('dishes', models.BooleanField(default=False)),
                ('skimpy', models.BooleanField(default=False)),
                ('drink', models.BooleanField(default=False)),
                ('drugs', models.BooleanField(default=False)),
                ('shower', models.BooleanField(default=False)),
                ('tv', models.BooleanField(default=False)),
                ('usr', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='server.User')),
            ],
        ),
    ]
