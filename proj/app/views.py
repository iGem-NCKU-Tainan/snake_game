from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
import json
from app.models import Player

# Create your views here.


@ensure_csrf_cookie
def snake_game(request):
    return render(request, 'index.html', {
        'current_time': str(datetime.now()),
    })


@csrf_exempt
def update(request):
    if request.is_ajax() and request.POST:
        players = json.loads(request.body.decode("utf-8"))
        for player in players:
            print(player["rank"])
            print(player["name"])
            print(player["score"])
            print(player["team"])
            Player.objects.create(name=player['name'], team=player['team'], rank=player['rank'], score=player['score'])
            print(type(player))
            print(player)
        return HttpResponse("success", content_type="text/plain")
    else:
        raise Http404
