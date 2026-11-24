// Q11
for (let i = 1; i <= 10; i++) console.log(i);

// Q12
function print1ToN(N) {
  for (let i = 1; i <= N; i++) console.log(i);
}

// Q13
function even1ToN(N) {
  for (let i = 1; i <= N; i++) if (i % 2 === 0) console.log(i);
}

// Q14
function odd1ToN(N) {
  for (let i = 1; i <= N; i++) if (i % 2 !== 0) console.log(i);
}

// Q15
function sum1ToN(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) sum += i;
  return sum;
}

// Q16
function product1ToN(N) {
  let product = 1;
  for (let i = 1; i <= N; i++) product *= i;
  return product;
}

// Q17
function table(n) {
  for (let i = 1; i <= 10; i++) console.log(n * i);
}

// Q18
function countDivBy3(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) if (i % 3 === 0) count++;
  return count;
}

// Q19
function factorial(N) {
  let fact = 1;
  for (let i = 1; i <= N; i++) fact *= i;
  return fact;
}

// Q20
function multiplesOf7(N) {
  for (let i = 1; i <= N; i++) console.log(7 * i);
}



// Q33. 
// Inbuild method :

//  let input = " Hello World ";
 
// //  let vowel = "AEIOUaeiou"
//  let count = 0;
//  for (let i = 0 ; i < input.length;i++){
//      if(vowel.includes(input[i])){
//          count ++
//          console.log(input[i]);
//      }
//  }
//  console.log(count)
 
//   Another method :

// let input = "HELLO world ";
// let count =0;
// let str = input.toLowerCase();
// for ( let i = 0 ; i <str.length ; i++){
//     if ( str[i]=="a" ||  str[i]=="e" ||  str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         count ++;
//     }
// }
// console.log(count)

//  2nd method :
//  let obj : {
//      a:1  
//      e:1
//      i:1
//      o:1
//      u:1
//      A:1  
//      E:1
//      I:1
//      O:1
//      U:1
    
//  }
//  let str  = "Hello WORLD ";
//  let count = 0 ;
//  for ( let i =0 ; i < str.length;i++){
//      if(obj[str[i]]!=1){
//          count ++;
//      }
//      console.log(count)
//  }
 
 //Q34.
 
//  let input = "Hello World";

// let str = input.toLowerCase();
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);

//     if ((ascii >= 97 && ascii <= 122)) { 
//         if ((ascii == 97) || (ascii == 101) || (ascii == 105) || (ascii == 111) || (ascii == 117)) {
//             continue;     
//         }
//         else {
//             count++;     
//         }
//     }
// }

// console.log(count);


// // Q35.
//  let str = " Hello World ";
 
//  for (let i= 0 ; i <str.length;i++){
//      let ascii = str.charCodeAt(i);
//      let char = String.fromCharCode(ascii);
//      console.log(char)
//  }

//  another method :

// let str = "Hello World ";
// let res = "";
// for (let i = 0 ; i < str.length ; i ++){
//     let ascii = str.charCodeAt(i);
//     if ( ascii >=97&&ascii<=122){
//         ascii = ascii - 32;
//     }
//     let char = String.fromCharCode(ascii);
//     res = res+char;
// }
// console.log(res);

//q36
// let str = "Hello World ";
// let res = "";
// for (let i = 0 ; i < str.length ; i ++){
//     let ascii = str.charCodeAt(i);
//     if ( ascii >=65&&ascii<=90){
//         ascii = ascii + 32;
//     }
//     let char = String.fromCharCode(ascii);
//     res = res+char;
// }
// console.log(res);


// Q37.
// let str = "hello";
// let reversed = str.split("").reverse().join("");

// console.log(reversed);   // "olleh"

//Q38

// let str = "racecar";
// let string2=str.toLowerCase();
// let reversed = "";
// let actual= string2;
// for (let i = string2.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// if(actual===reversed){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome");
// }


//Q39

// function occurence(string){
//     let count=0;
//     for(let i=0;i<string.length;i++){
//         if(string[i]==='a'){
//             count++;
//         }       
// }
//     console.log(count);

// }
// occurence("vidhi");
// occurence("devanshi");



// Q40

// let str = "hello world";
// let result = str.split(" ").join("");
// console.log(result);  

//another method using for loop :
// let str = "Vidhi Here"

// let res = "";
// for (let i = 0 ; i <str.length; i++){
//     if (str[i]==" "){
//         continue;
//     }
//     else{
//         res = res+str[i];
//     }
// }
// console.log(res);

//q41.
// let str = "Hello     world";
// let count = 0;

// for (let i = 0 ; i <str.length;i++){
//     if(i==0&&str[i]!=" "){
//         count ++
//     }
//     else if (str[i]!= " "&& str[i-1]==" "){
//         count ++
//     }
// }

// console.log(count); 

//Q42.
// let str = "Answar QUASTIONS";
// let result = str.replaceAll('a', 'e');
// console.log(result); 

// another method using for loop :
// let res = "";
// for (let i = 0 ; i < str.length;i++){
//     if (str[i]=="a"|| str[i]=="A"){
//         res = res +"e"
//     }
//     else {
//         res = res +str[i];
//     }
// }
// console.log(res)

//Q43.
// let str = "hallo";
// let ch = "a";

// console.log(str.includes(ch));
//another method :


// let str = "hello";
// let ch = "e";
// for (let i = 0 ;i<str.length;i++){
//     if(str[i]==ch){
//         console.log(true);
//         return;
//     }
// }
// console.log(false)


//  //Q44.
//  function compareStrings(str1, str2) {
//     return str1 === str2;
// }

// console.log(compareStrings("hello", "hello")); 
// console.log(compareStrings("Hello", "hello")); 
// console.log(compareStrings("js", "js "));  

//q45.

// let str = "abc123";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9') {
//         count++;
//     }
// }

// console.log(count);

// //Q46.
// let str = "HELLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'A' && str[i] <= 'Z') {
//         count++;
//     }
// }

// console.log(count);

//another method :
// let count2 = 0;

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);
//     if (ascii >= 65 && ascii <= 90) {
//         count2++;
//     }
// }

//Q47.
// let str = "HeLLo";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//         count++;
//     }
// }

// console.log(count);

//Q48.

// let str = "JavaScript";
// let res = "";

// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//         res += str[i];
//     }
// }

// console.log(res);

//49.
// let str = "My Bday in 2007";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= '0' && str[i] <= '9')) {
//         res += str[i];
//     }
// }

// console.log(res);  

//Q50.
// let str = "Js 101";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch >= 'a' && ch <= 'z') { 
//         result += ch.toUpperCase();  
// } 
//     else if (ch >= 'A' && ch <= 'Z') { 
//         result += ch.toLowerCase();   
//     } 
//     else {
//         result += ch; 
//     }
// }

// console.log(result);


//another method :

// for (let i = 0 ; i <str.length;i++){
//     if(str[i]==str[i].toUpperCase()){
//         res3 = res3+str[i].toLowerCase();
//     }
//     else {
//         res3 = res3 + str[i].toUpperCase();
//     }
// }
// console.log(res3);


// another method :

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);
//     if (ascii >= 65 && ascii <= 90) {
//         ascii = ascii + 32;
//     }
//     else if (ascii >= 97 && ascii <= 122) {
//         ascii = ascii - 32;
//     }
//     res2 = res2 + String.fromCharCode(ascii);
// }

// console.log(res2);



// //Q51.
// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(...arr);
// console.log(arr.join(" "));


//Q52.

// let arr = [1, 2, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);  

// //Q53.
// let arr = [4, 8, 12, 16];

// let max = arr[0];   

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);
// another method :
// let res = Math.max(...arr);
// console.log(res);

//Q54.


// let arr = [3, 7, 2, 9];

// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// //another method 

// let res = Math.min(...arr);
// console.log(res);

// console.log(min);  

//Q55.
// let arr = [1, 2, 3, 4, 5, 6];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);  

//Q56.
// let arr = [1, 2, 3, 4, 5];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++;
//     }
// }

// console.log(count);  

//Q57.

// let arr = [-1, 0, 5, 3, -2];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }

//Q58.
// let arr = [-1, 0, 5, 3, -2];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//     }
// }

//59.

// let arr = [5, 12, 7, 20, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         console.log(arr[i]);
//     }
// }

//Q60.
// let arr = [1, 2, 3, 4];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let average = sum / arr.length;

// console.log("Average =", average);

//Q61.
// let arr = [1, 2, 3];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
// }

// console.log(res);

//Q62.
// let arr = [1, 2, 3];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * arr[i]);
// }

// console.log(result);

// //  Q63.
// function reverseArray(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(reverseArray([1, 2, 3]));   

// //another method :
// function reverseArray(arr) {
//     return arr.slice().reverse(); 
// }
// console.log(reverseArray([1, 2, 3]));      
// //another method :

// let arr = [1,2,3]
// let rev = new array (...arr);
// console.log(rev.reverse());

// //another method :
// let i = 0;
// let j = arr.length - 1;

// while (i <= j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
// }

// console.log(arr);




//Q64.
// function copyArray(arr) {
//     let copy = [];
//     for (let i = 0; i < arr.length; i++) {
//         copy.push(arr[i]);
//     }
//     return copy;
// }

// console.log(copyArray([1, 2, 3])); 

// //another method :
// function copyArray(arr) {
//     return arr.slice();
// }

//Q65.



// function Value(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(Value([1, 2, 3], 2));  


//another method:
// let arr = [ 1,2,3,4,5,6];
// let value = 5 ;
// console.log (arr.includes(value));




//Q66.

// let arr = [1,2,3,4,5];
// let index = 11;
// let present = true ;
//   for (let i = 0; i < arr.length; i++) {
//      if (arr[i] === index) {
//         console.log(i);
//         break;
//      }
//      else if (i == arr.length-1){
//       console.log(-1);
//      }
//     }
    //another method :

    // console.log(arr.indexOf(value));


// //Q67.

// let arr = [10, 28, 28, 19, 28];
// let value = 28

// ;
// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }

// console.log(count); 

//another method :

// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// if(obj[arr[i]]!=undefined){
//     obj[arr[i]]++
// }
// else{
//     obj[arr[i]]=1;
// }
// }
// console.log(obj[value]);



// q68.


// let arr = [ 1,2,3,4,5];

// for (let i = 0 ; i < arr.length;i++){
//     if(arr[i]<arr[i-1]){
//         console.log("array is not sorted ");
//         return;
//     }
// }
// console.log("array is sorted ");

//another method :

// let arr = [1, 2, 3, 4];
// let sorted = true;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         sorted = false;

//     }
// }

// console.log(sorted);   


//Q69.

// let arr = [ 1,2,3,4,5,6,7];
// let largest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);

// let slargest = Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>slargest && arr[i]<largest){
//         slargest=arr[i];
//     }
// }
// console.log(slargest)


//another method : 
// let arr = [1, 2, 24, 3, 43, 4, 34, 34, 3, 43, 3];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     }
//     else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(secondLargest);

//70.

// let arr = [1, 2, 24, 3, 43, 4, 34, 34, 3, 43, 3];

// let smallest = Infinity;
// let secondSmallest = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         secondSmallest = smallest;
//         smallest = arr[i];
//     }
//     else if (arr[i] < secondSmallest && arr[i] > smallest) {
//         secondSmallest = arr[i];
//     }
// }

// console.log(secondSmallest);

// //Q71.
// let res = 
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         res.push(arr[i])
//     }
// }

// console.log(res);

// let res2=arr.filter((value)=>{
//     return value%2!=0;
// })
// console.log(res2);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr.splice(i,1);
//         i=i-1
//     }
// }
// console.log(arr)



//Q72.
// let arr = ["a", "a", "b"];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         if (arr[i] != arr[i + 1]) {
//             res.push(arr[i]);
//         }
//     } 
//     else if (arr[i] != arr[i - 1]) {
//         res.push(arr[i]);
//     }
// }

// console.log(res);

//another method :
// let arr = [1,2,2];

// let i = 0 ;
// for (let i = 0;i<arr.length;i++){
//     if (arr[i]==arr[i+1]){
//         arr.splice(i,1);
//         i = i-1;
//     }
// }
// console.log(arr);

//Q73.

// let arr1 = [1,2,3,4];
// let arr2=[4,2,1];
// //method1
// let res1=[...arr1,...arr2];
// console.log(res1);
// //method2
// let res2 = arr1.concat(arr2);
// console.log(res2);
// //method3
// let res3 = [];
// for (let i = 0 ; i <arr2.length;i++){
//     res3.push(arr2[i])
// }
// console.log(res3)


//Q89.

// let arr = ["hi", "hello", "a"];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i].length);
// }

// console.log(result);

//Q74.
// let arr1 = [1, 1,1,1, 2];
// let arr2 = [1, 2, 2];
// let result = [];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//         result.push(arr1[i]);
//     }
// }

// console.log(result); 


//Another method :

// let arr1 = [1,2,3,4,5,];
// let arr2 = [1,2,3,4];

// let res = [];
// arr1 = arr1.sort((a,b)=>a-b)
// arr2=arr2.sort((a,b)=>a-b)

// let i = 0;
// let j = 0 ;
// while(i<arr1.lenght && j<arr2.length){
//     if(arr1[i]==arr2[j]){
//         res.push(arr1[i]);
//         i++;
//         j++;
//     }
//     else if(arr1[i]>arr2[j]){
//         j++
//     }
//     else{
//         i++
//     }
// }
// console.log(res)

//Q75.
// let arr = [1, 2, 3, 4];


//     let num = arr.pop();  
//     arr.unshift(num);     

// console.log(arr); 


//Q87.

// let number = 20;
// let root = Math.sqrt(num);

// if (root*root ==number){
//     console.log("perfect square ");
// }
// else {
//     console.log("not perfect square ");
// }

//from another method :

// for ( let i = 1 ; i < num ; i++){
//     if (i*1== num ){
//         console.log("Perfect square");
//         return ; 
//     }
// }









//Q88.

// let num = 123;   
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + (digit * digit * digit);
//     temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//another method :
// let arr = String(number).split("");
// let res = 0 ;
// for (let i = 0 ;i<arr.length;i++){
//     res = res+ Number(arr[i])**arr.length;
// }
// if (number === res) {
//     console.log(true);
// } else {
//     console.log(false);
// }




//Q89.

// let arr = ["hi" , "hello" , "a"]
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i].length);
// }

// console.log(result);

//another method :

// function length(str){
//     let count =0;
//     while(str[count]){
//         count ++
//     }
//     return count ;
// }

// function main (arr){
//     let n = length (arr);
//     let res = [];
//     for(let i = 0 ; i <n ; i++){
//         res.push(length(arr[i]));
//     }
//     console.log(res);
// }

// main (["Hello" , "he" , "the"]);

//Q90.

// function length(str) {
//     let count = 0;
//     while (str[count]) {
//         count++;
//     }
//     return count;
// }

// function main(arr) {
//     let longest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (length(arr[i]) > length(longest)) {
//             longest = arr[i];
//         }
//     }

//     console.log(longest);
// }

// main(["Hello", "he", "the"]);

// without in build method :

// function main(arr) {
//     let n = length(arr);
//     let res = "";
//     let maxLength = 0
//     for (let i = 0 ; i <n ;i++){
//         let stringLength=length(arr[i]);
//         if (stringLength>maxLength){
//             res = arr[i];
//             maxLength=stringLength
//         }
//     }
//    console.log(res);
// }

// main(["Hello", "he", "the"]);



// //another method :

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//         longest = arr[i];
//     }
// }

// console.log(longest); 



// // Q91.
// let arr = [1, 2, 2, 3];
// let freq = {};

// for (let num of arr) {

// if (freq[num]==undefined){
//     freq[num]=1
// }
// else{
//     freq[num]++
// }
// }


// console.log(freq)

//   if (freq[num]) {
//     freq[num]++;
//   } else {
//     freq[num] = 1;
//   }
// }

// console.log();


//  Q92.

// let arr = [1, 2, 2, 3];
// let freq = {};

// for (let num of arr) {

// if (freq[num]==undefined){
//     freq[num]=1
// }
// else{
//     freq[num]++
// }
// }
// let maxCount = 0;
// let maxValue = 0;
// for (let num in freq){
//     if (obj[n]>maxValue){
//         maxCount = n;
//         maxValue
//     }
// }

// console.log(freq)

//another method :

// let arr = [1, 2, 2, 3];
// let freq = {};
// let maxCount = 0;
// let mostFrequent;

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];

//   if (freq[num]) {
//     freq[num]++;
//   } else {
//     freq[num] = 1;
//   }

//   if (freq[num] > maxCount) {
//     maxCount = freq[num];
//     mostFrequent = num;
//   }
// }

// console.log(mostFrequent);



//Q93.

// let str = "hello"; 
// let v = {};     

// for (const char of str) {
//   if (v[char]) {
//     v[char] += 1;
//   } else {
//     v[char] = 1;
//   }
// }

// console.log(v); 


//Q94.
// let students = [
//   { name: "Parth", marks: 50 },
//   { name: "Vidhi", marks: 80 },
//   { name: "Devanshi", marks: 70 }
// ];

// let topper = null;

// for (let student of students) {
//   if (topper === null || student.marks > topper.marks) {
//     topper = student;
//   }
// }

// console.log(topper.name);     

//Q95.
// let products = { apple: 50, banana: 20, mango: 30 };
// let total = 0;

// for (let key in products) {
//   total += products[key];
// }

// console.log(total); 



//Q96.
// let marks = { math: 80, science: 90, english: 70 };

// let sum = 0;
// let count = 0;

// for (let subject in marks) {
//   sum += marks[subject];
//   count++;
// }

// let average;

// if (count == 0) {
//     average=0;
// } else {
//   average = sum / count;
// }

// console.log(average); 

// //Q97.
// let obj = { a: 1, b: 2, c: 3 };
// let keys = [];

// for (let key in obj) {
//   keys.push(key);
// }

// console.log(keys)

// //Q98.
// let obj = { name: "vidhi", age: 18 };
// let values = [];

// for (let key in obj) {
//   values.push(obj[key]);
// }

// console.log(values); 

//Q99.
// let obj3 = { a: 1, b: 2, c: 3 };
// let countPairs = 0;

// for (let key in obj3) {
//   countPairs++;
// }

// console.log(countPairs); 

//Q100.
// let people = [
//   { name: "A", age: 17 },
//   { name: "B", age: 20 },
//   { name: "C", age: 18 }
// ];

// let adults = [];

// for (let person of people) {
//   if (person.age > 18) {
//     adults.push(person);
//   }
// }

// console.log(adults); 


// Q101. 
// function square(n) {
//   return n * n;
// }


// // Q102. 
// function sum(a, b) {
//   return a + b;
// }

// // Q103. 
// function greet(name) {
//   return `Hello, ${name}`
// }

// // Q104. 
// function isEven(n) {
//   return n % 2 === 0;
// }

// // Q105. 
// function isOdd(n) {
//   return n % 2 !== 0;
// }



// // Q106. 
// function Between(n) {
//   return n >= 1 && n <= 100;
// }

// // // Q107. 
// function isGreater(a, b) {
//   return a > b;
// }

// // Q108. 
// function LengthGreaterThan5(str) {
//   return str.length > 5;
// }


// // Q109. 
// function firstChar(str) {
//   return str[0];
// }

// // Q110. 
// function lastChar(str) {
//   return str[str.length - 1];
// }


// //Q111.
// function longer(str1,str2){
//     if(str1.length>str2.length){
//         return str1;
//     }
//     else if(str2.length>str1.length){
//         return str2;
//     }
//     else{
//         return str1;
//     }
// }

// //Q112.
// function averageOfThree(a, b, c) {
//   return (a + b + c) / 3;
// }


// Q113.
// function signOfNumber(n) {
//   if (n > 0) return "positive";
//   if (n < 0) return "negative";
//   return "zero";
// }

// //another method :
// function sign(n){
//     return (n==Math.abs(n))
// }
// //Q114.

// function canVote(age) {
//   return age >= 18;
// }

// //Q115.
// function hrToMin(hours) {
//   return hours * 60;
// }

// //Q116.
// function minToSec(minutes) {
//   return minutes * 60;
// }

//Q117.
// function celsiusToFahrenheit(c) {
//   return (c * 9 / 5) + 32;
// }

// celsiusToFahrenheit(35)

// //Q118.
// function fahrenheitToCelsius(f) {
//   return (f - 32) * 5 / 9;
// }



// // Q119.
// function triangleArea(base, height) {
//   return 0.5 * base * height;
// }


// // Q120.
// function circleArea(r) {
//   return Math.PI * r * r;
// }


//Q121.
// function isMultipleOf10(n) {
//   return n % 10 === 0;
// }

// //Q122.'
// function minOfTwo(a, b) {
//   return a < b ? a : b;
// }
// //
// // Q123.
// function minOfThree(a, b, c) {
//   return Math.min(a, b, c);
// }


// Q124.
// function printDown(n) {
//   let result = "";
//   for (let i = n; i >= 1; i--) {
//     result += i + " ";
//   }
//   return result.trim();
// }


// //Q125.
// function sumEven(n) {
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// //Q126.
// function sumOdd(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// //Q127.
// function countDiv2or3(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 || i % 3 === 0)
//        count++;
//   }
//   return count;
// }
// //Q128.
// function countDiv2and5(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 && i % 5 === 0)
//        count++;
//   }
//   return count;
// }

// //Q129.
// function isperfect(n){
//   let sum = 0;
//   for (let i = 1; i <= n ; i++) {
//     if (n % i === 0) 
//   sum += i;

// }
// return sum == n && n!=0;
// }

// isperfect(20);

// //Q130.
// function coPrime(a,b){
//   let range = Math.min(a,b);
//   let GCD;
//   for(let i = range; i >=1;i--){
//     if(a%i==0 && b%i==0){
//       GCD = i
//     }
//   }
//   console.log(GCD==1 ? "coPrime" : "Not a Co Prime");
// }
// coPrime(8,15);

//Q131


// function digit(n){
//   let arr = String(n).split("");
//   let res = Math.max(...arr);
//   console.log(res)
//   //another mwthod :
//   let max = 9;
//   while(n>0){
//     max=Math.max(max,n%10);
//     n = Math.floor(n/10);
//   }
//   console.log(max)
// }
// digit(4365)

// //Q132
// function digit(n){
//   let count = 0 ;
//    while(n>0){if(n%2==0 && n%10!=0){
//     count++;
//    }
//     n = Math.floor(n/10);
//   }
//   console.log(count)
// }
// digit(4305)


// //Q135.

// function absolute(a,b){
//   return Math.abs(a-b);
// }
// console.log(absolute(10,-5))

//Q136


// function digit(n){
//   let count = 0 ;
//   while(n>0){
//     count ++;
//     n = Math.floor(n/10);
//   }
//   console.log((count))
// }

//  Q137

// function square(n){
//   let sum = 0 ;
//   for (let i = 0 ; i<n ; i++){
//     sum = sum+i**3;
//   }
//   console.log(sum);
// }
// square(10);

// //Q138.
// function cube(n){
//   let sum = 0 ;
//   for (let i = 0 ; i<n ; i++){
//     sum = sum+i**3;
//   }
//   console.log(sum);
// }
// cube(8);

// //Q139.
// function Harshad(n){
//   let temp = n ;
//   let sum = 0 ;
//   while (temp>0){
//     sum = sum + temp %10;
//     temp = Math.floor(temp/10);
//   }
//   console.log(n%sum==0);
// }
// Harshad(10);

//Q140.

// function number(n) {
// let length = String(n).length
//     let square = n*n;
//     let lastDigit = square%(10**length);
//     if(lastDigit==n){
//       console.log("Automorphic num")
//     }
//     else{
//       console.log("not a automorphicnum");
//     }
// }
  
// number(5); 

//Q141.

// function middle(str){
//   let length = str.length;
//   let mid = Math.floor(length/2)
//   if(length%2==0){
//     HTMLFormControlsCollection.log(str[mid-1]+str[mid]);
//   }
//   else{
//     console.log(str[mid]);
//   }

// }

// middle("Hell");

//Q142.

// function check(str){
//   if(str[0]=="A"||str[0]=="a"){
//     console.log(true)
//   }
//   else{
//     console.log(false);
//   }
// }
// check("Abc");
// check("Abc");

// //Q144.

// function space(str){
//   let count= 0 ;
//   for(let i = 0 ; i < str.length ; i++){
//     if(str[i]==" "){

//     }
//   }
//   console.log(count);
// }
// space("Hellooo worlddddd ")



// //Q145.
// function string(str) {
//   return str.trim();
// }

// function remove(str){
//   let i = 0 ;
//   let j = str.length-1;

//   while (str[i]==" "){
//     i++
//   }
//   while(str[j]==" "){
//     j--
//   }
//   let res = "";
//   for(let k = i ;k<=j;k++){
//     res = res+str[k];
//   }
//   console.log(res);
// }
// remove("  Hello World   ");



// //Q146.
// function replace(str) {
//   return str.replaceAll("?", "!");
// }
//anothermethod:

// let res ="";
// for(let i = 0 ; i<str.length;i++){
//   if(str[i]=="?"){
//     res= res+"!";
//   }
//   else{
//     res = res+str[i];
//   }
// }
// console.log(res);
// replace("Hello??")

// //Q147.
// let a ="Heyy ";
// let b = "Vidhi";
// console.log(a,b)

//Q148.
// function Word(str) {
//   let num = str.split(" ");
//   return parts[0];
// }

//another method :

// let res = "";
// let check = true;
// for(let i = 0 ; i<str.length;i++){
//   if(str[i]!=" "){
//     check = false;
//     res = res+str[i];
//   }
//   else if (check==true){
//     continue;
//   }
//   else{
//     break;
//   }
// }

// console.log(res);


// firstword("    Helllo world ")




// //Q149.
// function lastWord(str) {
//   let parts = str.split(" ");
//   return parts[parts.length - 1];
// }

// lastWord("Hello world");    

// //another method :
// let res = "";
// let check = true;
// for(let i = 0 ; i<str.length;i++){
//   if(str[i]!=" "){
//     check = false;
//     res = res+str[i];
//   }
//   else if (check==true){
//     continue;
//   }
//   else{
//     break;
//   }
// }
// let res2="";
// for (let i = res.length-1;i>0;i--){
//   res2+=res[i];
// }
// console.log(res2);


// firstword("    Helllo world ")

//Q150.
// function longestWord(str) {
//   let words = str.split(" ");
//   let max = 0;

//   for (let word of words) {
//     if (word.length > max) {
//       max = word.length;
//     }
//   }
//   return max;
// }

// longestWord("I love coding");     


//another method :

// function longestWord(str){
//   let res = [];
//   let count = 0 ;
//   for (let i = 0 ;i<str.length;i++){
//     if (i==str.length-1 && str[i]!=" "){
//       count ++;
//       res.push(count);
//     }
//     else{
//     count++
//   }
//   } 
  
// console.log(Math.max(...res));
// }

// longestWord("herwegoo !!")



// //Q151.
// function shortestWord(str) {
//   let res = [];
//   let count = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i === str.length - 1 && str[i] !== " ") {
//       count+=str[i];
//       res.push(count);
//     }
//     else if (str[i] === " ") {
//       if (count.length > 0) {
//         res.push(count);
//         count = "";
//       }
//     }
//     else {
//       count+=str[i]/
// //Q152.

// function countThe(sentence) {
//   let words = sentence.toLowerCase().split(" ");
//   let count = 0;

//   for (let word of words) {
//     if (word === "the") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countThe("the cat and the dog")); 

//Q152.

// function countThe(sentence) {
//   let count = 0;
//   let word = "";

//   for (let i = 0; i <= sentence.length; i++) {

//     if (sentence[i] === " " || i === sentence.length) {

//       if (
//         (word === "the") ||
//         (word === "The") ||
//         (word === "THE")
//       ) {
//         count++;
//       }

//       word = ""; 
//     } 
//     else {
//       word = word + sentence[i]; 
//     }
//   }

//   return count;
// }

// console.log(countThe("the cat and the dog"));


// let str = "the cat and dog "
// let count = 0 ;
// for(let i = 0 ;i<str.length;i++){
//   if((i==0||str[i-1]==" ")&&str[i]=="t"&&str[i+1]=="h"&&str[i+2]=="e"
//     &&((i==str.length-1)||str[i+3]=="")){
//       count ++;
//     }
// }
// console.log(count)


// //Q153.
// function Vowel(str) {
//   let vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(Vowel("hello"));      



// Q 154.
// let str ="12334h32"
// let count = 0;
// for(let i=0;i<str.length;i++){
//     if(str[i]<=9 && str[i]>=0){
//         count++
//     }
// }
// if(count==str.length){
//     console.log("True");
// }
// else{
//     console.log("False")

// }



// 155.
// let str = "asd1fg";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (
//         (str[i] >= 'A' && str[i] <= 'Z') ||
//         (str[i] >= 'a' && str[i] <= 'z')
//     ) {
//         count++;
//     }
// }

// if (count === str.length) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// 156.
// let str = "hi";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//     res =res+ str[i] + str[i];
// }

// console.log(res);



// 157.
// let str = "hello@123!";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (
//         (ch >= 'a' && ch <= 'z') ||
//         (ch >= 'A' && ch <= 'Z') ||
//         (ch >= '0' && ch <= '9')
//     ) {
//         result += ch;
//     }
// }

// console.log(result);


// 158.
// let str = "i love javascript language";
// let word = "";
// let count = 0;

// for (let i = 0; i <= str.length; i++) {

//     if (str[i] !== " " && i < str.length) {
//         word += str[i];          
//     } else {
//         if (word.length > 5) {   
//             count++;
//         }
//         word = "";              
//     }
// }

// console.log(count);



// 159.
// let str1 = "teacher";
// let str2 = "cheater";

// let a = str1.split(" ").join("").split("").sort().join("");
// let b = str2.split(" ").join("").split("").sort().join("");

// console.log(a);
// console.log(b);

// console.log(a === b);


// 160.
// let str1 = "teeacher";
// let str2 = "cheater";

// let obj = {};   
// let isAnagram = true;

// if (str1.length !== str2.length) {
//     console.log("Not Anagram");
//     return;
// }


// for (let i = 0; i < str1.length; i++) {
//     let ch = str1[i];

//     if (obj[ch]) {
//         obj[ch]++;
//     } else {
//         obj[ch] = 1;
//     }
// }

// for (let i = 0; i < str2.length; i++) {
//     let ch = str2[i];
//     if (!obj[ch]) {
//         isAnagram = false;
//         break;
//     } else {
//         obj[ch]--;
//     }
// }
// if (isAnagram) {
//     console.log("Anagram");
// } else {
//     console.log("Not Anagram");
// }

    

// 160.
// let str = "The quick brown fox jumps over a lazy dog";

// let obj = {};
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();

//     if (ch >= 'a' && ch <= 'z') {
//         if (!obj[ch]) {
//             obj[ch] = 1;
//             count++;
//         }
//     }
// }

// if (count === 26) {
//     console.log(true);
// } else {
//     console.log(false);
// }



//Q161.

// let arr = [1, -2, 0, 5, -3];

// let positives = 0;
// let negatives = 0;
// let zeros = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positives++;
//   } else if (arr[i] < 0) {
//     negatives++;
//   } else {
//     zeros++;
//   }
// }

// console.log("num : ", positives);


//Q162.

// let arr = [1,2,3];
// let result=[];

//  for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 3);
// }

// console.log(result);
// //another method :

// let res = arr.map((value)=>{
//     return value*3;
// })
// console.log(res)
// //another method 
//  for (let i = 0; i < arr.length; i++) {
//     arr[i]=arr[i]*3;
//  }
//  console.log(arr)



// Q163.
// let arr = [-1, 2, -3];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     result.push(-arr[i]);
//   } else {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

// //another method :
// function absolute(arr){
//     for (let i = 0;i<arr.length;i++){
//         arr[i]=Math.abs(arr[i]);
//     }
//     console.log(arr)
// }
// absolute(1,2,3);


// // Q164.
// let arr = [2, 4, 6];
// let Even = true;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     Even = false;
//     break;
//   }
// }

// console.log(Even);


// Q165.
// let arr = [1, 4, 5];
// let Even = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     Even = true;
//     break;
//   }
// }

// console.log(Even);

// Q166
// let arr = [1, 2, 3];
// let Positive = true;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= 0) {
//     Positive = false;
//     break;
//   }
// }

// console.log(Positive);


// Q167.
// let arr = [1, 5, 7, 2];
// let v = 4;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > v) {
//     count++;
//   }
// }

// console.log(count);


//Q168.
// let arr = [3, 7, 2, 7];
// let max = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     maxIndex = i;
//   }
// }

// console.log(maxIndex);

//Q169.
// let arr = [3, 7, 2, 2];
// let min = arr[0];
// let minIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     minIndex = i;
//   }
// }

// console.log(minIndex);


//Q170.
// let arr = [1, 2, 3, 1];
// let Duplicate = false;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       Duplicate = true;
//       break;
//     }
//   }
//   if (Duplicate) {
//     break;
//   }
// }

// console.log(Duplicate);

//another method using objects :

// function checkDuplicate(arr){
//     let obj = {};

//     for (char of arr){
//         if(obj[char]){
//             console.log(true);
//             return
//         }
//         else{
//             obj[char]=1;
//         }
//     }
//     console.log(false);
// }
// checkDuplicate([1,2,3])

//Q171.

// function unique(arr){
//     let obj = {};

//     for(let i = 0 ;i<arr.length;i++){
//         if(obj[arr[i]]==undefined){
//             obj[arr[i]]=1
//         }
//         else{
//             obj[arr[i]]++;
//         }
//     }
//     for(let char in obj){
//         res.push(Number(char));
//     }
//     console.log(res)
// }
// unique


//Q172.
// let arr = [1, 2, 3, 4];
// let Increasing = true;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] <= arr[i - 1]) {
//     Increasing = false;
//     break;
//   }
// }

// console.log(Increasing); 


//Q173.
// function negative (arr){
//     let i = 0;
//     for (let j = 0;j<arr.length;j++){
//         if(arr[j]<0){
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//             i++
//         }
//     }
//     console.log(arr)
// }
// negative([1,2,-2,-3])


//Q174.
// let arr = [1, 5, 3, 9];
// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// let diff = max - min;
// console.log(diff); 

//Q175.

// let arr = [10,20,30,40,50];
// let result = [];
// for (let i = 0 ; i<arr.length;i+=2){
//      result.push(arr[i]);


// console.log(result);
// }
//another method :

// let res = arr.filter((value,index)=>{
//     return index%2==0
// })
// console.log(res)

// //Q176.
// let arr = [10, 20, 30, 40, 50];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     result.push(arr[i]);
//   }
// }

// console.log(result); 

// //Q177.
// var arr = ["hi", "hello", "hey", "Java"];
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].length > 3) {
//     count++;
//   }
// }

// console.log(count); 

// // //Q178.
// // var arr = ["apple", "banana", "cherry"];
// // var result = [];

// // for (var i = 0; i < arr.length; i++) {
// //   result.push(arr[i][0]);
// // }

// // console.log(result);
// //  //another method 

// // function firstChar(arr){
// //     let res = arr.map((value)=>{
// //         return value[0];
// //     })
// //     console.log(res)
// // }
// // firstChar(["hi","hello"])


// //Q179.
// var arr = ["a", "", "b", "", "c"];
// var result = [];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] !== "") {
//     result.push(arr[i]);
//   }
// }

// console.log(result); 



// //Q180.
// var arr = [1, 2, 3, 4, 5];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum); 
// //another method :

// function sumEven(arr){
//     let sum = arr.reduce((current,next)=>{
//         if(next%2==0){
//             return current+next;
//         }
//         else{
//             return current;
//         }
//     },0)
//     console.log(sum)
// }
// sumEven(91,2,3,4,5,6)


//Q181.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum); 

//another method :
// function sumOdd(arr){
//     let sum = arr.reduce((current,next)=>{
//         if(next%2!==0){
//             return current+next;
//         }
//         else{
//             return current;
//         }
//     },0)
//     console.log(sum)
// }
// sumOdd(91,2,3,4,5,6)

// //Q182.
// let arr = [1, 2, 3, 4];
// let i = 1;
// let j = 3;

// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;

// console.log(arr); 

// //another method :
// function swap (arr,i,j){
//     [arr[i],arr[j]]=[arr[j],arr[i]];
//     console.log(arr);
// }
// swap([1,2,3],0,1)


//Q183.
// function rotate(arr, k) {
//   for (let i = 1; i <= k; i++) {
//   let add = arr.pop();
//   arr.unshift(add);
//   }
//   console.log(arr)
// }
// rotate([1,2,3,4,5],k);

//another method :
// function rotate(arr, k) {

// let res = [];
// for (let i = arr.length-k;i<arr.length;i++){
//   res.push(arr[i]);
// }
// for (let i = 0 ;i<arr.length-k;i++){
//   res.push(arr[i]);
// }
// console.log(res);
// }
// rotate([1,2,3,4,5],2);




//Q184.

// function leftRotate(arr, k) {
//   let res = [];

//   for (let i = k; i < arr.length; i++) {
//     res.push(arr[i]);
//   }

//   for (let i = 0; i < k; i++) {
//     res.push(arr[i]);
//   }

//   console.log(res);
// }

// leftRotate([1, 2, 3, 4, 5], 2);

//Q185.

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([3, 1, 4, 2])); 


//Q186.

// function selectionSort(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     let max = -Infinity;
//     let maxIndex = 0;

//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > max) {
//         max = arr[j];
//         maxIndex = j;
//       }
//     }

//     [arr[arr.length - i - 1], arr[maxIndex]] =
//       [arr[maxIndex], arr[arr.length - i - 1]];
//   }

//   console.log(arr);
// }

// selectionSort([3, 1, 4, 2]);


//Q187. 
// function insertionsort(arr){
//   for (let i = 0 ;i<arr.length;i++){
//   for(let j=i;j>=1;j--){
//     if(arr[j]<arr[j-1]){
//       [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
//     }
//      else{
//       break;
//      }
//   }
//   }
//   console.log(arr);
// }
// insertionsort([10,1,2])

//Q188.

// function Binary(arr,k){
//   let i =0 ;
//   let j = arr.length-1;
//   while(j>=i){
//     let mid = Math.floor((i+j)/2);
//     if(arr[mid]>k){
//       j=mid-1;
//     }
//     else if(arr[mid]<k){
//       i=mid+1;
//     }
//     else{
//       console.log(mid);
//       return;
//     }
//   }
//   console.log(-1);
// }

// Binary([1,2,3,4,5],4)


//Q189.
// function kSmallest(arr, k) {

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;



//       }
//     }
//   }

//   return arr[k - 1];
// }

// console.log(kSmallest([7, 10, 4, 3, 20, 15], 3)); 


//Q190.

// function kthLargest(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j >= 1; j--) {
//       if (arr[j] > arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else {
//         break;
//       }
//     }
//   }

//   return arr[k - 1];
// }

// console.log(kthLargest([7, 10, 4, 3, 20, 15], 2)); 




// //Q192.
// function CountOccurences(arr, element) {
//   let left = null;
//   let right = null;

//   let i = 0;
//   let j = arr.length - 1;

//   // left part of the element
//   while (j >= i) {
//     let mid = Math.floor((i + j) / 2);

//     if (arr[mid] == element) {
//       left = mid;
//       j = mid - 1;
//     }
//     else if (arr[mid] > element) {
//       j = mid - 1;
//     }
//     else {
//       i = mid + 1;
//     }
//   }

//   i = 0;
//   j = arr.length - 1;

//   while (j >= i) {
//     let mid = Math.floor((i + j) / 2);

//     if (arr[mid] == element) {
//       right = mid;
//       i = mid + 1;
//     }
//     else if (arr[mid] > element) {
//       j = mid - 1;
//     }
//     else {
//       i = mid + 1;
//     }
//   }

//   let result = right - left + 1;
//   console.log(result);
// }

// CountOccurences(
//   [1, 2, 3, 4, 5, 7, 7, 7, 7, 8, 9, 11, 13],
//   7
// );




//Q193.
// function findpair(arr,sum){


// for (let i = 0; i<arr.length;i++){
//   for(let j = i+1;j<arr.length;j++){
//     if(arr[i]+arr[j]==sum){
//       console.log(true);
//       return
     
//       }
//     }
//   }
// console.log(false);
// }
// findpair([1,2,3,4,5],11)

//Q194.
// function triplet(arr,sum){
//   for (let i = 0;i<arr.length;i++){
//     for (let j = i+1;j<arr.length;j++){
//       for (let k = j+1;k<arr.length;k++){
//         if(arr[i]+arr[j]+arr[k]==sum){
//           console.log(true);
//           return;
//         }
//       }
//     }
//   }
//   console.log(false)
// }


//Q195.
function maxSubArray(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if(currentSum>maxSum){
      maxSum = currentSum
    }
  }
}
  console.log(maxSum)

  return maxSum;
}

// Q199.

function removeDuplicates(str){
  let res=" ";
  for (let i = 0;i<str.length-1;i++){
    if(str[i]!=str[i+1]){
      res+=str[i]
    }

  }
}








































































































































































































































































































































































































































































































// 
// 



























































































































































































 






