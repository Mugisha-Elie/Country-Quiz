const questionDisplay = document.getElementById("question");
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

    const images = [0, 4, 6, 7, 9]


let currentQuestionIndex = 2;

function generateQuestion(){
    if(currentQuestionIndex > questions.length-1){
        currentQuestionIndex = 0; // For now
    }

    if(images.includes(currentQuestionIndex)){

        let h2 = document.createElement("h2");
        h2.textContent = questions[currentQuestionIndex].question;
        h2.classList.add("font-bold", "text-4xl");
        questionDisplay.appendChild(h2);

        let container = document.createElement("div");
        container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-x-8", "gap-y-5", "mt-5");
        questions[currentQuestionIndex].options.forEach((option, index) => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", option);
            img.classList.add("size-5")
            div.appendChild(img);

            div.classList.add("bg-gray-700/50", "px-10", "py-3", "rounded", "text-center", "font-bold", "hover:scale-110", "transition-all", "duration-300", "cursor-pointer");
            div.dataset.id = index;
            div.addEventListener("click", (event)=>{
                if(Number(div.dataset.id) === questions[currentQuestionIndex].answer){
                    alert("Correct Answer")
                }else{
                    alert("Wrong Answer");
                }
            });
            container.appendChild(div);
        });

        questionDisplay.appendChild(container);

    }else{
        let h2 = document.createElement("h2");
        h2.textContent = questions[currentQuestionIndex].question;
        h2.classList.add("font-bold", "text-4xl");
        questionDisplay.appendChild(h2);

        let container = document.createElement("div");
        container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-x-8", "gap-y-5", "mt-5");
        questions[currentQuestionIndex].options.forEach((option, index) => {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.textContent = option;
            h2.classList.add("font-bold", "text-sm")
            div.appendChild(h2);

            div.classList.add("bg-gray-700/50", "px-10", "py-3", "rounded", "text-center", "font-bold", "hover:scale-110", "transition-all", "duration-300", "cursor-pointer");
            div.dataset.id = index;
            div.addEventListener("click", (event)=>{
                if(Number(div.dataset.id) === questions[currentQuestionIndex].answer){
                    alert("Correct Answer")
                }else{
                    alert("Wrong Answer");
                }
            });
            container.appendChild(div);
        });

        questionDisplay.appendChild(container);
    }
    
    
}
generateQuestion();






