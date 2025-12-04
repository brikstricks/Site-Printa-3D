from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),          # página inicial
    path('portfolio/', include('portfolio.urls')),
    path('sobre/', include('sobre.urls')),
    path('contato/', include('contato.urls')),
]