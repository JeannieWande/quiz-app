let arr = [
    {
        question:'1- Which color is created by mixing equal parts of blue and yellow?',
        options:[
            {'A': 'Green'},
            {'B': 'Purple'}, 
            {'C': 'Orange'}, 
            {'D': 'Red'}
           ],
        answer:'A'
    },
    {
        question:'2- Which color is often associated with sadness or feeling down?',
        options:[
            {'A': 'Yellow'},
            {'B': 'Red'},
            {'C': 'Blue'},  
            {'D': 'Green'}  
            ],
        answer:'C'
    },
    {
        question:'3- What color is associated with royalty and luxury?',
        options:[
           {'A': 'Purple'}, 
           {'B': 'Pink'}, 
           {'C': 'Red'}, 
           {'D': 'Black'}
           ],
        answer:'A'
    },
    {
        question:'4- What color is associated with danger or warning?',
        options :[
            {'A': 'Red'}, 
            {'B': 'Yellow'},
            {'C': 'Green'}, 
            {'D': 'Blue'}
           ],
        answer:'A'
    },
    {
        question:'5- What color is associated with envy or jealousy?',
        options:[
            {'A': 'Red'},
            {'B': 'Blue'},
            {'C': 'Green'},
            {'D': 'Orange'}
            ],
        answer:'C'
    },
    {
        question:'6- What is the name of the primary colors in art?',
        options:[
            {'A': 'Red, blue, green'},
            {'B': 'Red, yellow, blue'},
            {'C': 'Red, green, yellow'},
            {'D': 'Orange, purple, green'}
            ],
        answer:'B'
    },
    {
        question:'7- What color is created by mixing equal parts of red and blue?',
        options:[
            {'A': 'Purple'},
            {'B': 'Green'},
            {'C': 'Orange'},
            {'D': 'Pink'}
            ],
        answer:'A'
    },
    {
        question:'8- What color is associated with purity and innocence?',
        options:[
            {'A': 'Red'},
            {'B': 'White'},
            {'C': 'Black'},
            {'D': 'Yellow'}
            ],
        answer:'B'
    },
    {
        question:'9- What color is associated with passion and love?',
        options:[
            {'A': 'Red'},
            {'B': 'Pink'},
            {'C': 'Blue'},
            {'D': 'Orange'}
            ],
        answer:'A'
    },
    {
        question:'10- What color is associated with energy and excitement?',
        options:[
            {'A': 'Yellow'},
            {'B': 'Blue'},
            {'C': 'Green'},
            {'D': ' Orange'}
            ],
        answer:'D'
    },
    {
        question: '11. What color is associated with sunshine?',
        options: [
          {'A': 'Green'},
          {'B': 'Purple'}, 
          {'C': 'Yellow'}, 
          {'D': 'Blue'}
        ],
        answer: 'C'
      },
      {
        question: '12- What color is a symbol of peace?',
        options: [
            {'A': 'Black'},
            {'B': 'Blue'},
            {'C': 'Green'},
            {'D': 'White'}

        ],
        answer: 'D'
    },
    {
        question: '13- What color represents happiness and optimism?',
        options: [
            {'A': 'Yellow'},
            {'B': 'Purple'},
            {'C': 'Orange'},
            {'D': 'Pink'}
        ],
        answer: 'A'
    },
    {
        question: '14- What color is often used to symbolize hope and renewal?',
        options: [
            {'A': 'Blue'},
            {'B': 'Yellow'},
            {'C': 'Green'},
            {'D': 'Purple'}
        ],
        answer: 'C'
    },
    {
        question: '15- What color is a common symbol of loyalty and trust?',
        options: [
            {'A': 'Blue'},
            {'B': 'Red'},
            {'C': 'Yellow'},
            {'D': 'Green'}
        ],
        answer: 'A'
    },
    {
        question: '16- What color is associated with intelligence and authority?',
        options: [
            {'A': 'Yellow'},
            {'B': 'Green'},
            {'C': 'Red'},
            {'D': 'Blue'}
        ],
        answer: 'D'
    },
    {
        question: '17- What color is often associated with creativity and imagination?',
        options: [
          
            {'A': 'Yellow'},
            {'B': 'Purple'},
            {'C': 'Orange'},
            {'D': 'Green'}
        ],
        answer: 'B'
    }, 
    {
        question: '18- What color is often associated with calmness and relaxation?',
        options: [
            {'A': 'Blue'},
            {'B': 'Yellow'},
            {'C': 'Green'},
            {'D': 'Pink'}
        ],
        answer: 'A'
    },
    {
        question: '19- What color is associated with the month of December?',
        options: [
            {'A': 'Red'},
            {'B': 'Green'},
            {'C': 'Yellow'}, 
            {'D': 'Blue'}
        ],
        answer: 'D'
    }, 
    {
        question: '20- What color is associated with the month of October?',
        options: [
            {'A': 'Purple'},
            {'B': 'Green'},
            {'C': 'Orange'},
            {'D': 'Blue'}
        ],
        answer: 'C'
    },
    
]
let questions= document.getElementById('questions');
let answer= document.getElementById('answer');
let number= document.getElementById('num');
let starter = document.getElementById('starter');
let answerBox= document.getElementById('ansBox');
let displayBox= document.getElementById('displayBox');
let displayTop= document.getElementById('displayTop');
let displayScore= document.getElementById('displayScore');
let currentQuestion=0;
let total=1;
let qnLength= arr.length;

function startQuiz() {
   
function nextNum(){
    let num = total + "/" + qnLength;
    number.innerHTML=num
}
nextNum()


for (let i = 0; i < arr.length; i++) {
    let Qn=document.createElement('h3');
    Qn.innerHTML=arr[i].question;
    questions.appendChild(Qn);
    
    let ul=document.createElement('ul');
    for (let j = 0; j < arr[i].options.length; j++) {  
        let li = document.createElement('li');
        let  choice= document.createElement('h4');
        let key = Object.keys(arr[i].options[j])[0];
        let value= Object.values(arr[i].options[j])[0];
        choice.innerHTML= key + ": " + value;

        let input= document.createElement('input');
        input.type= 'radio';
        input.name='radioBtn'+ i;
        input.value=value;
        input.required=true;
        input.addEventListener('click', function(){
            submitBtn.disabled=false;
        })
        
        

        li.appendChild(input);
        li.appendChild(choice);
        ul.appendChild(li);


    
    }
    questions.appendChild(ul);

    let ans=document.createElement('p');
    ans.id='correctAnswer'+ i;
    ans.innerHTML=arr[i].answer;
    ans.style.display='block';
    questions.appendChild(ans);

   if(i===currentQuestion){
    Qn.style.display='block';
    ul.style.display='block';
   }else{
    Qn.style.display='none';
    ul.style.display='none';

   }
}


let prevBtn= document.getElementById('prev');
let submitBtn=document.getElementById('submit');
let nextBtn= document.getElementById('next');

/*prevBtn.addEventListener('click', function(){
    displayBox.innerHTML='The Answer is :' + arr[currentQuestion].answer;
    displayBox.style.display='block';
    
    currentQuestion--;
    if(currentQuestion<0){
        currentQuestion=0;
    }
    total--;
    if(total<=0){
        total=1;    
    }
    
    if(selectedKey===arr[currentQuestion].answer){
        answerBox.innerHTML='Correct'; 
        answerBox.style.backgroundColor='rgba(0,255,0,0.6)';     
    }else{
        answerBox.innerHTML='Incorrect';
        answerBox.style.backgroundColor='rgba(255,0,0,0.5)';
    }
    console.log(selectedKey);
    console.log(arr[currentQuestion].answer)

     nextNum()
    displayQn(currentQuestion)
})*/;
nextBtn.addEventListener('click', function(){
    answerBox.innerHTML= '';
    displayTop.style.display="none";
    answerBox.style.backgroundColor='rgba(0,0,0,0.2)';
    currentQuestion++;
    if(currentQuestion>=arr.length){
        currentQuestion=arr.length-1;
    }
    total++;
    if(total>=arr.length){
        total=arr.length;    
    }
    if(currentQuestion==arr.length-1){
      
    }

    nextNum()
    displayQn(currentQuestion)

});
function displayQn(index){
    let quest= questions.getElementsByTagName('h3');
    let multiple= questions.getElementsByTagName('ul');
    let answ=questions.getElementsByTagName('p');

    for (let i = 0; i < quest.length; i++) {
        quest[i].style.display='none';
        multiple[i].style.display='none';
        answ[i].style.display='none';
        
    }

    quest[index].style.display='block';
    multiple[index].style.display='block';
    answ[index].style.display='none';
    nextBtn.disabled=true;

    selectedRadioButton();
}
displayQn(currentQuestion)


//GETTING THE SELECTED RADIO
let selectedKey='';
//let trueAnswer= document.getElementById('correctAnswer'+ currentQuestion);
function selectedRadioButton() {
    let selectedValue;
    let selectedRadio= document.querySelectorAll('input[name~="radioBtn'+ currentQuestion+'"]');
      for (let i = 0; i < selectedRadio.length; i++) {
          selectedRadio[i].addEventListener('change', function(){
          selectedValue= selectedRadio[i].value;
          selectedKey=Object.keys(arr[currentQuestion].options[i])[0];
          answerBox.innerHTML='You have selected ' + selectedKey + ': ' + selectedValue;   
       
       })};
     
    
}
let correctAnswer=0;
submitBtn.addEventListener('click', function(){
   displayTop.style.display='flex'
   displayBox.innerHTML='The Answer is :' + arr[currentQuestion].answer
  
    if(selectedKey===arr[currentQuestion].answer){
        answerBox.innerHTML='Correct'; 
        answerBox.style.backgroundColor='rgba(0,255,0,0.6)';
        correctAnswer++    
    }else{
        answerBox.innerHTML='Incorrect';
        answerBox.style.backgroundColor='rgba(255,0,0,0.5)'
    }
    if(currentQuestion===arr.length-1){
        nextBtn.style.display='none';
        if(correctAnswer>15){
        displayScore.innerHTML='CONGRATULATIONS!!! '+ ' you scored '+ correctAnswer + "/" + qnLength ;
        displayScore.style.color='blue';
        }else{
        displayScore.innerHTML='OOPS! Sorry... '+ ' you scored '+ correctAnswer + "/" + qnLength + '<br>'+ 'TRY AGAIN';
        displayScore.style.color='red'
        }
       
    }
    nextBtn.disabled=false;
    submitBtn.disabled=true;
    disableRadio()
});
function disableRadio(params) {
    let selectedRadio= document.querySelectorAll('input[name~="radioBtn'+ currentQuestion+'"]');
    selectedRadio.forEach(function(radio) {
        if (!radio.checked) {
            radio.disabled=true;
        }
    });    
}

submitBtn.disabled=true;
starter.style.display='none';
//prevBtn.style.display='block';
submitBtn.style.display='block';
nextBtn.style.display='block';
answerBox.style.display='block';

}

