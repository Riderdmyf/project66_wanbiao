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

class Epos(models.Model):
    id_product = models.CharField(max_length=5)
    name = models.CharField(max_length=256)
    xh = models.CharField(max_length=100)
    bh = models.CharField(max_length=100)
    pp = models.CharField(max_length=100)
    wbj = models.CharField(max_length=20)
    yj = models.CharField(max_length=20)
    yq = models.CharField(max_length=20)
    bimg1 = models.CharField(max_length=100)
    bimg2 = models.CharField(max_length=100)
    bimg3 = models.CharField(max_length=100)
    bimg4 = models.CharField(max_length=100)
    bimg5 = models.CharField(max_length=100)
    bimg6 = models.CharField(max_length=100)

    class Meta:
        db_table = 'product'

class User(models.Model):
    phonenumber = models.CharField(max_length=11, unique=True)
    passwd = models.CharField(max_length=256)
    token = models.CharField(max_length=256)

    class Meta:
        db_table = 'wanbiao_user'

class Cart(models.Model):
    user = models.ForeignKey(User)
    products = models.ForeignKey(Epos)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)

    class Meta:
        db_table = 'wanbiao_cart'