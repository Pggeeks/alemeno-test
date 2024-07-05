from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UrineStripSerializer
from django.http import JsonResponse
from .utils import calculate_rgb
from rest_framework import status

class UploadImage(APIView):
    serializer_class = UrineStripSerializer
    '''
    API to Upload Urine Strip Image and returns response with colors(RGB)
    '''
    def post(self, request, *args, **kwargs):
        file_serializer = self.serializer_class(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            image_path = file_serializer.data['image']
            colors = calculate_rgb(image_path)
            return JsonResponse({"colors": colors}, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

