var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 



var quizAnswers = [];







var questions=[
    {
	    question: "How many players on a hurling team",
	    correctAnswer: "15",
        
        
	    answer0: "10",
	    answer1: "13",
	    answer2: "18",
        answer3: "15"
	},
    {
	    question: "How many times have galway won the all-ireland hurling final",
	    correctAnswer: "3",
        
        
	    answer0: "4",
	    answer1: "1",
	    answer2: "0",
        answer3: "3"
	},
    {
	    question: "Who won the all ireland club hurling final 2007",
	    correctAnswer: "Ballyhale shamrocks",
        
        
	    answer0: "Ballyea",
	    answer1: "Gort",
	    answer2: "Ballyhale shamrocks",
        answer3: "wolf tones"
	},
    {
	    question: "who won both allireland hurling and football ",
	    correctAnswer: "Jimmy Barry",
        
        
	    answer0: "Tommy Barry",
	    answer1: "Jimmy Barry",
	    answer2: "Noel Stapleton",
        answer3: "Henry shefflin"
	},
	{
		question: "How many all ireland hurling titles does kilkenny have",
		correctAnswer: "36",
		
		answer0: "36",
		answer1: "20",
		answer2: "42",
		answer3: "9"
	},
	{
		question: "How many all ireland hurling titles have tipperary won",
		correctAnswer: "27",
		
		answer0: "17",
		answer1: "14",
		answer2: "19",
		answer3: "27"
	},
	{
		question: "Name of the trophy presented to winners of all ireland hurling final",
		correctAnswer: "Liam Mcarthy",
		
		answer0: "Liam Mcarthy",
		answer1: "Sam mcgguire",
		answer2: "Oisin Hanrahan",
		answer3: "william sheerin"
	},
	{
		question: "Who has the most all ireland hurling medals",
		correctAnswer: "Henry shefflin",
		
		answer0: "Henry shefflin",
		answer1: "Joe canning",
		answer2: "Eoin Kelly",
		answer3: "Lar corbett"
	},
	{
		question: "Who won the 1945 hurling all ireland final",
		correctAnswer: "Tipperary",
		
		answer0: "Cork",
		answer1: "Kilkenny",
		answer2: "Tipperary",
		answer3: "Clare"
	},
	{
		question: "How many football all ireland titles have kerry",
		correctAnswer: "37",
		
		answer0: "22",
		answer1: "37",
		answer2: "41",
		answer3: "12"
	},
	{
		question: "How many counties have never won a senior all ireland football title",
		correctAanswer: "13",
		
		answer0: "13",
		answer1: "0",
		answer2: "2",
		answer3: "7"
	},
	{
		question: "last time tipperary won an all ireland hurling final",
		correctAnswer: "2016",
		
		answer0: "2012",
		answer1: "2010",
		answer2: "2016",
		answer3: "2015"
	},
	{
		question: "Who won the all ireland hurling club in 2015",
		correctAnswer: "Na Piarsaigh",
		
		answer0: "Kilmacud crokes",
		answer1: "Clonlara",
		answer2: "Na Piarsaigh",
		answer3: "Ballyhale shamrocks"
	},
	{
		question: "Who won the all ireland hurling final in 1997",
		correctAnswer: "Clare",
		
		answer0: "Dublin",
		answer1: "Clare",
		answer2: "Antrim",
		answer3: "Cork"
	},
	{
		question: "who won both young player of the year and hurler of the year in 2013",
		correctAnswer: "Tony kelly",
		
		answer0: "Leo Cullen",
		answer1: "Joe Smith",
		answer2: "JTony kelly",
		answer3: "Pat Lam"
	},
	{
		question: "How many teams compete in  the munster hurling championship",
		correctAnswer: "5",
		
		answer0: "5",
		answer1: "6",
		answer2: "4",
		answer3: "7"
	},
	{
		question: "Who is Ireland most successful Hurling team?",
		correctAnswer: "Kilkenny",
		
		answer0: "	Kilkenny",
		answer1: "Cork",
		answer2: "Tipperary",
		answer3: "Galway"
	},
	{
		question: "Who won the first ever all ireland football final in 1887",
		correctAnswer: "Limerick",
		
		answer0: "Louth ",
		answer1: "Kerry",
		answer2: "Limerick",
		answer3: "Dublin"
	},
	{
		question: "Who's the Tipperary senior hurling team captain?",
		correctAnswer: "Padraic maher",
		
		answer0: "Seamus callinan",
		answer1: "Rory Best",
		answer2: "Padraic maher",
		answer3: "CJ Stander"
	},
	{
		question: "Who won the first every all ireland hurling final in 1844?",
		correctAnswer: "Tipperary",
		
		answer0: "Tipperary",
		answer1: "Galway",
		answer2: "Kilkenny",
		answer3: "Wexford"
	}
];











function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}


function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

function _(x)
{ 
    return document.getElementById(x);
} 

		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='window.print()'>Print this page</button>";
		_("test_status").innerHTML += "  Thank you for completing the quiz";
        pos = 0;
        correct = 0; 
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

    var bar=document.getElementById("progressBar");
    bar.value = (pos+1);

    

     quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;
    choiceA = shuffledAnswers[0]; 
    choiceB = shuffledAnswers[1]; 
    choiceC = shuffledAnswers[2]; 
    choiceD = shuffledAnswers[3]; 
    
    test.innerHTML = "<h3>"+question+"</h3>"; 
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; 
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); 
    for(var i=0; i<choices.length; i++)
    { 
        if(choices[i].checked) 
        { 
            choice = choices[i].value; 
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)
    { 
        alert('Correct!');
        correct++;
    }
    else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; 
    
    renderQuestion(); 
}




window.addEventListener("load", renderQuestion, false);