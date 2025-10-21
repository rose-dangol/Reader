from django.contrib.auth.models import User
from django.db import models

from Books.models import Book

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(default='user-avatar/default.jpg', upload_to='user-avatar')
    pinned_books = models.ManyToManyField(Book, blank=True, related_name="pinned_by")
    # badges = models.ManyToManyField('Badge', blank=True)

    def __str__(self):
        return self.user.username

