let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let deviner = document.querySelector('.deviner');
let precedent = document.querySelector('.tentativePrec');
let indication = document.querySelector('.indication');
let soumettre = document.querySelector('.soumettre');
let champInput = document.querySelector('.champ');
let compteur = 1;
let reinitialisation ;

function verificationValeur(){
    let entreUtilisateur = Number(champInput.value);
    if(compteur === 1){
        deviner.textContent = 'Tentatives precedentes: '
    } deviner.textContent += entreUtilisateur + ' ';

    if(entreUtilisateur === nombreAleatoire){
        precedent.textContent = 'Felicitation vous avez trouve';
        indication.textContent = '';
        finDuJeu();
    }else if(compteur === 10){
        precedent.textContent = 'Le jeu est termine, Vous avez echouer toutes les tentatives';
        indication.textContent = '';
        finDuJeu();
    }else{
        precedent.textContent = 'Echec !'
        if(entreUtilisateur < nombreAleatoire){
            indication.textContent = "Votre nombre est plus petit"
        }else if(entreUtilisateur > nombreAleatoire){
            indication.textContent = 'Votre nombre est plus grand';
        }
    }

    compteur++;
    champInput.value = '';
    champInput.focus();
}


soumettre.addEventListener('click', verificationValeur);

function finDuJeu(){
    champInput.disable = true;
    soumettre.disable = true;
    reinitialisation = document.createElement('button');
    reinitialisation.body.appendChild(reinitialisation);
    reinitialisation.addEventListener('click', recommencer)
}

function recommencer(){
    compteur = 1;
    const resultat = document.querySelector('.resultat')
    for(const result of resultat){
        result.textContent = '';
    }

    reinitialisation.parentNode.removeChild(reinitialisation);
    champInput.disable = false;
    soumettre.disable = false;
    champInput.value = '';
    champInput.focus();
    nombreAleatoire = Math.floor(Math.random() * 100) +1;
}