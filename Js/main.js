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