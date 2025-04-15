from django.db import models

# Create your models here.
class Customer(models.Model):
    Name=models.CharField(max_length=100)
    Email=models.CharField(max_length=100)
    Mobno=models.CharField(max_length=11)
