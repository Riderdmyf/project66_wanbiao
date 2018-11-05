from django.conf.urls import url

from wanbiao import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^dingdan/$', views.dingdan),
    url(r'^mobile/$', views.mobile),
    url(r'^creditcard/$', views.creditcard),
    url(r'^service/$', views.service),
]