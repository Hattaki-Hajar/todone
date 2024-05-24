from django.db import models
from django.core import validators
# Create your models here.

class	Task(models.Model):
	title = models.CharField(max_length=50, validators=[validators.MinLengthValidator(3)], unique=True)
	description = models.TextField()
	done = models.BooleanField()
	date_added = models.DateField()
	date_done = models.DateField(null=True)
