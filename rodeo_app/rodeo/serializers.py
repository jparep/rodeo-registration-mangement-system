from rest_framework import serializers
from .models import Series, Rodeo, Contestant, Event, ContestEvent, EventPartner, MensBreakaway

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        module = Series
        fields = '__all__'

