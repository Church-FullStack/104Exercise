const array = new Array(10,99,54,77,86); //create an array with values
var total = 0; // create a var for the total and set to 0
for(var i=0; i<array.length; i++) { //create a counting for loop
    total += array[i]; // loop through each item in the array and add the value of the array to total
    var average = total / array.length; // create a var and divide the total by the number of ojbects in the array
}
console.table(total,average); //print the vars to the console for visibility
document.getElementById("output").innerHTML = average; //find the element ID in the HTML and print the variable.