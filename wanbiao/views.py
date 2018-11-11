import uuid

from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse

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

        # request.session['token'] = user.token

        return redirect('wanbiao:index')

#epos(buy page)
def epos(request):
    return render(request, 'wanbiao/epos.html')

#checkaccount
def checkaccount(request):
    account = request.GET.get('account')

    responseData = {
        'msg': 'account useable',
        'status': 'fine'
    }

    try:
        user = User.objects.get(account=account)
        responseData['msg'] = 'account has been used'
        responseData['status'] = 'error'
        return JsonResponse(responseData)
    except:
        return JsonResponse(responseData)