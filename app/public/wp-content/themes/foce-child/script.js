document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les éléments h2 
    const titles = document.querySelectorAll("h2");
  
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
  
    // Appliquer l'observer à chaque h2
    titles.forEach(title => {
      observer.observe(title);
    });
  });
  