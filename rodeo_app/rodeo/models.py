from django.db import models

# Create your models here.
class Series(models.Model):
    name = models.CharField(max_length=50)
    
class Rodeo(models.Model):
    name = models.CharField(max_length=50)

class Contestant(models.Model):
    name = models.CharField(max_length=100)
    
class ContestRodeoSeries(models.Model):
    contstant = models.ForeignKey(Contestant, on_delete=models.CASCADE)
    rodeo = models.ForeignKey(Rodeo, on_delete=models.CASCADE)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)
    class Meta:
        unique_together = (('contestant'), ('rodeo'), ('sereis'),)

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    is_timed = models.BooleanField()