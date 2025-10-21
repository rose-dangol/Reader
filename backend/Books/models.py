from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    cover_image = models.ImageField(default='book-cover/default.jpg', upload_to='book-cover')
    published_date = models.DateField(null=True, blank=True)
    genres = models.ManyToManyField('Genre', related_name='books', blank=True)

    def __str__(self):
        return self.title

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name