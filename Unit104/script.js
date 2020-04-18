var x = 10;
console.log("the value is" + x);
{
    var x = 2;
    console.log("the value is" + x);
}
var x = 10;
console.log("the value is" + x);
{
    let x = 2;
    console.log("the value is" + x);
}
console.log(`${x}`); // `${}` - displays a variable, neat!
let example= "touch,look,feel,hear,see";
test=example.split(','); // split creates an array
console.log(test);

let email="dumb@stupid.com"
test=email.includes('@'); //test to see if the variable includes the specified value
console.log(test);

let data= 95456123154;
console.log(data);
data = String(data);

console.log(data);
console.log(data.length); //displays the length of a given string

const name="bill";
console.log(typeof name); //displays the variable type

const numbers = [1,2,4,5,7,8];
console.log(numbers);
console.table(numbers);

const month= new Array('jan','feb','mar','apr'); //creates an array
console.log(month[2]); //select an array value to display
month[4]="may"; //assign a new array value
console.table(month[4]); //display that array value
month.push("dec"); //another way to add to an array
month.unshift('month'); //adds to the top of an array
console.table(month);

month.pop(); //removes the last element in the array
month.shift(); //removes the first element in the array
month.splice(1,2); //delete selected elements