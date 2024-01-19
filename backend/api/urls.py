# webapi_project/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('signup_app.urls')),
    path('api/', include('login_app.urls')),
]
