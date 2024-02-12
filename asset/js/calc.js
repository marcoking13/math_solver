var chars = [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   0,
   "*",
   "/",
   "^",
   "*",
   "(",
   ")",
   "-",
   "+",

]


var number_container = document.querySelector(".number_container");
var input = document.querySelector(".number_value");

var element = function(char){
  return (
    `<div class="char_box" data = '${char}'>
      <p  data = '${char}'>
      ${char}
      </p>
    </div>`
  );
}

const LoopThroughNumbers = () => {
  var html = ``;
  for(var i=0; i <chars.length;i++){
    var el = element(chars[i]);
    html+= el;
  }
  return html;
}


number_container.innerHTML = LoopThroughNumbers();

var boxes = document.getElementsByClassName("char_box");
console.log(boxes.length);

for(var i =0; i < boxes.length;i ++){
  boxes[i].addEventListener("click",(e)=>{
    var data = e.target.getAttribute("data");
    var current_value = input.value;
    current_value += data;
    input.value = current_value;
  })
}

var submit = document.querySelector(".submit_answer");
var form = document.querySelector(".enter_form");
var answer_log = document.querySelector(".answer_log");

function PopulateAnswer(answer){
  var html = "";
  var user_input =
  `
  <div class="user_bubble bubble">
      ${ input.value }
  </div>
  `
  var answer_input =
  `
  <div class="answer_bubble bubble">
      ${answer}
  </div>

  `
  html += user_input;
  html += answer_input;

  answer_log.innerHTML = html;

}


function HandleInput(e){
  e.preventDefault();
  try{
    var evaluation = math.evaluate(input.value);
  }catch{
    alert("Please Enter a valid input");
  }
  if(isNaN(evaluation)){
    evaluation = "Answer could not be found"
  }
  PopulateAnswer(evaluation);
}


form.addEventListener("submit",(e)=>{
  HandleInput(e);
});

submit.addEventListener("click",(e)=>{
  HandleInput(e);
});
