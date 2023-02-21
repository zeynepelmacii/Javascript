//-----------------------String Basics-----------------------
console.log("-----------------------String Basics-----------------------")
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log("A = " + length)


//slice: extracts a part of a string and returns the extracted part in a new string.
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log("B = " + part)
part = text.slice(-12);
console.log("B = " + part)
part = text.slice(-12, -3);
console.log("B = " + part)


//substring: start and end values less than 0 are treated as 0
part = text.substring(7, -2);
console.log("C = " + part)


//replace: replaces a specified value with another value in a string,returns a new string,replaces only the first match.
text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("D = " + newText)
//replaceAll: replaces a specified value with another value in a string,returns a new string
text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("a","XXXXX");
console.log("D = " + text)


//toUpperCase-toLowerCase
text = "Hello World!"
console.log("E = " + text.toLowerCase())
console.log("E = " + text.toUpperCase())


//concat: joins two or more strings
let st1 = "My name"
let st2 = "Zeynep"
console.log("F = " + st1.concat(" ", st2))


//trim: removes whitespace from (both/left/right) side from a string
text = "      Hello World!                "
console.log("G = *" + text.trim() + "*")
console.log("G = " + text.trimStart() + "*")
console.log("G = *" + text.trimEnd() + "*")

//Padding: method pads a string with another string??   
text="Zeynep"
console.log("H = " + text.padStart(4,"x"))
console.log("H = " + text.padEnd(4,"x"))


//charAt: returns the character at a specified index
console.log("I = " + text.charAt(2))
console.log("I = " + text[2])
//charCodeAt: returns the unicode of the character at a specified index
console.log("I = " + text.charCodeAt(2))

//-----------------------String Basics-----------------------
console.log("-----------------------String Template Literals-----------------------")
text = `Hello World!`;
console.log("A = " + text)


//you can use both single and double quotes inside a string
text = `He's often called "Johnny"`;
console.log("B = " + text)


//allows multiline strings
text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log("C = " + text)


//allow variables in strings
let firstName = "John";
let lastName = "Doe";
text = `Welcome ${firstName}, ${lastName}!`;
console.log("D = " + text)


//allow expressions in strings
let price = 10;
let VAT = 0.25;
text = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log("E = " + text)
