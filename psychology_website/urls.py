from django.urls import path

from psychology_website.views import home

urlpatterns = [
    path('', home),
]
