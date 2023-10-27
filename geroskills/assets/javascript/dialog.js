
let abrir = document.getElementById("comprar");
let modal = document.querySelector("dialog");
let fechar = document.getElementById("fechar");
let mine = document.getElementById("mine");
let boxForm = document.getElementById("box");
let send = document.getElementById("chosing");
let back = document.getElementById("back");

abrir.addEventListener("click", () => {
    modal.showModal();
})

fechar.addEventListener("click", () => {
    modal.close();
    boxForm.style.display = "none";
    send.style.display = "block";
    back.style.display = "none";
})

mine.addEventListener("click", () => {
    boxForm.style.display = "block";
    send.style.display = "none";
    back.style.display = "block";
})
back.addEventListener("click", () => {
    boxForm.style.display = "none";
    send.style.display = "block";
    back.style.display = "none";
})