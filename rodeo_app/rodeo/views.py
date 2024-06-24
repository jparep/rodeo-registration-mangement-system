from django.shortcuts import render
from rest_framework import viewsets
from .models import Series, Rodeo, Contestant, ContestRodeoSeries, Event, ContestEvent, EventPartner, MensBreakaway
from .serializers import SeriesSerializer, RodeoSerializer, ContestantSerializer, ContestRodeoSeriesSerializer, EventSerializer, EventPartnerSerializer, ContestEventSerializer, MensBreakawaySerializer

class SeriesViewSet(viewsets.ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer

class RodeoViewSet(viewsets.ModelViewSet):
    queryset = Rodeo.objects.all()
    serializer_class = RodeoSerializer

class ContestantViewSet(viewsets.ModelViewSet):
    queryset = Contestant.objects.all()
    serializer_class = ContestantSerializer

class ContestRodeoSeriesViewSet(viewsets.ModelViewSet):
    queryset = ContestRodeoSeries.objects.all()
    serializer_class = ContestRodeoSeriesSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ContestEventViewSet(viewsets.ModelViewSet):
    queryset = ContestEvent.objects.all()
    serializer_class = ContestEventSerializer

class EventPartnerViewSet(viewsets.ModelViewSet):
    queryset = EventPartner.objects.all()
    serializer_class = EventPartnerSerializer

class MensBreakawayViewSet(viewsets.ModelViewSet):
    queryset = MensBreakaway.objects.all()
    serializer_class = MensBreakawaySerializer