const string = "Infront there is crocodile festival!";

function stringRev(String, separator) {
 return String.split(separator).reverse().join(separator);
}
console.log(stringRev(string,""))
console.log(stringRev(string," "))