from django.db import models

# Create your models here.
class Watch(models.Model):
    img = models.CharField(max_length=100)

class Base(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

class Wheel(Base):
    pass