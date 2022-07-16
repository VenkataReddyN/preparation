//armstrong number.
let n = 153;
let temp = n;
let suma = 0;
while(temp > 0) {
  let remainder = temp % 10;
  suma = suma + remainder * remainder * remainder;
  temp = parseInt(temp/10);
}

console.log(suma)

//stored procedures
//nullif
//stateless.
//how node js handle multiple requests.
//to connect to db.
//oAuth
//xml data related question


//Find closest value to the given number, from the given array.
//Given an array of sorted integers and find the closest value to the given number. The array may contain duplicate values and negative numbers.
//Example : Array : 2,5,6,7,8,8,9 Target number : 5 Output : 5
//Target number : 11 Output : 9

// How to check whether a number is an Armstrong or not?
// If we input a random number, try to find the logic to check whether that number is an Armstrong or not.
// An Armstrong number is a 3 digit number for which sum of cube of its digits is equal to the number itself. 
// An example of Armstrong number is 153 as 153= 1+ 125+27 which is equal to 1^3+5^3+3^3. One more example of the Armstrong number is 371 because it is the sum of 27 + 343 + 1 which is equal to 3^3 + 7^3 + 1^3