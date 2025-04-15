from django.db import models

# Create your models here.
class Food(models.Model):
    foodId=models.AutoField(primary_key=True)
    foodName=models.CharField(max_length=100)
    foodtype=models.CharField(max_length=100)
    foodCategory=models.CharField(max_length=100)
    price=models.IntegerField()