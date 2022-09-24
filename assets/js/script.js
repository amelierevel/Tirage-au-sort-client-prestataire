//Déclaration du tableau clients (entreprises)
let clients = ['Cyril', 'Virginie', 'Bertrand', 'Clara', 'Robin', 'Léa', 'Eymerik', 'Dylan', 'Flore', 'Alison', 'Marine', 'Ivan', 'Domitille', 'Caroline', 'Maxime'];
//Déclaration du tableau designers (prestataires)
let designers = ['Cyril', 'Virginie', 'Bertrand', 'Clara', 'Robin', 'Léa', 'Eymerik', 'Dylan', 'Flore', 'Alison', 'Marine', 'Ivan', 'Domitille', 'Caroline', 'Maxime'];
//Déclaration du tableau qui stockera les choix
let reminderTable = [];

//Fonction au click sur le btn, tirage d'un client et de son prestataire en random
choice.addEventListener('click', function () {
    //Random sur chaque tableau
    let randomClient = Math.floor(Math.random() * clients.length);
    let randomDesigner = Math.floor(Math.random() * designers.length);
    
    //Les tableaux ayant les mêmes valeurs si les valeurs random des tableaux (prénoms) sont différentes on affichera le tirage sinon msg d'erreur
    if (clients[randomClient] != designers[randomDesigner]) {
        answer.innerHTML = `<p>Entreprise <strong>${clients[randomClient]}</strong> votre prestataire sera <strong>${designers[randomDesigner]}</strong></p>`;
        //Suppression de la valeur tirée de chaque tableau
        clients.splice(randomClient, 1);
        designers.splice(randomDesigner, 1);
    } else {
        answer.innerHTML = `<p>Combinaison impossible, retente !</p>`;
    }

    //Ajout de la phrase de résultat dans le tableau de rappel sauf si c'est le msg d'erreur
    if (answer.innerHTML != '<p>Combinaison impossible, retente !</p>'){
        reminderTable.push(answer.innerHTML);
    }

    //Remise à 0 de l'affichage pour afficher tout le contenu du tableau 1 seule fois
    reminder.innerHTML = '';
    for(let i=0; i < reminderTable.length; i++){
        reminder.innerHTML += reminderTable[i];
    }
    console.log(clients + ' -- ' + designers);
    console.log(randomClient + ' -- ' + randomDesigner);
});