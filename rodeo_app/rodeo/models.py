from django.db import models
import uuid

class Series(models.Model):
    series_name = models.CharField(max_length=50)

class Rodeo(models.Model):
    rodeo_name = models.CharField(max_length=50)

class Contestant(models.Model):
    contestant_name = models.CharField(max_length=100)

class ContestRodeoSeries(models.Model):
    contestant = models.ForeignKey(Contestant, on_delete=models.CASCADE)
    rodeo = models.ForeignKey(Rodeo, on_delete=models.CASCADE)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('contestant', 'rodeo', 'series')

class Event(models.Model):
    event = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=50)
    is_timed = models.BooleanField()

class ContestEvent(models.Model):
    contest_rodeo_series = models.ForeignKey(ContestRodeoSeries, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

class EventPartner(models.Model):
    contest_event = models.ForeignKey(ContestEvent, on_delete=models.CASCADE)
    partner_one = models.ForeignKey(Contestant, related_name='partner_one', on_delete=models.CASCADE)
    partner_two = models.ForeignKey(Contestant, related_name='partner_two', on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.CheckConstraint(check=~models.Q(partner_one=models.F('partner_two')), name='check_different_partners')
        ]

class MensBreakaway(models.Model):
    contest_event = models.ForeignKey(ContestEvent, on_delete=models.CASCADE)
    mb_number = models.IntegerField()
