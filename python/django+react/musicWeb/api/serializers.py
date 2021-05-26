from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ("id","code","host","guest_can_pause","vote_to_skip","created_at",)        #Esto se prepara con un POST, es decir, podemos usar el DATA para hacer nueva room

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields= ("guest_can_pause","vote_to_skip")