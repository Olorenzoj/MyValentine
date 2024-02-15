document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("heart1").addEventListener("click", function() {
    expandHeart();
  });

  function expandHeart() {
    // Agrega la clase 'expanded' al contenedor del corazón
    document.querySelector(".heart-container").classList.add("expanded");
    // Redirige a la otra página después de un cierto tiempo
    setTimeout(function() {
      window.location.href = "../html/valentine.html";
    }, 1000); // Se cambió el tiempo a 1000ms para ajustarse a la duración de la animación
  }
});
