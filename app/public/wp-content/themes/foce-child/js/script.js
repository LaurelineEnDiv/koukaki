//////// Effet d'apparition des liens de menu au clic sur le bouton menu-toggle /////////////
document.addEventListener('DOMContentLoaded', function() {
    const siteNavigation = document.getElementById('site-navigation');
    const menuToggle = siteNavigation.querySelector('.menu-toggle');
    const menu = siteNavigation.querySelector('ul');
    const menuItems = menu.querySelectorAll('li');

    // Fonction pour animer les items du menu avec un délai progressif
    function animateMenuItems() {
        menuItems.forEach((item, index) => {
            // Retire toute animation précédente
            item.classList.remove('show');
            item.style.transitionDelay = ''; // Réinitialisation du délai

            // Ajoute un délai progressif pour chaque élément
            setTimeout(() => {
                item.classList.add('show');
                item.style.transitionDelay = `${index * 0.3}s`; // Délai de 300ms entre chaque item
            }, index * 300); // Délai de 300ms pour l'animation de chaque item
        });
    }

    // Déclencher l'animation au clic sur le bouton du menu
    menuToggle.addEventListener('click', function() {
        if (siteNavigation.classList.contains('toggled')) {
            animateMenuItems(); 
        } 
    });
});

//////// Effet d'apparition des titres (H2) des sections /////////////
document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll("span.title");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Ajouter la classe "show" quand l'élément entre dans le viewport
            entry.target.classList.add("show");
            }
            else {
                // Retirer la classe "show" quand l'élément sort du viewport
                entry.target.classList.remove('show');
            }
        });
    }); 

    // Appliquer l'observer à chaque titre
    titles.forEach(title => {
        observer.observe(title);
        });
});


////////////  Logo Parallaxe au scroll /////////////////////  
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; 
        const logo = document.querySelector('.parallax-logo');
        logo.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    });
});

////////////// Déplacement des nuages au scroll /////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les nuages et la section à observer
    const bigCloud = document.querySelector('.big-cloud');
    const littleCloud = document.querySelector('.little-cloud');
    const placeSection = document.querySelector('#place');
    
    // Limites de déplacement (max 300px vers la gauche)
    const maxDistance = 300;
    let lastScrollPosition = 0;
    let bigCloudPos = 0;
    let littleCloudPos = 0;

    // Fonction qui gère le défilement et le déplacement des nuages
    const onScroll = () => {
        let scrollPosition = window.scrollY;
        let scrollDelta = scrollPosition - lastScrollPosition;
        
        // Calculer les nouvelles positions des nuages
        bigCloudPos = Math.max(0, Math.min(maxDistance, bigCloudPos + scrollDelta));
        littleCloudPos = Math.max(0, Math.min(maxDistance, littleCloudPos + scrollDelta));

        // Appliquer la transformation des nuages
        bigCloud.style.transform = `translateX(-${bigCloudPos}px)`;
        littleCloud.style.transform = `translateX(-${littleCloudPos}px)`;
        lastScrollPosition = scrollPosition;
    };

    // Créer l'observer avec une fonction de callback
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la section #place est visible, activer l'événement de scroll
                window.addEventListener('scroll', onScroll);
            } else {
                // Si la section n'est plus visible, désactiver l'événement de scroll
                window.removeEventListener('scroll', onScroll);
            }
        });
    });

    // Observer la section avec les nuages
    observer.observe(placeSection);
});