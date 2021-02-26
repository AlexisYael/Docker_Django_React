from django.contrib import admin
from django.urls import path, include
from UsuariosApp import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('UsuariosApp/', include('UsuariosApp.urls')),
]
