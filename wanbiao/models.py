from django.db import models

# Create your models here.
class Base(models.Model):
    img = models.CharField(max_length=100)
    key_value = models.CharField(max_length=100)

    class Meta:
        abstract = True

class Wheel(Base):
    class Meta:
        db_table = 'lunbo'

class Epos(Base):
    class Meta:
        db_table = 'product'

class User(models.Model):
    phonenumber = models.CharField(max_length=11, unique=True)
    passwd = models.CharField(max_length=256)
    token = models.CharField(max_length=256)

    class Meta:
        db_table = 'wanbiao_user'