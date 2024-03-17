var a;
var c;
var b;
var numbers = [1,2,3,4,5,6,7,8,9,0];
var separators = ['+', '-', '(', ')', '*', '/', ':', '?'];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var quadratic_choice = document.querySelector("[choice='quadradic']");

quadratic_choice.addEventListener("click",(e)=>{

    var math_input = document.querySelector(".number_value");
    var input_value = math_input.value;

    input_value = math_input.value;

    math_input.value = math_input.value.replace("*"," * ");
    math_input.value = math_input.value.replace("/"," / ");
    math_input.value  = math_input.value.replace("+"," + ");
    math_input.value  = math_input.value.replace("-", " - ");

    var parsed_input = math_input.value;

    for (var i = 0; i < separators.length; i++) {
      var rg = new RegExp("\\" + separators[i], "g");
      parsed_input = parsed_input.replace(rg, " " + separators[i] + " ");
    }
    math_input.value = parsed_input;

  // var found_error_in_sign = parsed_input.find((p) => p == "*" || p == "/" );
    var can_eval = false;
    var first_coefficent = "";
    var coefficent_counter = 0;
    var squared_counter = 0;

    for(var i =0; i < parsed_input.length; i++){
      for(var z = 0; z < parsed_input[i].length; z++){
        if(first_coefficent.length > 0){
          if(parsed_input[i][z].includes(first_coefficent)){
            coefficent_counter++;
          }
        }else{
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
      }


    };

    for(var k = 0; k < parsed_input.length; k++){

      if(parsed_input[k].includes("^")){
        squared_counter++;
      }
    }

  var find_if_can_eval = () => {
    var input_cleaned = math_input.value.replace(/[^\d.%&#@$!()*/+^=-_,.;-]/g,'');
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
  console.log(parsed_input);
  console.log(coefficent_counter);

  if(coefficent_counter == 2 && can_eval && squared_counter == 1){
      var split_input = parsed_input.split(" ");
      console.log(split_input);
      var a;
      var b;
      var c;
      for(var counter = 0; counter < split_input.length; counter++){
        var num;
        var coef;
        var squared;
        var squared_num;
        var input = split_input[counter];
        for(var num_counter = 0; num_counter < numbers.length; num_counter++){
          if(input == numbers[num_counter]){
            num = input;
          }
        }
      }


  }

});
