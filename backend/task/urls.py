from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add_task),
	path('get/', views.get_tasks),
	path('delete/<title>/', views.delete_task),
]