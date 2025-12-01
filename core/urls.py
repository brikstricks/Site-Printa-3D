from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app_home.urls')),          # página inicial
    path('portfolio/', include('app_portfolio.urls')),
    path('sobre/', include('app_sobre.urls')),
    path('contato/', include('app_contato.urls')),
]