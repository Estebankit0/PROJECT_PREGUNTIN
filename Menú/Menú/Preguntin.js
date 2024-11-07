document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('playerName');
    if (savedName) {
        // Aquí puedes manejar el caso si necesitas mostrar algo diferente al volver
    }
});

const confirmarButton = document.getElementById('confirmar');
const nameInput = document.getElementById('fname');

confirmarButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir la acción por defecto del formulario
    const playerName = nameInput.value.trim();
    if (playerName) {
        localStorage.setItem('playerName', playerName); // Guardar el nombre en Local Storage
        // Redirigir a la página de perfil sin mostrar una alerta
        window.location.href = 'profile.html'; 
    } else {
        alert("Por favor, ingresa un nombre.");
    }
});

// Manejar la presión de la tecla Enter para confirmar
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        confirmarButton.click();
    }
});
document.body.addEventListener('click', () => {
    const music = document.getElementById('backgroundMusic');
    music.play();
});