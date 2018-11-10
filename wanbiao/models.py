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