
//for each :
// var arr = [ 12,13,14,15,16];
// arr.forEach((data,index)=>{
//     console.log(index + " " + data);
// })
// result = [];
// arr.forEach((data)=>{ result.push(data*2);})


   //map:
// map used in array , it will take only one argument and gives current data  and returns array - mathematical operation , orig9inal array as it is .


// var arr1 = [10,20,30,40];
// var b = arr1.map((data)=> data*2);
// console.log(arr1);
// console.log(b);


// filter operator : 
// size -may varry 
// array - in built method


// var arr2 = [
//     { user : "Vidhi" , age: 18},
//     { user : "Devanshi" , age: 27},
//     { user : "Parth" , age: 29},
// ]
// var b = arr2.filter((data)=> data.age>18);
// console.log(arr2);
// console.log(b);


// // reduce opertaor :
// var arr1 = [10,20,30,40];
// var b = arr1.reduce((curr,nxt)=> curr+nxt,0);
// console.log(arr1);
// console.log(b);

// difference between for in and for of :
// var arr =[10,20,30,40];

// var arr1 = [
//    {user: "Vidhi",age: 55},
//    {user: "Devanshi" , age: 47}
// ];

// //in
// for(var index in arr){
//    console.log(arr[index]);
// }
// //off
// of loops givess directly value andd we use in because it gives both key and value with index


// // for (var value of arr){
//    console.log(value);
// }

// var obj1 = {
//     user : "Vidhi",
//     age: 18,
//     mobile_number: [1234567898 , 12345678, 123456789],
// };

// for(var key in obj1){
//    console.log(key);
//    console.log(typeof(key));
//    console.log(key + " "+ obj1[key])
// }

//To find total length in array  
// var obj1 = {
//     user : "Vidhi",
//     age: 18,
//     mobile_number: [1234567898 , 12345678, 123456789],
// };
// var key1 = [];
// for(var key in obj1){
//    key1.push(key);
// }
// console.log(key1.length)

//in single line : return type array 
// console.log(Object.keys(obj1));


// by doing var :


// var key1 = Object.keys(obj1);
// console.log(key1);
//To find value with key 
// for(var key of key1){
//    console.log(key + " " + obj1[key]);
// }

//by using value :
// console.log(Object.values(obj1));



// // facebook rapper : 
// var btn = document.querySelector(".btn");

// function loadApi(){
//     fetch("https://facebook-scraper3.p.rapidapi.com/profile/photos?profile_id=100057864828042&rapidapi-key=8f84df3459mshe848c85c644897cp169112jsn32dd21d1e140")
//     .then((response)=> response.json())
//     .then((data)=>{
      
//       console.log(data)
//     })
//    }
//    btn.addEventListener("click",loadApi)



// rotten tomato :
// var btn = document.querySelector(".btn");

// function loadApi(){
//     fetch("https://rottentomato.p.rapidapi.com/get-spoilers-for-movie?spoiler_id=grudge-match&rapidapi-key=8f84df3459mshe848c85c644897cp169112jsn32dd21d1e140")
//     .then((response)=> response.json())
//     .then((data)=>{
      
//       console.log(data)
//     })
//    }
//    btn.addEventListener("click",loadApi)


//for yfinanceapi : 
// var btn = document.querySelector(".btn");

// function loadApi(){
//     fetch("https://yahoo-finance166.p.rapidapi.com/api/news/list-by-symbol?s=AAPL%2CGOOGL%2CTSLA&region=US&snippetCount=500&rapidapi-key=8f84df3459mshe848c85c644897cp169112jsn32dd21d1e140")
//     .then((response)=> response.json())
//     .then((data)=>{
      
//       console.log(data)
//     })
//    }
//    btn.addEventListener("click",loadApi)

// instagram looter :

// var btn = document.querySelector(".btn");

// function loadApi(){
//     fetch("https://instagram-looter2.p.rapidapi.com/search?query=javan&select=users&rapidapi-key=8f84df3459mshe848c85c644897cp169112jsn32dd21d1e140")
//     .then((response)=> response.json())
//     .then((data)=>{
      
//       console.log(data)
//     })
//    }
//    btn.addEventListener("click",loadApi)

//for color change :
var para = document.querySelector('p');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var id = null;

function generateColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    para.style.color = `rgb(${red}, ${green}, ${blue})`;
}

btn1.addEventListener("click", () => {
   id = setInterval(generateColor, 1000);
});

btn2.addEventListener("click", () => {
    clearInterval(id);
    para.style.color = "black";
});




