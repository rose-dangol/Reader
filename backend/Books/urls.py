from django.urls import path
from rest_framework import routers

from . import views
from .views import *

router = routers.DefaultRouter()
router.register('books',BookViewset, basename='book')

urlpatterns = [
    # path('books/', book_list.as_view({'get':'list'}), name='book-list'),
    # path('books/<int:pk>/', book_detail.as_view(), name='book-detail'),
]+router.urls
