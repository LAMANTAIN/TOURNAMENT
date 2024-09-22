from django.urls import path
from . import views

urlpatterns = [
    path('', views.liste_tournois, name='liste_tournois'),  # Page pour lister tous les tournois
    path('tournoi/<int:tournoi_id>/', views.afficher_tournoi, name='afficher_tournoi'),  # Afficher le tournoi (détails et bracket)
]
