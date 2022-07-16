// program to check if a number is prime or not

// take input from the user
const number = 6;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
  
 // console.log('isPrime : ', isPrime(5));




 let prime = 9;
let isprime = true
if(prime === 1) {
  console.log("not a prime")
} else if(prime >  1) {
  for(let i = 2; i<prime ; i++){
    if(prime%i ===0) {
      isprime=false;
    }
  }
}
isprime