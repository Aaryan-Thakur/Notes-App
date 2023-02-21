import imp
from django.shortcuts import render
from requests import request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from django.views.decorators.csrf import csrf_exempt
from .utils import getNotes,createNote,getNote,updateNote,deleteNote

# Create your views here.

@api_view(['GET'])
def getRoute(request):

   routes = [

        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
   return Response(routes)

@api_view(['GET','POST'])
def notes(request):
    if(request.method=='GET'):
        return getNotes(request)
    
    elif(request.method=='POST'):
        return createNote(request)

@api_view(['GET','PUT','DELETE'])
def note(request,pk):
    if(request.method=='GET'):
        return getNote(request,pk)
    
    elif(request.method=='PUT'):
        return updateNote(request,pk)

    elif(request.method=='DELETE'):
        return deleteNote(request,pk)