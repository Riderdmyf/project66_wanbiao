from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#index
def index(request):
    return HttpResponse('wanbiao')

#dingdan
def dingdan(request):
    return HttpResponse('dingdan')

#mobile
def mobile(request):
    return HttpResponse('mobile')

#creditcard
def creditcard(request):
    return HttpResponse('creditcard')

#service
def service(request):
    return HttpResponse('service')