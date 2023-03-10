import imp
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from django.views.decorators.csrf import csrf_exempt

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
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/`',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
   return Response(routes)


def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)


def createNote(request):
    data = request.data

    note = Note.objects.create(
        body=data
    )
    serializer = NoteSerializer(instance=note,data=data)
    if(serializer).is_valid():
        serializer.save()
    return Response()


def getNote(request,pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes)
    return Response(serializer.data)

@csrf_exempt
def updateNote(request,pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note,data=data)

    if(serializer).is_valid():
        serializer.save()

    return Response(serializer.data)

@csrf_exempt
def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response()
