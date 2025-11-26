from django.contrib import admin
from django.urls import path, include
from views import about

urlpatterns = [
    path('', about, name='home'),
    path('admin/', admin.site.urls),
    path('about/', about, name='about'),
    path('tasks/', include('tasks.urls')),
]
