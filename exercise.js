let count = 0;
let num = 2; // Start with 2, the first prime

while (count < 50) {
  let isPrime = true;

  // Check divisibility from 2 up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Log the prime number if it hasn't been divided by any number
  if (isPrime) {
    console.log(num);
    count++;
  }

  // Move to the next potential prime number (skip even numbers)
  num++;
  while (num % 2 === 0) {
    num++; // Skip even numbers as they are not prime (except 2)
  }
}
