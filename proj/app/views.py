from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
import json
from django.core import serializers
from app.models import Player

# Create your views here.


@ensure_csrf_cookie
def snake_game(request):
    players = Player.objects.all()
    return render(request, 'index.html', {
        'players': players,
    })


def get_data(request):
    if request.is_ajax():
        players_json = serializers.serialize("json", Player.objects.all())
        return HttpResponse(players_json, content_type="application/json")
    else:
        raise Http404


@csrf_exempt
def update(request):
    if request.is_ajax() and request.POST:
        Player.objects.all().delete()
        players = json.loads(request.body.decode("utf-8"))
        for player in players:
            Player.objects.create(name=player['name'], team=player['team'], rank=player['rank'], score=player['score'])
        return HttpResponse("success", content_type="text/plain")
    else:
        raise Http404
