from django.urls import path,include
from rest_framework import routers
from restapp.views import Foodview

rout=routers.DefaultRouter()
rout.register(r'foods', Foodview)


urlpatterns = [
    path("",include(rout.urls)),
]