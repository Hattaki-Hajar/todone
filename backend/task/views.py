from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import date

from .models import Task
from .serializers import TaskSerializer
# Create your views here.

@api_view(['POST'])
def add_task(request):
	data = request.data
	print('in adding: ', data)
	if not ('title' in data.keys() and 'description' in data.keys()):
		return Response(data="missing key", status=status.HTTP_400_BAD_REQUEST)
	if data['title'] and data['description']:
		task = Task(
			title=data['title'],
			description=data['description'],
			done=False,
			date_added=date.today())
		task.save()
		return Response(status=status.HTTP_200_OK)
	return Response(data='empty field',status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_tasks(request):
	tasks = Task.objects.all()
	tasks_serializer = TaskSerializer(tasks, many=True)
	return Response(data=tasks_serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_task(request, id):
	print('id: ', id)
	try:
		print('in try')
		Task.objects.get(id=id).delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
	except:
		return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def update_task(request, id):
	print('update: ',request.data, " id: ", id)
	return Response(status=status.HTTP_200_OK);
