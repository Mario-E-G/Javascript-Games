var counter = 0; 
var text = ["ابن", "النفيس", "أحد","العلماء", "المهمين", "في","عدة", "مجالات", "فقد",
"كان", "عالما", "وطبيا","ويعتبر", "أحد", "اشهر ","الفقهاء", "كما", "انه","عالم","في ", "وظائف" , "الجسم", "ولد","في ","بلدة", "القرش"];
var elem = document.getElementById("word");
var div1=document.getElementById("one");
var div11=document.getElementById("eleven");
var counter_questions=0;
var time;

setTimeout(function(){ 
document.getElementById("one").style.display ="none"; 
}, 1000);

console.log(text.length);

var inst = setInterval(change, 1000);
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

export function changeColor(el) {
  
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
