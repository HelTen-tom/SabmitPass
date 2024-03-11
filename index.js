import { createCubes } from "./helpers/createCubes.js";
import { refs } from "./refs.js";

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     const passwordInput = document.querySelector(".text-parol-input");

//     form.addEventListener("submit", function (event) {
//       if (!isValidPassword(passwordInput.value)) {
//         alert("Пароль повинен починатися з великої літери, містити хоча б одне число і містити тільки латинські літери та цифри.");
//         event.preventDefault();
//       }
//     });

//     function isValidPassword(password) {
//       const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/;
//       return passwordRegex.test(password);
//     }
//   });

//   function getRandomColor() {
//     // Генеруємо випадкові значення для компонентів RGB
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     // Створюємо рядок з кольором у форматі RGB
//     const color = `rgb(${r}, ${g}, ${b})`;

//     return color;
//   }

//   function changeBackgroundColor() {
//     const color = getRandomColor();
//     document.body.style.backgroundColor = color;
//   }

//   const button = document.querySelector('.check-btn');
//   button.addEventListener('click', changeBackgroundColor);

//   document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("myForm");
//     const agreeCheckbox = document.getElementById("agreeCheckbox");

//     form.addEventListener("submit", function (event) {
//       if (!agreeCheckbox.checked) {
//         alert("Please agree to the terms.");
//         event.preventDefault();
//       } else {
//                 form.reset();
//              }
//     });
//   });

refs.addBtn.addEventListener("click", handleAddCubes);
refs.resetBtn.addEventListener("click", handleResetCubes);

function handleAddCubes() {
  const countCubes = refs.container.childElementCount;
  const count = refs.countCubes.value;
  const cubes = createCubes(count, countCubes);
  console.log(refs.container);
  refs.container.append(...cubes);
  console.log(cubes);
}
function handleResetCubes() {
  console.log(refs.container.innerHTML);
  refs.container.innerHTML = "";
}

// function createCub(size) {
//   const cube = document.createElement("div");
//   cube.style.background = generateRandomColor();
//   cube.style.width = `${size}px`;
//   cube.style.height = `${size}px`;
//   return cube;
// }

// function createCubes(count, countCubes) {
//   let size = countCubes === 0 ? 50 : 50 + countCubes * 10;
//   console.log(size);
//   const cubes = [];

//   for (let i = 0; i < count; i++) {
//     const elem = createCub(size);
//     cubes.push(elem);
//     size += 10;
//   }
//   return cubes;
// }
