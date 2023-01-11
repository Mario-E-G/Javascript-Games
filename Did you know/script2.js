var counter = 0; 
var text = ["","ابن", "النفيس", "اول","من", "اكتشف", "الدورة","الدموية", "الصغري", "واثبت",
"انه", "الرئتين", "هي","المسؤؤلة", "عن", "تنقية","الدم", "كما", "انه","اكتشف","الدورة", "الدموية" , "الكبري", "وجدت","مخطوطة","بعد", "وفاته","وثق", "فيها","اكتشافه","للدورة", "الدموية" , "الكبري", "كما","انه","وضع", "نطرية","باهرة", "في","الرؤية","والابصار"];
var elem = document.getElementById("word");
var div1=document.getElementById("one");
var div11=document.getElementById("eleven");
var question=document.getElementById("quest");
var counter_questions=0;
var time;

setTimeout(function(){ 
document.getElementById("one").style.display ="none"; 
}, 2000);

console.log(text.length);
var inst = setInterval(change, 1000);
function change() {
console.log(counter);
elem.innerHTML = text[counter++];
if (counter > text.length) {
console.log(counter);
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


