from .models import Task


class ListTasksDto:
    def __init__(self, tasks):
        self.tasks = tasks


class ListTasksService:
    @staticmethod
    def execute():
        tasks = Task.objects.all()
        return ListTasksDto(tasks)
