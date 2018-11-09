import random

from django.shortcuts import render
from django.http import HttpResponse
from wanbiao.models import Watch

# Create your views here.

#index
def index(request):
    # return HttpResponse('wanbiao')
    return render(request, 'wanbiao/index.html')

#cart
def cart(request):
    return render(request, 'wanbiao/cart.html')

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
    return render(request, 'wanbiao/login.html')

#register
def register(request):
    return render(request, 'wanbiao/register.html')

#epos(buy page)
def epos(request):
    return render(request, 'wanbiao/epos.html')

#addwatch
def addwatch(request):

    watch = Watch()
    watch.img = 'img-' + str(random.randrange(500))

    watch.save()

    return HttpResponse('added watch successfully' + watch.img)