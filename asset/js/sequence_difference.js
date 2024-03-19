
var sequence_choice = document.querySelector("[choice='sequence_difference']");
var numbers = [];

sequence_choice.addEventListener("click",(e)=>{

  var math_input = document.querySelector(".number_value");
  var input_value = math_input.value;
  var parsed_input = math_input.value;
  var separators = ['+', '-', '(', ')', '*', '/', ':', '?'];

  for (var i = 0; i < separators.length; i++) {
    var rg = new RegExp("\\" + " ", "g");
    parsed_input = parsed_input.replace(rg, "");
  }

  var split_input = parsed_input.split(",");
  console.log(split_input);
  console.log(parsed_input);
  FindTheCommonDifferenceAnswer(split_input);


})

const GetCommonDifferenceResults = (firstTerm,commonDifferenceValue,symbol) =>{

  var result = eval(firstTerm + symbol + commonDifferenceValue);
  return result;

}

const IsCommonDifference = (differences,sign) =>{

  var first_difference = differences[0];
  console.log(differences,sign);
  var has_common_difference = {
    common_diff:null,
    sign:null
  };

  for(var i = 1; i < differences.length; i++){

    if(first_difference == differences[i]){
      console.log(differences[i],sign);
      has_common_difference.common_diff = differences[i];
      has_common_difference.sign = sign;
    }else{
      has_common_difference.common_diff = null;
      has_common_difference.sign = null
      break;
    }


  }

  return has_common_difference;

}

const FindTheCommonDifferenceAnswer = (numbers)=>{
console.log(numbers);
  var differences = {
    multiplied:[],
    add:[],
    subtract:[],
    divide:[]
  }

  var eval = [];

  if(numbers.length > 0){

    for(var i = 0; i<numbers.length -1 ;i++){

          var prevNum = parseFloat(numbers[i]);
          if(i > 0){
            prevNum = parseFloat(numbers[ i - 1])
          }
          var counter = i + 1;

          var nextNum = parseFloat(numbers[counter])

          var addDifference = prevNum - nextNum;
          var subDifference = prevNum + nextNum;
          console.log(prevNum,nextNum);
          var multipliedDifference = nextNum  / prevNum;
          var dividedDifference = prevNum / nextNum;

          differences.add.push(addDifference);
          differences.subtract.push(subDifference);
          differences.multiplied.push(multipliedDifference);
          differences.divide.push(dividedDifference);


    }

  }

  var common_add_difference = IsCommonDifference(differences.add,"+")
  var common_sub_difference = IsCommonDifference(differences.subtract,"-")
  var common_divide_difference = IsCommonDifference(differences.divide,"/")
  var common_multiply_difference = IsCommonDifference(differences.multiplied,"*");
  var answer;
console.log(common_sub_difference,differences);
  if(common_add_difference.common_diff){
    answer = "Common Difference: " + common_add_difference.sign + " "+Math.abs(common_add_difference.common_diff);
  }
  if(common_sub_difference.common_diff){
    answer = "Common Difference: " + common_sub_difference.sign + " "+Math.abs(common_sub_difference.common_diff);

  }
  if(common_divide_difference.common_diff && !common_multiply_difference.common_diff){
    answer = "Common Difference: " + common_divide_difference.sign + " "+Math.abs(common_divide_difference.common_diff);

  }
  if(common_multiply_difference.common_diff){
    answer = "Common Difference: " + common_multiply_difference.sign + " "+Math.abs(common_multiply_difference.common_diff);
  }else{
    answer = "No Match Found";
  }

  PopulateAnswer(answer);

  EnterAndExitModal();

}
