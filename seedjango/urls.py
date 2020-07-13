from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('gui.urls')),
    path('api/', include('tea.urls')),
    path('admin/', admin.site.urls),
]
