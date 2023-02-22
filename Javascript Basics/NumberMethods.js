//----------------Number Basics----------------
console.log("----------------Number Basics----------------")
let x = 123;
console.log("A = " + x.toString());


x = 9.656;
console.log("B = " + x.toFixed(0));
console.log("B = " + x.toFixed(2));
console.log("B = " + x.toFixed(4));
console.log("B = " + x.toFixed(6));


x = 9.656;
console.log("C = " + x.toPrecision());
console.log("C = " + x.toPrecision(2));
console.log("C = " + x.toPrecision(4));
console.log("C = " + x.toPrecision(6));


x = 123;
console.log("D = " + x.valueOf());
console.log("D = " + (123).valueOf());
console.log("D = " + (100+23).valueOf());

//----------------Converting Variables to Numbers----------------
console.log("----------------Converting Variables to Numbers----------------")
console.log("A = " +Number(true));
console.log("A = " +Number(false));
console.log("A = " +Number("10"));
console.log("A = " +Number("  10"));
console.log("A = " +Number("10  "));
console.log("A = " +Number(" 10  "));
console.log("A = " +Number("10.33"));
console.log("A = " +Number("10,33"));
console.log("A = " +Number("10 33"));
console.log("A = " +Number("John"));
console.log("A = " +Number(new Date("1970-01-02")));


console.log("B = " +parseInt("-10"));
console.log("B = " +parseInt("-10.33"));
console.log("B = " +parseInt("10"));
console.log("B = " +parseInt("10.33"));
console.log("B = " +parseInt("10 20 30"));
console.log("B = " +parseInt("10 years"));
console.log("B = " +parseInt("years 10"));


console.log("C = " +parseFloat("10"));
console.log("C = " +parseFloat("10.33"));
console.log("C = " +parseFloat("10 20 30"));
console.log("C = " +parseFloat("10 years"));
console.log("C = " +parseFloat("years 10"));


//----------------Number Object Methods----------------
console.log("----------------Number Object Methods----------------")
//The Number.isInteger() method returns true if the argument is an integer.
console.log("A = " + Number.isInteger(10));
console.log("A = " + Number.isInteger(10.5));

/*
    A safe integer is an integer that can be exactly represented as a double precision number.
    The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/  
console.log("B = " + Number.isSafeInteger(10));
console.log("B = " + Number.isSafeInteger(12345678901234567890));


/*
    Number.parseFloat() parses a string and returns a number.
    Spaces are allowed. Only the first number is returned:
 */
console.log("C = " + Number.parseFloat("10"));
console.log("C = " + Number.parseFloat("10.33"));
console.log("C = " + Number.parseFloat("10 20 30"));
console.log("C = " + Number.parseFloat("10 years"));
console.log("C = " + Number.parseFloat("years 10"));




