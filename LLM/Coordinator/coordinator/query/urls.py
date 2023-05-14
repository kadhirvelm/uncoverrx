from coordinator.query import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="index"),
    path("api/", views.api.urls),
]
