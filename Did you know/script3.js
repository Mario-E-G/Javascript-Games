//import { counter_questions } from "./script1";


var counter = 0; 
var text = ["اهم", "انجازاته", "دعا","الي", "دراسة", "التشريح","المقارن", "لفهم", "التشريح",
"البشري", "كما", "انه","تحدث", "عن", "الابصار","في", "العين", "وكان","له","نطريات", "صحيحة" , "في", "مجال","الرؤية","كما", "انه","تحدث", "عن ","مفهوم","التخيل", "ومفهوم","الابصار", "وفرق" , "بينهما", "ول","من","تحدث", "عن","خطورة", "الملح","وذكر","اهم", "الشروط","التي","يجب", "مراعاتها","عند", "اسنخدام ","الادوية","صحح", "اخطاء","جالنوس", "في" , "تشريح", "القلب","اول","من", "تحدث","عن", "تغذية","العضلة","القلبية"];
var elem = document.getElementById("word");
var div1=document.getElementById("one");
var div11=document.getElementById("eleven");
var question=document.getElementById("quest");
//var counter_questions=0;
var time;
/*hide div one*/
setTimeout(function(){ 
document.getElementById("one").style.display ="none"; 
}, 2000);

console.log(text.length);

var inst = setInterval(change,1000);
function change() {
elem.innerHTML = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
console.log(elem);
document.getElementById("eleven").style.display = "none"; 
document.getElementById("quest").style.display = "block"; 
clearInterval(inst); 
}
} 


div11.style.display = "none"; 
var x=setTimeout(function(){ 
div1.style.display="none";
div11.style.display = "block"; 
}, 2000);

function changeColor(el) {
  
  if (el.id === 'btn1') {
    el.style.backgroundColor = 'green';
    counter_questions++;
  } else if (el.id === 'btn2') {
    el.style.backgroundColor = 'red';
    counter_questions--;
  }
  
    time=setTimeout(() => {
   // el.parentElement.style.display = 'none';
  // question.style.display = 'none';

  }, 3000);

} 
/**
 * 
 
 
 
 
 
function leveltwo() {
con.style.display="flex"
div2.style.display="flex";  
setTimeout(function(){ 
  document.getElementById("leveltwo").style.display ="none"; 
}, 2000);
  
  
var inst = setInterval(change, 2000);
function change() {
elem.innerHTML = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
console.log(elem);
document.getElementById("12").style.display = "none"; 
document.getElementById("quest2").style.display = "block"; 
clearInterval(inst); 
}
}   
  
    
  
div11.style.display = "none"; 
var x=setTimeout(function(){ 
div2.style.display="none";
div11.style.display = "block"; 


function changeColor2(el2) {
  console.log("xxxxxxxxxx");
  if (el2.id === 'btn3') {
    el2.style.backgroundColor = 'green';
    counter_questions2++;
  } else if (el2.id === 'btn4') {
    el2.style.backgroundColor = 'red';
    counter_questions2--;
  }
    time=setTimeout(() => {
    el2.parentElement.style.display = 'none';

  }, 3000);

} 


}, 2000)};



*/

