//localStorage.clear();
   let array=[
    {
      "question": "What is the capital of France?",
      "options": [
        "Berlin",
        "Madrid",
        "Paris",
        "Rome"
      ],
      "answer": "Paris"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars"
    },
    {
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "options": [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen"
      ],
      "answer": "William Shakespeare"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ],
      "answer": "Blue Whale"
    },
    {
      "question": "Which element has the chemical symbol 'O'?",
      "options": [
        "Oxygen",
        "Gold",
        "Osmium",
        "Oganesson"
      ],
      "answer": "Oxygen"
    }
  ]
  
  let username=JSON.parse(localStorage.getItem('user')) || [];
  let score=JSON.parse(localStorage.getItem('score')) || [];
  //let username=[],score=[];
    for(let i=0;i<array.length;i++){
    let headinner = document.getElementsByClassName("headinner")[0];
    let inner = document.createElement("div");
    inner.classList.add("inner");
    
    
    question(inner,i,array[i]);
    headinner.append(inner);
    }
    function question(inner, i, questionData){
            //console.log(a[question]);
            let form=document.createElement("form");
            inner.append(form);
            let questionElement = document.createElement("h3");
            questionElement.textContent = (i + 1) + ". " + array[i].question;
            form.appendChild(questionElement);
            
            
            for(let j = 0; j < array[i].options.length; j++) {
                let optionElement = document.createElement("input");
                optionElement.setAttribute("type", "radio");
                optionElement.setAttribute("name", "question" + i); 
                optionElement.setAttribute("value", questionData.options[j]);
    
                
                let label = document.createElement("label");
                label.textContent = questionData.options[j];
    
               
                form.appendChild(optionElement);
                form.appendChild(label);
    
                
                form.appendChild(document.createElement("br"));
            }  
    }
    function getSelectedValueByName(name) {
        let elements = document.getElementsByName(name);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
             
                return elements[i].value;
            }
        }
        return null; 
    }
    function result(){
      let c=0;
    for(let i=0;i<array.length;i++){
            let ans=getSelectedValueByName("question"+i);
            if(ans===array[i].answer){
                console.log(c); 
                c=c+1;
            }
            else
            console.log("no")
    }
    console.log(c);
   

    let final=document.getElementsByClassName("final")[0];
    let result=document.createElement("div");
    result.classList.add("results");
    let h1=document.createElement("h1");
    h1.classList.add("showResult");
    h1.textContent="Score : "+c;
    result.append(h1);
    final.appendChild(result);
    let submit=document.getElementById("submitButton");
    submit.disabled = true;
    let user=document.getElementById("user").value;
    username.push(user);
    score.push(c);
    localStorage.setItem('user', JSON.stringify(username));
    localStorage.setItem('score', JSON.stringify(score));
    updateScores();
   
}



function updateScores() {
    let storedUsernames = JSON.parse(localStorage.getItem('user'));
    let storedScores = JSON.parse(localStorage.getItem('score'));

    let combined = storedUsernames.map((name, index) => {
        return { username: name, score: storedScores[index] };
    });

    combined.sort((a, b) => b.score - a.score);

    let sortedUsernames = combined.map(item => item.username);
    let sortedScores = combined.map(item => item.score);

    localStorage.setItem('user', JSON.stringify(sortedUsernames));
    localStorage.setItem('score', JSON.stringify(sortedScores));
}








