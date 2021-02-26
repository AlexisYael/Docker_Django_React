from django.contrib.auth.models import User, Group, Permission
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, requires_csrf_token, csrf_exempt
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from django.contrib import auth
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *


@api_view(['POST'])
@ensure_csrf_cookie
def login(request):
    """
    Sirve para que un usuario registrado inicie sesion dentro del sistema 

    metodos:
    POST --> Recibe las credenciales del usuario, si es aceptado regresa un token id_session a las cookies

    ejemplo:
    {"usuario":"JuanPruebas","password":"arancel123"}
  
    """
    if request.method =='POST':
        user = auth.authenticate(username=request.data['usuario'],password=request.data['password'])
        if user is not None:
            auth.login(request,user)

            return Response(data={'mensaje':{'text':'El inicio de sesion a sido exitoso','title':'Inicio de Sesion'}},status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data={'mensaje':{'text':'El usuario o la contraseña son incorrectos, favor de verificar','title':'Error en inicio de sesion'}},status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)

#enlista usuarios todos los usuarios
@api_view(['GET','POST'])
@ensure_csrf_cookie
@login_required
@csrf_protect
def get_all_users(request):
    """
    Sirve para obtener todos los usuarios que no sean superusuarios y que se encuentren activos


    GET --> Obtiene todos los usuarios que esten activos y no sean superusuarios (usuarios tipo empleado y cliente)
    POST --> Recibe el tipo se usuario que se desea ver y devuelve una lista ordenada

    keywords:
    Un usuario activo es aquel que tiene acceso al sistema

    returns HTTP GET:
    200 -OK Lista de usuarios dentro del sistema
    400 -BAD REQUEST La tabla no fue encontrada lo cual hace referecia a un problema de Base de Datos
    401 -UNAUTHORIZED Cuando se trata de hacer una peticion desde un metodo no permitido por la APP
    """
    if request.method == 'GET':
        try:
            User.objects.all()
        except User.DoesNotExist :
            return Response(data={'title':'Buscando usuarios registrados en el sistema','text':"Error al buscar los usuarios, favor de contactar a servicio tecnico error <BD_NOT_NOT_404>"},status=status.BAD_404_REQUEST)
        
        queryset = User.objects.filter(is_superuser=0)
        serializer = UserSerializer(queryset, many=True)
        return Response(data={'results': serializer.data,'title':'Listado de usarios registrado en el sistema','text':'Listado de todos los usuarios activos'},status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)