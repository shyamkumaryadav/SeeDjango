from rest_framework import serializers
from .models import TeaStall


class TeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeaStall
        fields = '__all__'
