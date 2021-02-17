//====JS shortcut Ternary====//

//normal way
const money = 150;
let food;
if(money > 100){
    food = 'Pizza';
}
else{
    food = 'Chicken';
}
console.log(food);


//=Ternary Operator=//
const money2 = 200;

//variable = condition ? true value : false value;
let food2 = money2 > 100 ?  'Biryani' : 'Kacchi';  //Shortcut method for if-else conditions. Its called ternary operator
console.log(food2);
//=End Ternary Operator=//

//====End JS shortcut Ternary====//




//String to Number
const number = +'45';        // + sign can converts a string into a number
console.log(number);
console.log(typeof number);
//End

//Number to String
const number2 = 45 + '';     // '' sign can converts a string into a number
console.log(number2);
console.log(typeof number2);
//End


//Default Parameter
function add(num1, num2 = 5){
    return num1 + num2;
}
const result = add(6);
console.log(result);
//End