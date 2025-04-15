from django.urls import path,include
from rest_framework import routers
from custapp.views import Custview

rout=routers.DefaultRouter()
rout.register(r'cust' , Custview)

urlpatterns = [
    path("",include(rout.urls)),
]