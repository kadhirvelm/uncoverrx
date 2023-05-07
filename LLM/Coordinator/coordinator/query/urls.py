from django.urls import path
from coordinator.query import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("", views.index, name="index"),
    path("request-exploration-text", csrf_exempt(views.request_exploration_text)),
]
