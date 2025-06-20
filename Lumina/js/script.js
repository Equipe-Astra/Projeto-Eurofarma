
document.addEventListener("DOMContentLoaded", () => {
    const consulta = document.querySelector('.consulta');
    if (consulta) {
        consulta.style.maxHeight = `${consulta.scrollHeight}px`;
    }
});

const togglePassword = document.querySelector('#togglePass');
const togglePassword2 = document.querySelector('#togglePass2');
const password = document.querySelector('#password');
const confpassword = document.querySelector('#confpassword');

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

togglePassword2.addEventListener("click", function () {
    const type = confpassword.type === "password" ? "text" : "password";
    confpassword.type = type;
    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});


document.querySelectorAll('input[data-js]').forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        if (masks[field]) {
            e.target.value = masks[field](e.target.value);
        }
    }, false);
});

// Validação

const button = document.getElementById('cadastrar');

button.addEventListener('click', (event) => {
    event.preventDefault();
    
    const matricula = document.getElementById('matricula');

    if (matricula.value === '') {
        matricula.classList.add("errorInput");
    }

    const nome = document.getElementById('nome');

    if (nome.value === '') {
        nome.classList.add("errorInput");
    }

    const cargo = document.getElementById('cargo');

    if (cargo.value === '') {
        cargo.classList.add("errorInput");
    }
    
    const email = document.getElementById('email');

    if (email.value === '') {
        email.classList.add("errorInput");
    }

    const password = document.getElementById('password');

    if (password.value === '') {
        password.classList.add("errorInput");
    }

    const confpassword = document.getElementById('confpassword');

    if (confpassword.value === '') {
        confpassword.classList.add("errorInput");
    }

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || (email.value.indexOf(".") - email.value.indexOf("@") === 1)) {
        email.classList.add("errorInput");
    } else {
        email.classList.remove("errorInput");
    }
});

document.querySelectorAll('input').forEach(($input) => {
    $input.addEventListener('input', (e) => {
        e.target.classList.remove("errorInput");
    });
});
