from django.conf.urls import url

from wanbiao import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mobile/$', views.mobile, name='mobile'),
    url(r'^creditcard/$', views.creditcard, name='creditcard'),
    url(r'^service/$', views.service, name='service'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^epos/$', views.epos, name='epos'), #buy page

    url(r'^checkaccount/&', views.checkaccount, name='checkaccount'),
    url(r'^addcart/$', views.addcart, name='addcart'),
]