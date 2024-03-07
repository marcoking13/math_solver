var a;
var c;
var b;

var quadratic_choice = document.querySelector("[choice='quadradic']");

quadratic_choice.addEventListener("click",(e)=>{

    var math_input = document.querySelector(".number_value");
    var input_value = math_input.value;

    input_value= math_input.value;

    math_input.value = math_input.value.replace("*"," * ");
    math_input.value = math_input.value.replace("/"," / ");
    math_input.value  = math_input.value.replace("+"," + ");
    math_input.value  = math_input.value.replace("-", " - ");

    var parsed_input = math_input.value.split(' ');

  // var found_error_in_sign = parsed_input.find((p) => p == "*" || p == "/" );
    var can_eval = false;
    var first_coefficent = "";
    var coefficent_counter = 0;
    var squared_counter = 0;

    for(var i =0; i < parsed_input.length; i++){
      for(var z = 0; z < parsed_input[i].length; z++){
        console.log(parsed_input[i][z]);
        if(parsed_input[i][z].includes("a")
        || parsed_input[i][z].includes("b")
        || parsed_input[i][z].includes("c")
        || parsed_input[i][z].includes("d")
        || parsed_input[i][z].includes("e")
        || parsed_input[i][z].includes("f")
        || parsed_input[i][z].includes("g")
        || parsed_input[i][z].includes("h")
        || parsed_input[i][z].includes("i")
        || parsed_input[i][z].includes("j")
        || parsed_input[i][z].includes("k")
        || parsed_input[i][z].includes("l")
        || parsed_input[i][z].includes("m")
        || parsed_input[i][z].includes("o")
        || parsed_input[i][z].includes("p")
        || parsed_input[i][z].includes("q")
        || parsed_input[i][z].includes("r")
        || parsed_input[i][z].includes("s")
        || parsed_input[i][z].includes("t")
        || parsed_input[i][z].includes("u")
        || parsed_input[i][z].includes("v")
        || parsed_input[i][z].includes("w")
        || parsed_input[i][z].includes("x")
        || parsed_input[i][z].includes("y")
        || parsed_input[i][z].includes("z")
        ){

           if(coefficent_counter == 0){
              first_coefficent = parsed_input[i];
            }

           coefficent_counter++;

         }
      }


    };

    for(var k = 0; i < parsed_input.length; k++){
      if(parsed_input[k].includes(first_coefficent+"^")){
        squared_counter++;
      }
    }

  var find_if_can_eval = () => {
    var input_cleaned = math_input.value.replace(/[^\d.%&#@$!()*/+^=-_,.;-]/g,'');
    console.log(input_cleaned);
    try {
      math.evaluate(input_cleaned);
      can_eval = true;
    }
    catch{
      can_eval= false;
    }

  }

  find_if_can_eval();
  console.log(can_eval);
  console.log(squared_counter);
  console.log(math_input.value);
  console.log(coefficent_counter);

});
