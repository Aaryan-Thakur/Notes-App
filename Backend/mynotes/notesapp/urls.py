from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoute,name="routes"),
    path('notes/',views.notes,name="notes"),
    path('notes/<str:pk>/',views.note,name="note")

    # path('notes/<str:pk>/update',views.updateNote,name="update-note"),
    # path('notes/<str:pk>/delete',views.deleteNote,name="delete-note"),
    # path('notes/new/',views.createNote,name="create-note"),



]