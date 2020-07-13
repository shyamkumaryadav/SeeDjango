from rest_framework import generics
from .serializers import TeaSerializer
from .models import TeaStall


class TeaListCreate(generics.ListCreateAPIView):
    queryset = TeaStall.objects.all()
    serializer_class = TeaSerializer
