from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    genres = serializers.StringRelatedField(many=True, )
    class Meta:
        model = Book
        # fields = '__all__'
        exclude = ['id']
