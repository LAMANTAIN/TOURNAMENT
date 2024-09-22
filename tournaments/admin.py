from django.contrib import admin
from .models import Joueur, Match, Tournoi

class MatchAdmin(admin.ModelAdmin):
    list_display = ('participant1', 'participant2', 'score_participant1', 'score_participant2', 'gagnant', 'round', 'tournoi')
    fields = ('participant1', 'participant2', 'score_participant1', 'score_participant2', 'gagnant', 'round', 'tournoi')
    list_editable = ('score_participant1', 'score_participant2', 'gagnant',)
    
    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        # Appeler la méthode pour mettre à jour le gagnant
        obj.mettre_a_jour_gagnant()

class TournoiAdmin(admin.ModelAdmin):
    list_display = ('nom', 'date_debut', 'date_fin', 'champion')

admin.site.register(Joueur)
admin.site.register(Match, MatchAdmin)
admin.site.register(Tournoi, TournoiAdmin)
