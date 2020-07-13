from django.db import models


class TeaStall(models.Model):
    username = models.CharField(verbose_name='Username', max_length=120)
    number = models.IntegerField(verbose_name='Number')
    payments = models.CharField(verbose_name='Payments', max_length=120)
    address = models.TextField(verbose_name='Address')
