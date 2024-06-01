document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    if (!emailInput.value || !passwordInput.value) {
      event.preventDefault(); 
      alert("Por favor, completa todos los campos.");
    } else if (passwordInput.value.length < 6) {
      event.preventDefault();
      alert("La contraseña debe tener al menos 6 caracteres.");
    }
  });
});
