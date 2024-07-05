from django.urls import path
from .views import UploadImage

urlpatterns = [
    path('sample/upload', UploadImage.as_view(), name='upload_urine_strip'),
]