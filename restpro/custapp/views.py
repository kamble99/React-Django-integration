from django.shortcuts import render
from rest_framework import viewsets
from custapp.models import Customer
from custapp.serializers import CustSerializer

# Create your views here.
class Custview(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustSerializer