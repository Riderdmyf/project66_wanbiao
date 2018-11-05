from django.conf.urls import url

from wanbiao import views

urlpatterns = [
    url(r'^$', views.index),
]