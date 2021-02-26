#@author Angel Porras Najera
#Definicion de Serializers: herramientas que nos sirven para definir la estructura del mensaje a mandar
#Fuentes : https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
from rest_framework import serializers
from django.contrib.auth.models import User, Group

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','last_login','date_joined','is_active')