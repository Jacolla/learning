from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class RoomView(generics.CreateAPIView):                                                  # Cambiar ListAPIView a CreateAPIView para hacer room directo, para pruebas
    queryset = Room.objects.all()                                                        # Si esta en ListAPIView, se puede ver cuantas hay creadas. Con respectivo DATA
    serializer_class = RoomSerializer



class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):            # Si no hay room,
            self.request.session.create()                                                # crea una nueva
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get("guest_can_pause")
            votes_to_skip = serializer.data.get("votes_to_skip")
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():                                                        # si ya existe room, SOLO modifica valores.
                room = queryset[1]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=["guest_can_pause", "votes_to_skip"])             # Estos valores        
            else:
                room = Room(host = host, guest_can_pause = guest_can_pause, votes_to_skip = votes_to_skip)
                room.save()
            return Response(RoomSerializer(Room).data, satus = status.HTTP_201_CREATED)

