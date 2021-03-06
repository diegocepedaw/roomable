# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-04 15:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import geoposition.fields


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0009_auto_20171104_1113'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100, unique=True)),
                ('radius', models.IntegerField(default=0)),
                ('position', geoposition.fields.GeopositionField(max_length=42)),
                ('usr', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='server.User')),
            ],
        ),
    ]
