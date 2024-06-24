from django.db import models
import uuid

# Create your models here.
class Series(models.Model):
    series_name = models.CharField(max_length=50)
    
class Rodeo(models.Model):
    rodeo_name = models.CharField(max_length=50)

class Contestant(models.Model):
    contestant_name = models.CharField(max_length=100)
    
class ContestRodeoSeries(models.Model):
    contstant = models.ForeignKey(Contestant, on_delete=models.CASCADE)
    rodeo = models.ForeignKey(Rodeo, on_delete=models.CASCADE)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)
    class Meta:
        unique_together = ('contestant', 'rodeo', 'sereis')

class Event(models.Model):
    event_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=50)
    is_timed = models.BooleanField()

class ContestEvent(models.Model):
    contest_rodeo_series_id = models.ForeignKey(ContestRodeoSeries, on_delete=models.CASCADE)
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)

class EventPartner(models.Model):
    contest_event_id = models.ForeignKey(ContestEvent, on_delete=models.CASCADE)
    partner_one = models.ForeignKey(Contestant, related_name='partner_one', on_delete=models.CASCADE)
    partner_two = models.ForeignKey(Contestant, related_name="partner_one", on_delete=models.CASCADE)