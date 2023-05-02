let arr = [
    {
        question:'1- Which color is created by mixing equal parts of blue and yellow?',
        options:[
            {'A': 'Green'},
            {'B': 'Purple'}, 
            {'C': 'Orange'}, 
            {'D': 'Red'}
           ],
        answer:'Green'
    },
    {
        question:'2- Which color is often associated with sadness or feeling down?',
        options:[
            {'A': 'Yellow'},
            {'B': 'Red'},
            {'C': 'Blue'},  
            {'D': 'Green'}  
            ],
        answer:'Blue'
    },
    {
        question:'3- What color is associated with royalty and luxury?',
        options:[
           {'A': 'Purple'}, 
           {'B': 'Pink'}, 
           {'C': 'Red'}, 
           {'D': 'Black'}
           ],
        answer:'Purple'
    },
    {
        question:'4- What color is associated with danger or warning?',
        options :[
            {'A': 'Red'}, 
            {'B': 'Yellow'},
            {'C': 'Green'}, 
            {'D': 'Blue'}
           ],
        answer:'Red'
    },
    {
        question:'5- What color is associated with envy or jealousy?',
        options:[
            {'A': 'Red'},
            {'B': 'Blue'},
            {'C': 'Green'},
            {'D': 'Orange'}
            ],
        answer:'Green'
    },
    {
        question:'6- What is the name of the primary colors in art?',
        options:[
            {'A': 'Red, blue, green'},
            {'B': 'Red, yellow, blue'},
            {'C': 'Red, green, yellow'},
            {'D': 'Orange, purple, green'}
            ],
        answer:'Red, yellow, blue'
    },
    {
        question:'7- What color is created by mixing equal parts of red and blue?',
        options:[
            {'A': 'Purple'},
            {'B': 'Green'},
            {'C': 'Orange'},
            {'D': 'Pink'}
            ],
        answer:'Purple'
    },
    {
        question:'8- What color is associated with purity and innocence?',
        options:[
            {'A': 'Red'},
            {'B': 'White'},
            {'C': 'Black'},
            {'D': 'Yellow'}
            ],
        answer:'White'
    },
    {
        question:'9- What color is associated with passion and love?',
        options:[
            {'A': 'Red'},
            {'B': 'Pink'},
            {'C': 'Blue'},
            {'D': 'Orange'}
            ],
        answer:'Red'
    },
    {
        question:'10- What color is associated with energy and excitement?',
        options:[
            {'A': 'Yellow'},
            {'B': 'Blue'},
            {'C': 'Green'},
            {'D': ' Orange'}
            ],
        answer:'Orange'
    }
    
]

let prevBtn = document.getElementById('prev');
let submitBtn = document.getElementById('submit');
let nextBtn = document.getElementById('next');
let slider= document.getElementById('slide');
let answerBox = document.getElementById('showAns');
let scoreBox = document.getElementById('score');
let boxTxt = document.createElement('h2');

correctAnswer=0;
currentQuestion=0;

function multipleChoices(){
    for (let i = 0; i < arr.length; i++) {
        //creating question section
        let h3= document.createElement('h3')
        h3.innerHTML=arr[i].question;
        slider.appendChild(h3)
        
        //creating choices section
        let ul=document.createElement('ul');
        for (let j = 0; j < arr[i].options.length; j++) {
            
            let li= document.createElement('li');
            let choice=document.createElement('h4')
            let key= Object.keys(arr[i].options[j])[0];
            let value= Object.values(arr[i].options[j])[0];
            choice.innerHTML=key + ": "+ value;
       
            let input= document.createElement('input');
            input.type='radio';
            input.name='answer';
            input.value= value; 
            input.addEventListener('click', function(){
                submitBtn.disabled=false;
            
            })
            li.appendChild(input);
            li.appendChild(choice);
            ul.appendChild(li)
            
        }
        
        slider.appendChild(ul);

        //create asnswer section
        let ans = document.createElement('p')
        ans.id='trueAnswer'+ i;
        ans.innerHTML=arr[i].answer;
        slider.appendChild(ans);
        ans.style.display='none';
        submitBtn.disabled=true;

      //DISPLAYING A SINGLE QUESTION
        if(i===currentQuestion){
            h3.style.display='block';
            ul.style.display='block';
        }else{
            h3.style.display='none';
            ul.style.display='none';
        }
    }
}
multipleChoices();
//the next button
nextBtn.addEventListener('click', function(){
    currentQuestion++;
    if(currentQuestion >= arr.length){
        currentQuestion=arr.length-1;
    }
    boxTxt.innerHTML='';
    showQuestion(currentQuestion);
   

});
//the previous button
/*prevBtn.addEventListener('click', function(){
    currentQuestion--;
    if(currentQuestion < 0){
        currentQuestion=0;
    }
    showQuestion(currentQuestion);
    boxTxt.innerHTML="You selected- " + selectedValue;
});*/

//selecting radio values 
let selectedValue;
function selectedAnswer() {
    let selected = document.querySelectorAll('input[name="answer"]');
        selected.forEach(function(selectedbtn){
            selectedbtn.addEventListener('change', function(){
               let select=this;
               selectedValue=select.value.trim();
               boxTxt.innerHTML="You have selected- " + selectedValue;
               boxTxt.style.color='black';   
               console.log(select)
            }); 
        });
        answerBox.appendChild(boxTxt);

//The SUBMIT FUNCTION that is called every time the submit button is clicked
        submitBtn.addEventListener('click', submit);
        let h2 = document.createElement('h2')
        function submit(){
            let trueAns = document.getElementById('trueAnswer' + currentQuestion); // OTHER WAY---const opt = slider.getElementsByTagName('ul')[currentQuestion];
                                                                                   //const trueAns= opt.nextElementSibling;
            console.log(trueAns.innerHTML);
            console.log(selectedValue);
            console.log(currentQuestion);
//getting the correct and incorrect answer
          if(selectedValue===trueAns.innerHTML){
            boxTxt.innerHTML= 'Correct';
            boxTxt.style.color = 'green';
            correctAnswer++;
          }else{
            boxTxt.innerHTML= 'Incorrect';
            boxTxt.style.color = 'red';
          }

          submitBtn.disabled=true;

          if(currentQuestion>=9){
             scoreBox.style.display='block';
             nextBtn.disabled=true;   
          }
//displaying the score 
          if(correctAnswer>5){
            h2.innerHTML="Congratulations!!!... " + " <br>You scored"  + correctAnswer + '/'+  arr.length;
          }else{
            h2.innerHTML=`You scored ${correctAnswer}/${arr.length} <br>Oops!!, try again...`;  
          }
          
        }; 
        scoreBox.appendChild(h2);
    }
selectedAnswer()

//DISPLAYING THE CURRENT QUESTION
function showQuestion(index){
    let questions = slider.getElementsByTagName('h3');
    let answers = slider.getElementsByTagName('p');
    let options = slider.getElementsByTagName('ul');

    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
        answers[i].style.display = 'none';
        options[i].style.display = 'none';  
    }

    // display only the selected question and its options
    let question = questions[index];
    let answer = answers[index];
    let option = options[index];
    question.style.display = 'block';
    answer.style.display = 'none'; // hide the answer initially
    option.style.display = 'block';
}
showQuestion(currentQuestion)

 
    











