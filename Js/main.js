let NOIRBLANC = document.getElementById('NOIRBLANC');
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}
if (localStorage.getItem('theme') === 'light') {
    activer();
}
NOIRBLANC.addEventListener('click', function () {
    if (document.body.classList.contains('themeclair')) {
        desactiver();
    } else {
        activer();

    }
});
function activer() {
    document.body.classList.add('themeclair');
    localStorage.setItem('theme', 'light');
    document.querySelectorAll('.text-light')
        .forEach(function (i) {
            i.classList.replace('text-light', 'text-dark-mode');
        });
}
function desactiver() {
    document.body.classList.remove('themeclair');
    localStorage.setItem('theme', 'dark');
    document.querySelectorAll('.text-dark-mode')
        .forEach(function (i) {
            i.classList.replace('text-dark-mode', 'text-light');
        });
}

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

let retourverslehaut = document.getElementById("retourverslehaut");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        retourverslehaut.style.display = "block";
    } else {
        retourverslehaut.style.display = "none";
    }
}
retourverslehaut.addEventListener('click', function () {
    window.scrollTo({ top: 0});
})

let sections = document.querySelectorAll('section, .card, .card1');
sections.forEach(function(s) {
    s.classList.add('fondu');
});
let messection = new IntersectionObserver(function(m) {
    m.forEach(function(sect) {
    if (sect.isIntersecting) {
        sect.target.classList.add('fondre');
        messection.unobserve(sect.target);
        }
});
}, { threshold: 0.25 });
sections.forEach(function(s) {
messection.observe(s);
});

let stats = document.querySelectorAll('.stat h3');
let stat = document.querySelectorAll('.stat2 h3');
let chiffre = new IntersectionObserver(function (compter) {
compter.forEach(function (numero) {
if (numero.isIntersecting) {
    let s = numero.target;
    let valeurF = parseInt(s.textContent);
    let valeurI = 0;
    let compteur = setInterval(function () {
        valeurI += 1;
        s.textContent = valeurI + '+';
if (valeurI >= valeurF) {
    s.textContent = valeurF + '+';
}
},10);chiffre.unobserve(s);
}
});
});
stats.forEach(function (s) {
    chiffre.observe(s);
});
stat.forEach(function (s) {
    chiffre.observe(s);
});

document.addEventListener("DOMContentLoaded", function () {
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
});

document.getElementById("btnEnvoyer").addEventListener("click", function(cliquer) {
  cliquer.preventDefault();
let nom     = document.querySelector('input[placeholder="Votre nom"]').value;
let prenom  = document.querySelector('input[placeholder="Votre prénom"]').value;
let email   = document.querySelector('input[type="email"]').value;
let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
let sujet   = document.querySelector('select').value;
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
else{
    afficherSucces();
    enlever();
    document.querySelector("form").reset();
}
});

function afficherErreur(selecteur,texte) {
  let champ = document.querySelector(selecteur);
  let dejala = champ.parentNode.querySelector(".erreur");
  if (dejala) dejala.remove();
  let erreur = document.createElement("p");
  erreur.textContent     = texte;
  erreur.className = "erreur";
  erreur.style.color     = "red";
  erreur.style.fontSize  = "13px";
  erreur.style.marginTop = "4px";
  champ.insertAdjacentElement("afterend", erreur);
}

function enlever() {
  document.querySelectorAll(".erreur")
  .forEach(function(supprimer) {
    supprimer.remove();
  });
}
function afficherSucces() {
  let succes = document.createElement("div");
  succes.textContent        = "Message envoyé";
  succes.style.background   = "#06f83f";
  succes.style.color="#0a0a0a"
  succes.style.fontSize     = "20px";
  succes.style.padding      = "15px";
  succes.style.borderRadius = "30px";
  succes.style.marginTop    = "15px";
  succes.style.textAlign    = "center";
  document.querySelector("form").insertAdjacentElement("afterend", succes);
}
