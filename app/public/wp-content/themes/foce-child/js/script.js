//Déclencher l'animation des titres à leur apparition

    document.addEventListener("DOMContentLoaded", function () {
        // Sélectionner tous les titres 
        const titles = document.querySelectorAll("span.title");
    
        // Créer un IntersectionObserver
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
        }, { threshold: 0.1 }); // L'élément est considéré comme visible à 10% de son apparition
    
        // Appliquer l'observer à chaque titre
        titles.forEach(title => {
        observer.observe(title);
        });
    });

//Créer un effet de parallaxe avec le logo au scroll
    
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
          const scrollPosition = window.scrollY; 
          const logo = document.querySelector('.parallax-logo');
          logo.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
        });
      });

//Déplacement des nuages
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollPosition = 0; // Dernière position de défilement
    let bigCloud = 0; // Position courante de déplacement de big-cloud
    let littleCloud = 0; // Position courante de déplacement de little-cloud

    // Limites de déplacement (max 300px vers la gauche)
    const maxDistance = 300;

    window.addEventListener('scroll', function() {
        // Calcul de la nouvelle position de défilement
        let scrollPosition = window.scrollY;

        // Calcul du changement de défilement par rapport à la dernière position
        let scrollDelta = scrollPosition - lastScrollPosition;

        // Mettre à jour les positions des nuages en fonction du scroll
        // Sens de scrollDelta pour déplacer à gauche vers le bas et à droite vers le haut
        bigCloud = Math.max(0, Math.min(maxDistance, bigCloud + scrollDelta));
        littleCloud = Math.max(0, Math.min(maxDistance, littleCloud + scrollDelta)); 

        // Appliquer la transformation aux nuages
        document.querySelector('.big-cloud').style.transform = `translateX(-${bigCloud}px)`;
        document.querySelector('.little-cloud').style.transform = `translateX(-${littleCloud}px)`;

        // Mettre à jour la dernière position de défilement
        lastScrollPosition = scrollPosition;
    });
});


