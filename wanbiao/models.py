from django.db import models

# Create your models here.
class Watch(models.Model):
    img = models.CharField(max_length=100)