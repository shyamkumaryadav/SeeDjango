from django.urls import path
from .views import TeaListCreate

urlpatterns = [
    path('', TeaListCreate.as_view()),
]
