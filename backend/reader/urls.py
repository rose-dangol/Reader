from django.urls import path, include

urlpatterns = [
    path('', include('Books.urls')),
    path('', include('Reviews.urls')),
]
