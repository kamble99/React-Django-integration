from rest_framework import serializers
from restapp.models import Food

class FoodSerializer(serializers.HyperlinkedModelSerializer):
    foodId=serializers.ReadOnlyField()
    class Meta:
        model=Food
        fields='__all__'
