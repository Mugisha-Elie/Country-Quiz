const questionDisplay = document.getElementById("questions");
const questions = [
    {
        question:"What is the flag of Japan?",
        options: ["/assets/images/azerbaijan-flag.png", "/assets/images/mexico-flag.png", "/assets/images/japan-flag.png","/assets/images/south-africa-flag.png"],
        answer: 2,
    },
    {
        question: "What is the capital of Spain?",
        options: ["Baku", "Madrid", "Kigali", "Mexico City"],
        answer: 1,
    },
    {
        question:"What is the capital of Italy?",
        options: ["Rome", "Germany", "Moscow", "Vatican"],
        answer: 0
    },
    {
        question: "What is the capital of Azerbaijan?",
        options: ["Kenya", "Nairobi", "Tokyo", "Baku"],
        answer: 3
    },
    {
        question: "What is the flag of Colombia?",
        options: ["/assets/images/colombia-flag.webp", "/assets/images/mexico-flag.png", "/assets/images/japan-flag.png","/assets/images/south-africa-flag.png"],
        answer: 0
    }, 
    {
        question: "What is the capital city of Mexico?",
        options: ["Taiwan", "Mexico City", "Slovakia", "Taipei"],
        answer: 1
    }, 
    {
        question: "What is the flag of France?",
        options: ["/assets/images/italy-flag.png", "/assets/images/azerbaijan-flag.png", "/assets/images/japan-flag.png","/assets/images/france-flag.jpg"],
        answer: 3
    }, 
    {
        question: "What is the flag of the United States?",
        options: ["/assets/images/italy-flag.png", "/assets/images/american-flag.jpg", "/assets/images/japan-flag.png","/assets/images/mexico-flag.png"],
        answer: 1
    }, 
    {
        question: "What is the capital of the United Kingdom?",
        options: ["London", "Paris", "Dublin", "Cardiff"],
        answer: 0
    }, 
    {
        question: "What is the flag of South Africa",
        options: ["/assets/images/italy-flag.png", "/assets/images/american-flag.jpg", "/assets/images/south-africa-flag.png","/assets/images/mexico-flag.png"],
        answer: 2

    }];


const doneQuestions = [];




