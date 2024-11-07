from rest_framework import serializers
from core.models import Usuario

class UsuarioSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'