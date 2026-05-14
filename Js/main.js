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
retourverslehaut.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
