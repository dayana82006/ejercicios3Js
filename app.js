const questions = [
    {
        logo:"images/acura.jpg",
        correct : "Acura",
        options : ["Toyota", "Geely", "Acura"]
    },
    {
        logo:"images/Chevrolet.png",
        correct:"Chevrolet",
        options : ["Mercedes", "Volkswagen", "Chevrolet"]
    },
    {
        logo:"images/citroen.png",
        correct : "Citroen",
        options : ["Citroen", "Geely", "Acura"]
    },
    {
        logo:"images/corvette.webp",
        correct:"Corvette",
        options : ["Corvette", "Volkswagen", "Chevrolet"]
    },
    {
        logo:"images/geely.jpg",
        correct : "Geely",
        options : ["Toyota", "Geely", "Acura"]
    },
    {
        logo:"images/hyundai.jpg",
        correct:"Hyundai",
        options : ["Mercedes", "Volkswagen", "Hyundai"]
    },
    {
        logo:"images/mercedes.webp",
        correct : "Mercedes",
        options : ["Toyota", "Mercedes", "Acura"]
    },
    {
        logo:"images/opel.webp",
        correct:"Opel",
        options : ["Opel", "Volkswagen", "Peugeot"]
    },
    {
        logo:"images/peugeot.png",
        correct:"Peugeot",
        options : ["Peugeot", "Volkswagen", "Citroen"]
    },
    {
        logo:"images/volkswagen.png",
        correct:"Volkswagen",
        options : ["Geely", "Volkswagen", "Acura"]
    },
];

let score = 0;
let currentQuestion = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('logoImg').src = question.logo;
    document.getElementById('logoImg').alt = question.logo;
    
    const select = document.getElementById('car-names');
    select.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

function nextQuestion() {
    const select = document.getElementById('car-names');
    const selectedOption = select.value;
    const correctAnswer = questions[currentQuestion].correct;

    if (selectedOption === correctAnswer) {
        score += 10;
        document.getElementById('score-text').textContent = score;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.querySelector('.game-container').style.display = 'none';
    const finalMessage = document.getElementById('final-message');
    var result = '';
    
    if (score === 100) {
        result = '<img src="images/trophy.webp" alt="Trofeo">';
        finalMessage.textContent = '¡Ganaste el trofeo!';
    } else if (score >= 90) {
        result = '<img src="images/medal.png" alt="Medalla">';
        finalMessage.textContent = '¡Ganaste una medalla!';
    } else if (score >= 60) {
        result = '<img src="images/mano.webp" alt="Manito Arriba">';
        finalMessage.textContent = '¡Bien hecho!';
    } else {
        finalMessage.textContent = '¡Necesitas mejorar!';
        result = '<img src="images/burro.jpeg" alt="Burro Enfermo">';
    }

    document.getElementById('final-message').innerHTML = result;
    document.getElementById('game-over').style.display = 'block';
}

function restartGame() {
    // Restablece el puntaje y la pregunta actual.
    score = 0;
    currentQuestion = 0;

    // Actualiza el puntaje en la interfaz.
    document.getElementById('score-text').textContent = score;

    // Muestra el contenedor del juego y oculta la pantalla final.
    document.querySelector('.game-container').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';

    // Vuelve a cargar la primera pregunta.
    loadQuestion();
}

// Iniciar el juego
loadQuestion();


