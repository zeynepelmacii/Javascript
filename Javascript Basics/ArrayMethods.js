//-------------------------------BASICS-------------------------------//
console.log("-------------------------------BASICS-------------------------------")
//array to string v1
const fruits = ["apple", "orange", "banana", "watermelon", "strawberry"]
console.log("A = " + fruits.toString());
//My favourite fruits are apple,orange,banana,watermelon,strawberry

//array to string v2
console.log("B = " + fruits.join(", "));

//pop: removes the last element from an array, returns the value that was "popped out"
console.log("C = " + fruits.pop());

//push: adds a new element to and of an array, returns the new array length:
console.log("D = " + fruits.push("blueberry"));
console.log("D = " + fruits);

//shift: removes the first array element, shift all the others to lower index, returns the value that was "shifted out"
console.log("E = " + fruits.shift());

//unshift: adds a new element to an array (at the beginning), returns the new array length
console.log("F = " + fruits.unshift("kiwi"))
console.log("F = " + fruits.unshift("apple"))

/*so far our array is like this
[ 'apple', 'kiwi', 'orange', 'banana', 'watermelon', 'blueberry' ]*/
//and the lenght of out array is
console.log("G = " + fruits.length);

//4. element in our array is
console.log("H = " + fruits[3]);
//element at index 4 in our array is
console.log("H = " + fruits[4]);

//concat: a new array by merging (concatenating) existing arrays, It always returns a new array.
const myGirls = ["Pheobe", "Rachel"];
const myBoys = ["Ross", "Joey", "Chandler"];
const arr3 = ["Carol", "Mike"];
const myChildren = myGirls.concat(myBoys,arr3, "Emma");
console.log("I = " + myChildren.join(" - "))

//splice: dd new items to an array(where new elements should be added, how many elements, rest:define the new elements)
myGirls.splice(2,2,"Janice","Monica")
console.log("J = " +myGirls)


//slice: slices out a part of an array, creates new array apart from original, original keeps the same
const myNewGirls = myGirls.slice(3)
console.log("K = " + myNewGirls)
const myNewGirls2 = myGirls.slice(-3)
console.log("K = " + myNewGirls2)

//-------------------------------SORTING-------------------------------//
console.log("-------------------------------SORTING-------------------------------")
//we still move on on the : 9.0 = Pheobe - Rachel - Ross - Joey - Chandler - Carol - Mike - Emma
console.log("A = " + myChildren.sort())
console.log("A = " + myChildren.reverse())

//ascending order
const numbers = [1,8,4,9,2,5,3,6,10,7]
console.log("B = " + numbers.sort(function(a, b){return a - b}))

//descending order
console.log("C = " + numbers.sort(function(a, b){return b - a}))

//random sorting
console.log("D = " + numbers.sort(function(){return 0.5 - Math.random()}))

//min value in array
numbers.sort(function(a, b){return a - b})
console.log("E = " +numbers[0]);

//max value in array
numbers.sort(function(a, b){return b - a})
console.log("F = " +numbers[0]);

//-------------------------------ITERATION-------------------------------//
console.log("-------------------------------ITERATION-------------------------------")
//for string arr: 9.0 = Pheobe - Rachel - Ross - Joey - Chandler - Carol - Mike - Emma
console.log(myChildren.join(" - "))
const numberForIt = [2,11,20,13,5,18,15,3,6,9,10] //this is for number
console.log(numberForIt.join(" - "))



//forEach: Calls a function once for each array element
let txt = "";
numberForIt.forEach(myFunction1);
console.log("A = " + txt)
function myFunction1(value) {
  txt += value + " // " ; 
}

//map: creates a new array by performing a function on each array element, does not change the original array.
console.log("B = " + numberForIt.map(myFunction2).join(" // ")) 
function myFunction2(value) {
    return value * 2;
  }

//filter: Creates a new array with all array elements that passes a test.
console.log("C = " + numberForIt.filter(function(value){return value>10})) 

//reduce:runs a function on each array element to get (reduce it to) a single value. left->right
console.log("D = " + numberForIt.reduce(function(a,b){return a+b}))

//reduceRight: same thing as reduce but direction is from left to right
console.log("E = " + myChildren.reduceRight(function(a,b){return a+b})) 

//every:checks if all array values pass a test.
console.log("F = " + numberForIt.every(function(value){return value<=20})) 

//some:checks if some array values pass a test, return true or false
console.log("G = " + numberForIt.some(function(value){return value>40})) 

//indexOf: searches an array for an element value and returns its position.
console.log("H = " + myChildren.indexOf("Rachel")) 

//lastIndexOf: returns the last occurrence of the specified element.
console.log("I = " + myChildren.lastIndexOf("Mike")) 

//find:returns the value of the first array element that passes a test function.
console.log("J = " + numberForIt.find(function(value){return value>18 }))