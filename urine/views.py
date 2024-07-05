from django.http import HttpResponse
from django.views.generic import TemplateView

def home(request):
    return HttpResponse("Open -> Frontend -> frontend.html  (To test the functionality, for more info go to docs folder)")