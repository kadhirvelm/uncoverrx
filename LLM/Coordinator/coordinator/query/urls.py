from django.urls import path
from query import views

urlpatterns = [path("", views.index, name="index")]
