from django.shortcuts import render
from .services import ListTasksService


def list_tasks(request):
    dto = ListTasksService.execute()
    return render(request, 'tasks/list.html', {
        'dto': dto
    })
