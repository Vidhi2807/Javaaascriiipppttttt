
//Q21

// let n = -100;
// n = Math.abs(n);
// console.log(n);
//  n= String(n);
//  console.log(n,typeof(n));
//  let arr = n.split("");
//  console.log(arr);
//  console.log(arr.length);
 
 
//  let res=String(Math.abs(n)).length
//  console.log(res)
 
//  another method :

// let n =57081;
// let count = 0;
// while(n>0){
    
//     count ++;
//     n = Math.floor(n/10);
// }
// console.log(count);

//Q22

// let n = 123;
// let sum = 0;

// while (n > 0) {
//     sum += n % 10;        
//     n = Math.floor(n / 10);
// }

// console.log(sum);  

// Q23

// let n = 57081;
// let product = 1;

// while (n > 0) {
//     let digit = n % 10;
//     product *= digit;    
//     n = Math.floor(n / 10);
// }

// console.log(product);

// Q24

// let n = -100;     
// let rev = 0;

// let sign = n < 0 ? -1 : 1;  
// n = Math.abs(n);

// while (n > 0) {
//     let digit = n % 10
//     rev = rev * 10 + digit;          
//     n = Math.floor(n / 10);          
// }

// rev = rev * sign; 
// console.log(rev);



// let check = true;
// if(n<0){
//     n = Math.abs(n)
//     check=false;

// }
// n = 922

//Q24 
// by inbuild method :
// let n = 100;
// console.log(Number(String(n).split("").reverse().join("")))

// console.log(Number(String(n) // "922"
// .split("") // ["9","2","2"] //string to array
// .reverse() //["2","2","9"]
// .join(""))) //arr to string - 229 

// another methoddd 
// let n = -100;
// let rev = 0;

// n = Math.abs(n);
// while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
// }
// console.log(rev);  


//Q25 

// let n = 121;
// let original = n;       
// let rev = 0;
// n = Math.abs(n);          
// while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
// }
// if (original < 0) {
//     console.log(false);
// } else {
//     console.log(rev === original);
// }

// using function :
//  function isPalindrome(n) {

//   if (n < 0)
//   return false;
//   let original = n;
//   let rev = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
//   }
//   return rev === original;
// }
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false
// console.log(isPalindrome(0));   // true

//Q26

// let n = 17;
// let isPrime = true;

// if (n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log(isPrime);


// another method of Q25 :
// str = String(n);
// while(i<=j){
//     if(str[i]!=str[j]){
//         return false;
//         i++;
//         j--;
//     }
// }




//Q26

// let n = 17;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// if (count === 2) {
//     console.log(true);   // prime
// } else {
//     console.log(false);  // not prime
// }

//Q27

// function checkPrime(n) {
//     for (let i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function PrintPrime(X) {
//     let res = [];
//     for (let i = 2; i <= X; i++) {
//         if (checkPrime(i)) {
//             res.push(i);
//         }
//     }
//     console.log(res.join(" "));
// }
// PrintPrime(30)


// Q28

// let n =10;
// let res=[];
//    for (let i = 1; i < n; i++) {
//        if(i==1){
//            res.push(0);
//            continue;
//        }
//        if(i==2){
//            res.push(1);
//            continue;
           
//        }
//        res.push(res[i-3]+res[i-2])
//        }
//        console.log(res);

    //    another method 
     method :1
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function printFibonacciSeries(N) {
//   for (let i = 0; i < N; i++) {
//     console.log(fibonacci(i));
//   }
// }

// printFibonacciSeries(7);


//method 3

//   function main(n) {

//     for (let i = 0; i < n; i++) {
//         console.log(fib(i));
//     }

// }

// function fib(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// main(10);

//Q29.

// let a = 20;
// let b  = 100;
//  let smallest =Math.min(a,b);
 
//  for(let i = smallest;i>=1;i--){
//      if((a%i==0)&&(b%i==0)){
//          console.log(i);
//          return;
//      }
//  }

  





