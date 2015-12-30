var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

function _(x)
{
	return document.getElementById(x);
}
function renderQuestion()
{
	test = _("test");
	if(pos >= questions.length)
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "You Are Done :)";
		pos = 0;
		correct = 0;
		return false;
	}
	
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	chE = questions[pos][5];
	test.innerHTML = "<h3>"+question+"</h3>";
	
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chD+"<br><br>";
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
	console.log(choice);
	console.log(chE);
	if(choice == chE)
	{
		correct++;
		document.getElementById("test_status").innerHTML="Your " + "score " + "is " + correct;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
