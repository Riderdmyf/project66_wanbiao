from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#index
def index(request):
    return HttpResponse('wanbiao')

#dingdan
def dingdan(request):
    return HttpResponse('dingdan')