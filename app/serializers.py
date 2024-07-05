from rest_framework import serializers
from .models import UrineSample
class UrineStripSerializer(serializers.ModelSerializer):
    class Meta:
        model = UrineSample
        fields = ['id', 'image', 'upload_time']