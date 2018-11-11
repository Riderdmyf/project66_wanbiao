import uuid

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

from wanbiao.models import Wheel, User


#index
def index(request):
    wheels = Wheel.objects.all()
    data = {
        'wheels':wheels,
    }
    return render(request, 'wanbiao/index.html', context=data)

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
    if request.method == 'GET':
        return render(request, 'wanbiao/register.html')
    elif request.method == 'POST':
        user = User()
        user.phonenumber = request.POST.get('phonenumber')
        user.passwd = request.POST.get('passwd')
        # user.token = str(uuid.uuid5(uuid.uuid4(), 'register'))
        user.save()

#epos(buy page)
def epos(request):
    return render(request, 'wanbiao/epos.html')