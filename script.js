var operatingsystem= prompt ("Hi, how are you today?")
switch(operatingsystem) {
		case "bad","horrible","sad","mad","tired":
		alert("I'm sorry");
		break;
		
		case"good","happy","inlove","bubbly","excited":
		alert("I'm glad");
		break;
		
		default:
		alert("Thanks for sharing!");
}

/* exported changeColor */
function changeColor(newColor) {
	var elem=document.getElementById('welcome');
	elem.style.color=newColor;
}

/* exported myFunction */
function myFunction() {
  var list = document.getElementsByTagName("UL")[0];
  list.getElementsByTagName("LI")[0].innerHTML = "Charline";
}

/* exported buttonm */
function buttonm() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Good job!";
  document.body.appendChild(btn);
}

/* exported textno */
function textno() {
  var h = document.createElement("H1");
  var t = document.createTextNode("Thanks for visiting!");
  h.appendChild(t);
  document.body.appendChild(h);
}


const myObject = {
  language1:"Spanish",
  language2: "English",
  languages: function() {
    return this.language1 + " and " + this.language2;
  }
}
document.getElementById("callfunct").innerHTML = myObject.languages();



const time = new Date().getHours();
let greeting;

if (time < 10) {
  greeting = "Good morning!";
} else if (time < 20) {
  greeting = "Good day!";
} else {
  greeting = "Good night!";
}
document.getElementById("timess").innerHTML = greeting;


