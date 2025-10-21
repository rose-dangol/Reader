from django.contrib import admin

import Books
from Books.models import Book, Genre

# Register your models here.
admin.site.register(Book)
admin.site.register(Genre)