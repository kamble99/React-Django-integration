from django.shortcuts import render
from restapp.models import Food
from restapp.serializers import FoodSerializer
from rest_framework import viewsets
# Create your views here.
class Foodview(viewsets.ModelViewSet):
    queryset =Food.objects.all()
    serializer_class=FoodSerializer
