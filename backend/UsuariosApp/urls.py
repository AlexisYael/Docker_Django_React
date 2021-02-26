from django.contrib.auth.decorators import login_required
from django.urls import path, include
from . import views


urlpatterns = [
    path('login/', views.login),
    path('get_users/',login_required(views.get_all_users)),
]