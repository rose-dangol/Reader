from rest_framework import serializers

from Reviews.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)
    book = serializers.StringRelatedField(many=False)
    class Meta:
        model = Review
        fields = "__all__"