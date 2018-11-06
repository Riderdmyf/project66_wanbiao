from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#index
def index(request):
    # return HttpResponse('wanbiao')
    return render(request, 'wanbiao/index.html')

#cart
def cart(request):
    return HttpResponse(request, 'wanbiao/cart.html')

#mobile
def mobile(request):
    return HttpResponse('mobile')

#creditcard
def creditcard(request):
    return HttpResponse('creditcard')

#service
def service(request):
    return HttpResponse('service')

#login
def login(request):
    return HttpResponse(request, 'wanbiao/login.html')

#register
def register(request):
    return HttpResponse(request, 'wanbiao/register')