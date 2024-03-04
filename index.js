document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.querySelector(".text-parol-input");
  
    form.addEventListener("submit", function (event) {
      if (!isValidPassword(passwordInput.value)) {
        alert("Пароль повинен починатися з великої літери, містити хоча б одне число і містити тільки латинські літери та цифри.");
        event.preventDefault();
      }
    });
  
    function isValidPassword(password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/;
      return passwordRegex.test(password);
    }
  });


  function getRandomColor() {
    // Генеруємо випадкові значення для компонентів RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Створюємо рядок з кольором у форматі RGB
    const color = `rgb(${r}, ${g}, ${b})`;
  
    return color;
  }
  
  function changeBackgroundColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
  }
  
  const button = document.querySelector('.check-btn');
  button.addEventListener('click', changeBackgroundColor);

  