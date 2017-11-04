# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-04 15:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0008_auto_20171104_1104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attributes',
            name='usr',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='server.User'),
        ),
        migrations.AlterField(
            model_name='preferences',
            name='usr',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='server.User'),
        ),
    ]
