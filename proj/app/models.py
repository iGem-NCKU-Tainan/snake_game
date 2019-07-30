from django.db import models

# Create your models here.


class Player(models.Model):
    rank = models.IntegerField(default=0)
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.name
