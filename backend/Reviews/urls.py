from django.urls import path
from rest_framework import routers
from . import views
from .views import *

router = routers.DefaultRouter()
router.register('reviews',ReviewViewSet, basename='review')

urlpatterns = [

]+router.urls
