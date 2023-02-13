var text = "Zeynep Merceden-Benz'e başvuru yaptı"

console.log("---------------------String Methods---------------------");
console.log("Original: " + text)
console.log("length: " + text.length);
console.log("  -> Slice form 1 to last: " + text.slice(1,text.length-1)); //2. parametre nereye kadar,0lar farklı
console.log("  -> SubString form 7 to 23. char : " + text.substring(7,23)); //2. parametre nereye kadar
console.log("  -> SubString form 7 til 23 char : " + text.substring(7,23)); //2. parametre kaç tane

console.log("  -> Replace : " + text.replace("Merceden-Benz'e","BMW'e")); //2. parametre kaç tane
