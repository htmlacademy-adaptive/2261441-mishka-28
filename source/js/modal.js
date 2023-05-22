let modal = document.querySelector(".modal-container");
let btns = document.querySelectorAll(".detailed-card__button, .card__button");

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.classList.toggle("modal-container--closed");
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.toggle("modal-container--closed");
  }
}
