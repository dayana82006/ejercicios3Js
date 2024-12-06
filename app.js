const questions = [
    {
        image:"images/acura.jpg",
        carrect : "Acura",
        options : ["Toyota", "Geely", "Acura"]
    },
    {
        image:"images/Chevrolet.png",
        correct:"Chevrolet",
        options : ["Mercedes", "Volkswagen", "Chevrolet"]
    },
    {
        image:"images/citroen.png",
        carrect : "Citroen",
        options : ["Citroen", "Geely", "Acura"]
    },
    {
        image:"images/corvette.webp",
        correct:"Corvette",
        options : ["Corvette", "Volkswagen", "Chevrolet"]
    },
    {
        image:"images/geely.jpg",
        carrect : "Geely",
        options : ["Toyota", "Geely", "Acura"]
    },
    {
        image:"images/hyundai.jpg",
        correct:"Hyundai",
        options : ["Mercedes", "Volkswagen", "Hyundai"]
    },
    {
        image:"images/mercedes.webp",
        carrect : "Mercedes",
        options : ["Toyota", "Mercedes", "Acura"]
    },
    {
        image:"images/opel.webp",
        correct:"Opel",
        options : ["Opel", "Volkswagen", "Peugeot"]
    },
    {
        image:"images/peugeot.png",
        correct:"Peugeot",
        options : ["Peugeot", "Volkswagen", "Citroen"]
    },
    {
        image:"images/Volkswagen.png",
        correct:"Volkswagen",
        options : ["Geely", "Volkswagen", "Acura"]
    },
];

let currentQuestions = 0;
let score = 0;

const vehicleImage = document.getElementById("vehicleImage");
const answerSelect = document.getElementById("answer");
const submitButton = document.getElementById("submitAnswer");
const sectionGame = document.getElementById("game");
const sectionResult = document.getElementById("result");
const finalScore = document.getElementById("finalScore");
const reward = document.getElementById("reward");
const restarGame = document.getElementById("restarGame");

function loadQuestion(){
    if(currentQuestions < questions.length){
        var question = questions[currentQuestions];
        document.getElementById("vehicleImage").src= question.image
    }
    
}

