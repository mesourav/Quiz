if (typeof Storage !== "undefined") {
  document.getElementById("welcome-text").innerHTML =
    "Welcome! " +
    sessionStorage.getItem("name") +
    "  Here are you question, best of luck :)";
}

let questions = [
  {
    id: 1,
    question: "The language spoken by the people in Pakistan is  ?",
    answer: "Sindhi",
    options: ["Hindi", "Punjabi", "Sindhi", "Palauan"],
  },
  {
    id: 2,
    question: "The World Largest desert is  ?",
    answer: "Sahara",
    options: ["Thar", "Gobi", "Sahara", "Kalahari"],
  },
  {
    id: 3,
    question: "In a leap year there are how many days ?",
    answer: "366",
    options: [
      "366",
      "265",
      "266",
      "367",
    ],
  },
  {
    id: 4,
    question: "2 + 3 * 5 / 5   ?",
    answer: "5",
    options: ["7", "8", "25", "5"],
  },
  {
    id: 5,
    question: "What is 1 + 1  ?",
    answer: "2",
    options: ["11", "2", "3", "8"],
  },

  {
    id: 6,
    question: "2 + 4 + 5   ?",
    answer: "11",
    options: ["11", "8", "25", "5"],
  },

  {
    id: 7,
    question: "What is 1 + 1 + 8   ?",
    answer: "10",
    options: ["10", "2", "3", "8"],
  },

  {
    id: 8,
    question: "2 + 3 * 5 / 5   ?",
    answer: "5",
    options: ["700", "800", "2500", "5"],
  },

  {
    id: 9,
    question: "What is 1 + 1 * 5   ?",
    answer: "6",
    options: ["6", "2", "3", "8"],
  },

  {
    id: 10,
    question: "2 + 3 * 5 / 5 + 8  ?",
    answer: "13",
    options: ["7", "8", "13", "5"],
  },
  {
    id: 11,
    question: "What is 1 + 1  ?",
    answer: "2",
    options: ["11", "2", "3", "8"],
  },
  {
    id: 12,
    question: "What is 1 + 1 + 7 + 1   ?",
    answer: "10",
    options: ["11", "10", "3", "8"],
  },
  {
    id: 13,
    question: "What is 2 * 2 * 2  ?",
    answer: "8",
    options: ["11", "2", "3", "8"],
  },
  {
    id: 14,
    question: "What is 1 + 1  ?",
    answer: "2",
    options: ["11", "2", "3", "8"],
  },
  {
    id: 15,
    question: "What is 16 / 2   ?",
    answer: "8",
    options: ["8", "2", "3", "8"],
  },
  {
    id: 16,
    question: "What is 1 + 1 + 14  ?",
    answer: "16",
    options: ["11", "2", "16", "8"],
  },
  {
    id: 17,
    question: "What is 1 + 1  ?",
    answer: "2",
    options: ["11", "2", "3", "8"],
  },
  {
    id: 18,
    question: "What is 1 + 1 + 33  ?",
    answer: "35",
    options: ["11", "35", "3", "8"],
  },
  {
    id: 19,
    question: "What is 1 + 1  ?",
    answer: "2",
    options: ["11", "2", "3", "8"],
  },
  {
    id: 20,
    question: "What is 1 + 1 + 18  ?",
    answer: "20",
    options: ["20", "2", "3", "8"],
  },
];

let question_count = 0;
let points = 0;
var questionName ="Q1";
let realPoints = 0;



let qCount = 1;

let answerCount = 1;

var answerCheck = 1;

window.onload = function () {
  show(question_count);
};


// Functions To calculatePoints
function calculatePoints(){
  for(i=0;i<=19;i++){
    if(sessionStorage.getItem("answer"+(i+1)) == questions[i].answer)
    {
      realPoints = realPoints + 2
    }
    else{
      realPoints = realPoints - 0.75
    }
  }
  sessionStorage.setItem("RealPoints", realPoints);
  console.log("Real Points" + realPoints)
}



// Next button Click

function next() {

  let user_answer = $(`input[name="Q${qCount}"]:checked`).val();
  let user_answer1 = $(`input[name="Q${qCount +1}"]:checked`).val();
  let user_answer2 = $(`input[name="Q${qCount +2}"]:checked`).val();
  let user_answer3 = $(`input[name="Q${qCount+3}"]:checked`).val();
  

  if(question_count>=0 && user_answer != undefined && user_answer1 != undefined && user_answer2 != undefined && user_answer3 != undefined){

    var previousBtn = document.getElementById("previous-question-btn");
    previousBtn.style.display = "block";
  }
  if (question_count < 16) {

    if(user_answer == undefined || user_answer1 == undefined || user_answer2 == undefined || user_answer3 == undefined){
      alert("All question are compulsory to answer")
    }
    else{
      sessionStorage.setItem("answer"+ answerCount, user_answer)
      sessionStorage.setItem("answer"+ (answerCount+1), user_answer1)
      sessionStorage.setItem("answer"+ (answerCount+2), user_answer2)
      sessionStorage.setItem("answer"+ (answerCount+3), user_answer3)
      if(question_count<=16){
        answerCount = answerCount + 4
      }
    
      if(question_count<16){
       
        answerCheck = answerCheck + 4
       
      }
          if (question_count > 1) console.log(points);
          
          if(question_count <=16){
            question_count = question_count + 4;

          }
          if (question_count >= 16) {
            document.getElementById("btn-next-model").style.display = "none";
            document.getElementById("btn-submit").style.display = "block";
          }

          // if(question_count <=16){
            show(question_count);
          // }
       }
    }

   else if(question_count == 16) {  

    sessionStorage.setItem("answer"+ answerCount, user_answer)
    sessionStorage.setItem("answer"+ (answerCount+1), user_answer1)
    sessionStorage.setItem("answer"+ (answerCount+2), user_answer2)
    sessionStorage.setItem("answer"+ (answerCount+3), user_answer3)
    
    calculatePoints();  
    submitAnswers();
   
  }

}

// Submit test handler

function submitAnswers(){
  
  
  document.getElementById("btn-next-model").click();
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("btn-next-model");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  
    modal.style.display = "block";

  
  

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    location.href = "start.html";
    sessionStorage.removeItem("points");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      location.href = "start.html";
      sessionStorage.removeItem("points");
    }
  };

  if (sessionStorage.getItem("RealPoints", realPoints) < 24.0) {
    document.getElementById("result-text").innerHTML = "OOps " + sessionStorage.getItem("name") + " :( you have not cleared the test better luck next time";
    document.getElementById("score").innerHTML = sessionStorage.getItem("RealPoints", realPoints) + " /  40";
  } else {
    document.getElementById("result-text").innerHTML = "Yippeee " + sessionStorage.getItem("name") + " :) you have cleared the test";
    document.getElementById("score").innerHTML = sessionStorage.getItem("RealPoints", realPoints) + " /  40";
    document.getElementById("retry-bnt").innerHTML = "Go to Home page"
  }
  
}

// Back button function

function back(){

    if(question_count == 16){
      document.getElementById("btn-next-model").style.display = "block";
      document.getElementById("btn-submit").style.display = "none";
    }
    question_count = question_count - 4
    answerCheck = answerCheck - 4
    show(question_count);
    if(question_count<=16){
      answerCount = answerCount - 4
    }
 
}

// Fuction to show question on webpage

function show(count) {
  console.log(question_count + " asnwer show ")

  let question = document.getElementById("questions");
  if(question_count<4){

    var previousBtn = document.getElementById("previous-question-btn");
    previousBtn.style.display = "none";
 
  }
  
 
  let [first, second, third, fourth] = questions[count].options;
  let [first1, second1, third1, fourth1] = questions[count + 1].options;
  let [first2, second2, third2, fourth2] = questions[count + 2].options;
  let [first3, second3, third3, fourth3] = questions[count + 3].options;


  // checked=${sessionStorage.getItem("answer"+(qCount)) == first}
  question.innerHTML = `
   <div class="row">
    <div class="col-sm-6">
    <h6 class="question-tittle">Q${count + 1}. ${questions[count].question}</h6>
    <form class="boxed">
      <input type="radio" id=${"option"+count+1} name=${"Q"+qCount} value=${first} ${sessionStorage.getItem("answer"+answerCheck) === first ? "checked" : null}>
      <label for=${"option"+count+1}>${first}</label>

      <input type="radio" id=${"option"+count+2} name=${"Q"+qCount} value=${second} ${sessionStorage.getItem("answer"+answerCheck) === second ? "checked" : null}>
      <label for=${"option"+count+2}>${second}</label>
     
      <input type="radio" id=${"option"+count+3} name=${"Q"+qCount} value=${third} ${sessionStorage.getItem("answer"+answerCheck) === third ? "checked" : null}>
      <label for=${"option"+count+3}>${third}</label>
      
      <input type="radio" id=${"option"+count+4} name=${"Q"+qCount} value=${fourth} ${sessionStorage.getItem("answer"+answerCheck) === fourth ? "checked" : null}>
      <label for=${"option"+count+4}>${fourth}</label>

      <br><br>
  
    </form>
    </div>
    <div class="col-sm-6">
    <h6 class="question-tittle">Q${count + 2}. ${questions[count + 1].question}</h6>
    <form class="boxed1">
      <input type="radio" id=${"option"+count+5} name=${"Q"+ (qCount + 1)} value=${first1} ${sessionStorage.getItem("answer"+(answerCheck+1)) === first1 ? "checked" : null}>
      
      <label for=${"option"+count+5}>${first1}</label>

      <input type="radio" id=${"option"+count+6} name=${"Q"+(qCount + 1)} value=${second1} ${sessionStorage.getItem("answer"+(answerCheck+1)) === second1 ? "checked" : null}>
      <label for=${"option"+count+6}>${second1}</label>
     
      <input type="radio" id=${"option"+count+7} name=${"Q"+(qCount + 1)} value=${third1} ${sessionStorage.getItem("answer"+(answerCheck+1)) === third1 ? "checked" : null}>
      <label for=${"option"+count+7}>${third1}</label>
      
      <input type="radio" id=${"option"+count+8} name=${"Q"+(qCount + 1)} value=${fourth1} ${sessionStorage.getItem("answer"+(answerCheck+1)) === fourth1 ? "checked" : null}>
      <label for=${"option"+count+8}>${fourth1}</label>

      <br><br>
  
    </form>
    </div>
    </div>


    <div class="row">
    <div class="col-sm-6">
    <h6 class="question-tittle">Q${count + 3}. ${questions[count + 2].question}</h6>
    <form class="boxed2">
      <input type="radio" id=${"option"+count+9} name=${"Q"+(qCount + 2)} value=${first2} ${sessionStorage.getItem("answer"+(answerCheck+2)) === first2 ? "checked" : null}>
      <label for=${"option"+count+9}>${first2}</label>

      <input type="radio" id=${"option"+count+10} name=${"Q"+(qCount + 2)} value=${second2} ${sessionStorage.getItem("answer"+(answerCheck+2)) === second2 ? "checked" : null}>
      <label for=${"option"+count+10}>${second2}</label>
     
      <input type="radio" id=${"option"+count+11} name=${"Q"+(qCount + 2)} value=${third2} ${sessionStorage.getItem("answer"+(answerCheck+2)) === third2 ? "checked" : null}>
      <label for=${"option"+count+11}>${third2}</label>
      
      <input type="radio" id=${"option"+count+12} name=${"Q"+(qCount + 2)} value=${fourth2} ${sessionStorage.getItem("answer"+(answerCheck+2)) === fourth2 ? "checked" : null}>
      <label for=${"option"+count+12}>${fourth2}</label>

      <br><br>
  
    </form>
    </div>
    <div class="col-sm-6">
    <h6 class="question-tittle">Q${count + 4}. ${questions[count + 3].question}</h6>
    <form class="boxed3">
      <input type="radio" id=${"option"+count+13} name=${"Q"+(qCount + 3)} value=${first3} ${sessionStorage.getItem("answer"+(answerCheck+3)) === first3 ? "checked" : null}>
      <label for=${"option"+count+13}>${first3}</label>

      <input type="radio" id=${"option"+count+14} name=${"Q"+(qCount + 3)} value=${second3} ${sessionStorage.getItem("answer"+(answerCheck+3)) === second3 ? "checked" : null}>
      <label for=${"option"+count+14}>${second3}</label>
     
      <input type="radio" id=${"option"+count+15} name=${"Q"+(qCount + 3)} value=${third3} ${sessionStorage.getItem("answer"+(answerCheck+3)) === third3 ? "checked" : null}>
      <label for=${"option"+count+15}>${third3}</label>
      
      <input type="radio" id=${"option"+count+16} name=${"Q"+(qCount + 3)} value=${fourth3} ${sessionStorage.getItem("answer"+(answerCheck+3)) === fourth3 ? "checked" : null}>
      <label for=${"option"+count+16}>${fourth3}</label>

      <br><br>
  
    </form>
    </div>


    </div>
    `;
}



// retry button
function retry() {
  location.href = "start.html";
}
