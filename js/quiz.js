import {
  quizMirrors,
  quizShowerRoom,
  quizSkin,
  quizKitchen,
} from "../data/quiz-data.js";
import { createQuiz } from "../components/App.js";

const mirrorsBtn = document.querySelector(".js-mirrors");
const showerRoomBtn = document.querySelector(".js-shower-room");
const skinBtn = document.querySelector(".js-skin");
const kitchenBtn = document.querySelector(".js-kitchen");
const quizOverlay = document.querySelector(".quiz-overlay");

let app = null;

function showQuiz(data) {
  try {
    const cloneData = JSON.parse(JSON.stringify(data));
    quizOverlay.classList.add("show");
    app = createQuiz(cloneData);
  } catch (error) {
    console.log(error.message);
  }
}

mirrorsBtn.addEventListener("click", () => showQuiz(quizMirrors));
showerRoomBtn.addEventListener("click", () => showQuiz(quizShowerRoom));
skinBtn.addEventListener("click", () => showQuiz(quizSkin));
kitchenBtn.addEventListener("click", () => showQuiz(quizKitchen));

quizOverlay.addEventListener("click", ({ target }) => {
  if (!target.closest(".icon-x")) return;
  quizOverlay.classList.remove("show");
  app?.unmount();
  app = null;
});
