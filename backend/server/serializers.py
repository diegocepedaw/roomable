from rest_framework import serializers
from .models import User, Attributes, Preferences, Location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'handle','description')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'handle','description')
