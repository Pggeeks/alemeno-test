from django.db import models

class UrineSample(models.Model):
    ## Better approch should use boto3 to store images on S3(AWS) instead of storing them locally
    image = models.ImageField(upload_to='samples/')
    result = models.TextField(max_length=500, blank=True) ## will save results
    upload_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        ## Formating the time so its human readable
        return self.upload_datetime.strftime('%Y-%m-%d %H:%M:%S')
