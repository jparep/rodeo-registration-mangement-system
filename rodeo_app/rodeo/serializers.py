from rest_framework import serializers
from .models import Series, Rodeo, Contestant, ContestRodeoSeries, Event, ContestEvent, EventPartner, MensBreakaway

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = '__all__'

class RodeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rodeo
        fields = '__all__'

class ContestantSerializer(serializers.ModelSerializer):  # Fixed typo
    class Meta:
        model = Contestant
        fields = '__all__'

class ContestRodeoSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContestRodeoSeries
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'   

class ContestEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContestEvent
        fields = '__all__'

class EventPartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventPartner
        fields = '__all__'

class MensBreakawaySerializer(serializers.ModelSerializer):
    class Meta:
        model = MensBreakaway
        fields = '__all__'
