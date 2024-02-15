document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("heart1").addEventListener("click", function() {
    expandHeart();
  });

  function expandHeart() {
    // Obtener el corazón
    const heart = document.querySelector(".heart");
     // Redirigir a la otra página después de cierto tiempo
    setTimeout(function() {
      window.location.href = "../html/valentine.html";
    }, 2300); 
    // Cambiar la escala del corazón a 20 en 1 segundos
    heart.style.transition = "transform 5s ease";
    heart.style.transform = "scale(20)";

   
  }
});
