from django.conf.urls import url

from wanbiao import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^cart/$', views.cart),
    url(r'^mobile/$', views.mobile),
    url(r'^creditcard/$', views.creditcard),
    url(r'^service/$', views.service),
    url(r'^login/$', views.login),
    url(r'^register/$', views.register),

    url(r'^addwatch/$', views.addwatch),
]