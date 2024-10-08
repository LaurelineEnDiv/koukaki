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

    window.addEventListener('scroll', function() {
        // Calcul de la position de défilement
        let scrollPosition = window.scrollY; 

        // Limite l'amplitude du déplacement (max 300px)
        let maxDisplacement = 300;

        // Calcul de la proportion du déplacement (300px max)
        let displacement = Math.min(scrollPosition, maxDisplacement);

        // Vérifiez si l'utilisateur fait défiler vers le bas ou vers le haut
        if (scrollPosition > lastScrollPosition) {
            // Défilement vers le bas
            document.querySelector('.big-cloud').style.transform = `translateX(-${displacement}px)`;
            document.querySelector('.little-cloud').style.transform = `translateX(-${displacement * 0.7}px)`; // décalage un peu plus petit pour le petit nuage
        } else {
            // Défilement vers le haut
            document.querySelector('.big-cloud').style.transform = `translateX(${displacement}px)`;
            document.querySelector('.little-cloud').style.transform = `translateX(${displacement * 0.7}px)`; // retour à droite
        }

        // Mettez à jour la dernière position de défilement
        lastScrollPosition = scrollPosition;
    });
});




    


