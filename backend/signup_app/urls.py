# signup_app/urls.py
from django.urls import path
from .views import SignupView

urlpatterns = [
    path('signup', SignupView.as_view(), name='signup'),
]
