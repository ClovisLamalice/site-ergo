// Ce code permet de soumettre le formulaire lorsque l'utilisateur appuie sur "Entrée" dans la barre de recherche
const form = document.querySelector("form");
const input = form.querySelector("input[type='text']");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    form.submit();
  }
});


function redirect1() {
  location.href = '../esteban/main_me.html';
}

function redirect2() {
  location.href = 'index.html';
}

function redirect3() {
  location.href = '../hippolyte/comm.html';
}
