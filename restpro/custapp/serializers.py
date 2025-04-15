from rest_framework import serializers
from custapp.models import Customer

class CustSerializer(serializers.HyperlinkedModelSerializer):
    Id=serializers.ReadOnlyField()
    class Meta:
        model=Customer
        fields='__all__'
