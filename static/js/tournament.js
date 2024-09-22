document.addEventListener('DOMContentLoaded', function () {
    // Vérifie que les données sont bien récupérées
    console.log("Teams Quart de finale:", teamsData);
    console.log("Teams Demi-finale:", demiFinaleData);
    console.log("Teams Finale:", finaleData);
    console.log("Champion Data:", championData);
    console.log("Results Data:", resultsData);

    const tournoiContainer = document.getElementById('tournoi');
    if (!tournoiContainer) {
        console.error("Élément #tournoi introuvable");
        return;
    }

    // Fonction pour créer un élément d'équipe
    function createTeamElement(name, score) {
        const teamElement = document.createElement('div');
        teamElement.classList.add('team');
        teamElement.textContent = `${name} - ${score}`;  // Affiche le nom avec le score
        return teamElement;
    }

    // Fonction pour créer un match dans le bracket
    function createMatch(team1, team2, score1, score2) {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match');
        matchElement.appendChild(createTeamElement(team1, score1));
        matchElement.appendChild(createTeamElement(team2, score2));
        return matchElement;
    }

    // Fonction pour générer un round avec un titre
    function createRound(matches, roundTitle) {
        const roundElement = document.createElement('div');
        roundElement.classList.add('round');

        // Ajout du titre pour le round
        const roundTitleElement = document.createElement('h3');
        roundTitleElement.textContent = roundTitle;
        roundElement.appendChild(roundTitleElement);

        matches.forEach(match => {
            roundElement.appendChild(createMatch(match[0], match[1], match[2], match[3]));
        });
        return roundElement;
    }

    // Ajoute les rounds au bracket
    tournoiContainer.appendChild(createRound(teamsData, 'Quart de finale'));  // Quart de finale
    tournoiContainer.appendChild(createRound(demiFinaleData, 'Demi-finale'));  // Demi-finale
    tournoiContainer.appendChild(createRound(finaleData, 'Finale'));  // Finale

    // Ajoute le champion (une seule case avec couleur dorée)
    const championRound = document.createElement('div');
    championRound.classList.add('champion-round');  // Classe spéciale pour l'alignement du champion

    // Titre pour le champion
    const championTitleElement = document.createElement('h3');
    championTitleElement.textContent = 'Champion';
    championRound.appendChild(championTitleElement);

    const championElement = document.createElement('div');
    championElement.classList.add('team', 'champion'); // Classe spéciale pour le style doré

    if (championData[0][0] !== "En attente") {
        championElement.textContent = championData[0][0]; // Affiche le nom du gagnant
    } else {
        championElement.textContent = "En attente du gagnant"; // Si aucun gagnant
    }

    championRound.appendChild(championElement);
    tournoiContainer.appendChild(championRound);
});
