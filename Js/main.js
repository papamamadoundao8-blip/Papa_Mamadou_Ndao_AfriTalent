//Dans cette pertie nous avons le code qui nous permet d'activer le théme clair
// Premierement je viens recupérer l'id du bouton qui me permet de passer de mode claire à mode sombre
let NOIRBLANC = document.getElementById('NOIRBLANC');
//Deuxiemement on verifie si le theme (une clé) enregistrer dans le localStorage est light (clair) 
// . Si c'est le cas on applique la fontion activer pour le mode clair sinon on appelle la fontion desactiver pour le mode sombre
if (localStorage.getItem('theme') === 'light') {
    activer();
}
else {
    desactiver();
}
//Troisiement , on va ajouter un evenement (un click)
NOIRBLANC.addEventListener('click', function () {
    // Pour cette partie ci dessous :lorsque l'on clique sur le boutton , on verifie si le body possede la classe (themeclair)
    //Si c'est le cas on appelle la fonction desactiver pour appliquer le mode sombre sinon on appelle la fonction activer pour appliquer le mode claire
    if (document.body.classList.contains('themeclair')) {
        desactiver();
    } else {
        activer();
    }
});
//Pour cette fonction activer on ajoute la class (themeclair) au body pour modifier les style CSS
//On a egalement localStorage.setItem qui permet de sauvegarder le theme light dans localStorage
//Enfin on tous les element qui ont la class .text-light et on le remplace par text-dark
function activer() {
    document.body.classList.add('themeclair');
    localStorage.setItem('theme', 'light');
    document.querySelectorAll('.text-light')
        .forEach(function (i) {
            i.classList.replace('text-light', 'text-dark');
        });
}
//Pour cette fonction desactiver on enleve la class (themeclair) au body pour modifier les style CSS
//On a egalement localStorage.setItem qui permet de sauvegarder le theme dark dans localStorage
//Enfin on tous les element qui ont la class .text-dark et on le remplace par text-light
function desactiver() {
    document.body.classList.remove('themeclair');
    localStorage.setItem('theme', 'dark');
    document.querySelectorAll('.text-dark')
        .forEach(function (i) {
            i.classList.replace('text-dark', 'text-light');
        });
}
// Pour cette partie permet à la barre de navigation de changer de style lorsque l'on scroll
// Premierement , on ajoute un evenement (scroll)
//Deuxiemement on cree une variable navbar et on lui donne l'élement html qui à la classe navbar
//Troisiement on ajoute une condition si le window.scrollY (c'est à dire defilement verticale) est superieur à 50px
// alors on ajoute la classe Css navbarauscroll sinon on enleve la class
document.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbarauscroll');
    } else {
        navbar.classList.remove('navbarauscroll');
    }
});

//Cette partie concerne le bouton du retour vers le haut
//Premierement  on crée une variable qui recupere l'id retourverslehaut
//Ensuite on ecoute l'evenement de defilement (le scroll) avec document.onscroll = function ()
//Deuxiemement on ajoute une condition qui verifie si le defilement à part du haut est superieur à 400px 
// alors dans ce cas on affiche le bouton sinon on masque le bouton
//Enfin on ajoute un evevement qui permet te retourner à la page d'acceuil aprés un clik
let retourverslehaut = document.getElementById("retourverslehaut");
document.onscroll = function () {
    if (window.scrollY  > 400) {
        retourverslehaut.style.display = "block";
    } else {
        retourverslehaut.style.display = "none";
    }
}
retourverslehaut.addEventListener('click', function () {
    window.scrollTo({ top: 0 });
})


//Cette partie nous permet d'ajouter l'effet fade in sur nos pages
//Premierement on crée une variable qui recupére tous les balise sections et les classes .card et card1
// Deuxiemement pour chaque element trouvé on le parcours avec la boucle forEach pour ajouter la classe css (fondu)
//Ensuite creer une variable qui utilise un observateur (new IntersectionObserver) qui permet de surveiller si les element apparaissent dans la page
//Troisiement on parcourt les element et on ajoute une condition 
//Ensuite on utilise isIntersecting pour verifier si l'element commence à appaire dans l'ecran si oui on ajoute la classe fondre
// On egalement threshold: 0.25 qui declenche l'action dés que 25% de l'element est visible
// et enfin pour chaque carte et section on demande à notre observateur messection de les surveiller
let sections = document.querySelectorAll('h3, h2, h1, .card, .card1');
sections.forEach(function (s) {
    s.classList.add('fondu');
});
let messection = new IntersectionObserver(function (m) {
    m.forEach(function (sect) {
        if (sect.isIntersecting) {
            sect.target.classList.add('fondre');
        }
    });
}, { threshold: 0.25 });
sections.forEach(function (s) {
    messection.observe(s);
});

//Cette partie concerne le compteur animé
//Premierement on recupere tous les h3 à l'interieur de la classe stat et tous les h3 de la classe stat2
//Deuxiemement on crée une variable qui le reçoit un observateur qui surveille le moment ou les h3 apparaissent dans l'ecran
//ensuite on lui passe une fonction compter et à partir de cette fonction on utilise une boucle pour parcourir les elements
//Troisiemement on ajoute une condition qui verifie si le h3 apparait dans l'ecran
//ensuite on crée une variable s et on utilise target pour stocker l'element
// puis on crée une autre variable ValeurF et on utilise parseInt pour tranforlar nos h3 en vrai nombre
//et en dernier on cree la variable valeurI que l'on initialise à 0
//Quatriemement on cree une variable qui reçoit un minuteur 
//puis on incremente +1 à valeurI  à chauqe etape et on utilise s.textContent = valeurI pour mettre à jour le texte affiché sur la page
//Apres on utilise chiffre.unobserve pour demander à notre observateur de ne pas relancer le compteur
//Enfin on demande à nos deux variables stats et stat d'ordonné l'observateur chiffre à surveiller nos H3
let stats = document.querySelectorAll(".stat > div > h2");
let stat = document.querySelectorAll('.stat2  h3');
let chiffre = new IntersectionObserver(function (compter) {
    compter.forEach(function (numero) {
        if (numero.isIntersecting) {
            let s = numero.target;
            let valeurF = parseInt(s.textContent);
            let valeurI = 0;
            let compteur = setInterval(function () {
                valeurI += 1;
                s.textContent = valeurI;
                if (valeurI >= valeurF) {
                    s.textContent = valeurF + '+';
                }
            }); chiffre.unobserve(s);
        }
    });
});
stats.forEach(function (s) {
    chiffre.observe(s);
});
stat.forEach(function (s) {
    chiffre.observe(s);
});

//Cette partie concerne le filtrage des cartes par services
//Premierement on crée une variable qui recupére tous les col-12 (c'est a dire les cartes) qui ont comme parent l'id cartefreelance
// puis on ajoute une condition si la liste des cartes n'est pas vide avant d'executer
//Deuxiement on attribue manuellement une catégorie à chaque carte dans notre page en utilisant les indices 0 jusqu'a 8 vue que nous avons 9 cartes
// puis on crée une variable qui reçoit tous les fils button de l'id buttonfreelance
//Troisiemement on crée une boucle en lui passant une fonction et à partir de ce fonction on ajoute un evenement (click)
//Puis on crée une variable texte qui reçois le texte ecrit à l'interieur des bouttons
//Enfin on parcours les cartes en ajoutant des conditions pour chaque


let cartes = document.querySelectorAll("#cartefreelance > .col-12");
if (cartes.length > 0) {
    cartes[0].dataset.freelance = "devellopeur";
    cartes[1].dataset.freelance = "data";
    cartes[2].dataset.freelance = "devellopeur";
    cartes[3].dataset.freelance = "marketing";
    cartes[4].dataset.freelance = "design";
    cartes[5].dataset.freelance = "devellopeur";
    cartes[6].dataset.freelance = "design";
    cartes[7].dataset.freelance = "data";
    cartes[8].dataset.freelance = "marketing";

    let boutons = document.querySelectorAll("#buttonfreelance > button");
    boutons.forEach(function (boutonF) {
        boutonF.addEventListener("click", function () {
            let texte = boutonF.textContent;
            cartes.forEach(function (carte) {
                if (texte === "Tout") {
                    carte.style.display = "block";
                }
                else if (texte === "Développeur Web" && carte.dataset.freelance === "devellopeur") {
                    carte.style.display = "block";
                }
                else if (texte === "Design" && carte.dataset.freelance === "design") {
                    carte.style.display = "block";
                }
                else if (texte === "Marketing" && carte.dataset.freelance === "marketing") {
                    carte.style.display = "block";
                }
                else if (texte === "Data & IA" && carte.dataset.freelance === "data") {
                    carte.style.display = "block";
                }
                else {
                    carte.style.display = "none";
                }
            });
        });
    });
}
//Cette partie concerne le formulaire 
// Premierement on recupere l'id btnEnvoyer du boutton Envoyer
// puis il est trés important d'utiliser preventDefault pour modifier le comportement par defaut du bouton qui actualise la page
// ensuite on crée une variable pour recuperer chaque coposant du formulaire et on ajoute le regex
//servant à vérifier si la structure de l'adresse email est valide
//Deuxiemement on ajoute les conditions pour chaque composant du formulaire
document.getElementById("btnEnvoyer").addEventListener("click", function (cliquer) {
    cliquer.preventDefault();
    let nom = document.querySelector('input[placeholder="Votre nom"]').value;
    let prenom = document.querySelector('input[placeholder="Votre prénom"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    let sujet = document.querySelector('select').value;
    let message = document.querySelector('textarea').value;

    if (nom === "") {
        afficherErreur('input[placeholder="Votre nom"]', "Veuillez donner votre nom ");
        return;
    }
    if (prenom === "") {
        afficherErreur('input[placeholder="Votre prénom"]', "Veuillez donner votre prénom ");
        return;
    }
    if (email === "" || !regexEmail.test(email)) {
        afficherErreur('input[type="email"]', "Veuillez donner votre email ");
        return;
    }
    if (sujet === "") {
        afficherErreur('select', "Veuillez sélectionner un sujet");
        return;
    }
    if (message.length < 20) {
        afficherErreur('textarea', "Minimum 20 caractères !");
        return;
    }
    else {
        afficherSucces();
        enlever();
        document.querySelector("form").reset();
    }
});

//Cette fonction permet d'ajouter un message d'erreur sous chaque champ si ce dernier ne remplit pas les conditions
//puis on crée une variable champ qui reçoit les selecteurs (c'est à dire les input ou textarea)
// on utilise egalement une variable (dejala) pour eviter la repetition du message d'erreur
//ensuite on cree un element (p) pour le message d'erreur
// enfin on utilise after pour afficher le message en bas du champ
function afficherErreur(selecteur, texte) {
    let champ = document.querySelector(selecteur);
    let dejala = champ.parentNode.querySelector(".erreur");
    if (dejala) dejala.remove();
    let erreur = document.createElement("p");
    erreur.textContent = texte;
    erreur.className = "erreur";
    erreur.style.color = "red";
    erreur.style.fontSize = "13px";
    erreur.style.marginTop = "4px";
    champ.after(erreur);
}
// Cette fonction permet de supprimer les messages d'erreur avec avoir envoyer le formulaire
function enlever() {
    document.querySelectorAll(".erreur")
        .forEach(function (supprimer) {
            supprimer.remove();
        });
}
//Cette fonction permet d'afficher un message de succes aprés avoir valider le formulaire 
//Premierement on crée un element (div) et on ajoute des propriété CSS
// Et enfin on utilise after pour afficher le message en bas du formulaire 
function afficherSucces() {
    let succes = document.createElement("div");
    succes.textContent = "Message envoyé";
    succes.style.background = "#06f83f";
    succes.style.color = "#0a0a0a"
    succes.style.fontSize = "20px";
    succes.style.padding = "15px";
    succes.style.borderRadius = "30px";
    succes.style.marginTop = "15px";
    succes.style.textAlign = "center";
    document.querySelector("form").after(succes);
}
