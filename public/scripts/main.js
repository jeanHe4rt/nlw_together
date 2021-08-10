import Modal from "./modal.js";
import { roomKey } from "../../src/controllers/RoomController";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// Pegar marcar como lido;
// Pegar a  todos os buttons com classe check

const checkButtons = document.querySelectorAll(".actions a.check");
// EventListener esperando uma ação do user para realizar uma ação do sistema
checkButtons.forEach((button) => {
  // Adicionar addEventListener
  button.addEventListener("click", handleClick);
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleClick(event, false);
  });
});

function handleClick(event, check = true) {
  event.preventDefault();
  const text = check ? "Marcar como lida" : "Excluir";
  const roomId = document.querySelector("#room-id").dataset.id;
  const slug = check ? "check" : "delete";
  // Para pegar o data-id basta usar o event.target.dataset.id ao inveś de usar o document.querySelector
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);
  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = ` Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text}`;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");
  // Abrir Modal
  modal.open();
}
// modalTitle.innerHTML = "Excluir Pergunta";

// modalTitle.innerHTML = "Marcar com lida";
