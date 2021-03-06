# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-12 07:15
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wanbiao', '0004_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('isselect', models.BooleanField(default=True)),
                ('products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wanbiao.Epos')),
            ],
            options={
                'db_table': 'wanbiao_cart',
            },
        ),
        migrations.AddField(
            model_name='user',
            name='token',
            field=models.CharField(default=0, max_length=256),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wanbiao.User'),
        ),
    ]
