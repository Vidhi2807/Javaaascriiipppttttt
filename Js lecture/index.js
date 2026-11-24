// console.log("let");
// console.log(name);

// var n = 10;
// let n1 = 10;
// const name = " Vidhi";

// console.log(name);



// console.log("function");

// function sum (n1,n2){
//     return n1+n2;

// }
// var n3 = sum(4,6);
// sum(3,4);

// console.log(n3);



// console.log("function");

// const one = function sun(){
//     return 10;
// }

// console.log(one);
// console.log(sum());



// console.log(a);

// var a = 10;


// const aa = 10 ; 
// let a2 = 12;
// console.log(aa);
// console.log(a2);
// let a = 10;
// console.log(a);

// {
//      const a1 = 11;
//      let a2 = 12;
//      var a3 = 13;
//  }

//  var a4 = 14;

//  function sum (){
//     var a5 = 10;
//     var a6 = 12; 
//     return a5+a6;
// }
 
//  sum();
 
//  console.log("a3: ",a3);
//  console.log("a1: ",a1);
//  console.log("a2: ",a2);


// const a1= 10;
// {
//     const  a2 = 11;
//     {
//         const  a3 = 12;
//         {
//             const a4 = 13;
//             console.log(a1);
//             console.log(a2);
//             console.log(a3);
//             console.log(a4);
//         }
//     }

// }

// console.log("a1:" , a1);
// let a2 = 12;
// const a3 = 13;
// {
//     var a1 = 11;
//     var a4 = 22;
//     let a6 = 14;
// }
// function sum(){
//     let a5 = 12;
//     return a4+a5;
// }
// sum();
// console.log("a1: ",a1);
// console.log("a2: ",a2);
// console.log("a3: ",a3);
// console.log("a4: ",a4);
// console.log("a5: ",a5);


// let a = 10;

// function check(){
//     let a = 12;
//     console.log(" in fucntion : ", a);
// }
// {
//     let a = 12 ;
//     console.log("in block : ", a );

// }
// check();
// console.log("outside block : ",a);


// for (const a = 0 ; a<=3 ; a++){
// console.log(a);
// }
// console.log(a);


// function a1(){
//     var n1 = 10;
//     console.log(n1);
//     function a2 (){
//         var n2 = 20 ;
//         console.log(n2);
//         function a3 (){
//             var n3 = 30 ;
//             console.log(n3);
//         }
//         a3();
//     }
//     a2();
// }
// a1();





//  function a1(){
//     var n1 = 10;
//     console.log(n1);
//     function a2 (){
//         var n2 = 20 ;
//         console.log(n2);
//         function a3 (){
//             var n3 = 30 ;
//             console.log(n3);
//         }
//         a3();
//     }
//     a2();
// }
// a1();
// var c1 = a1();
// var c2 = c1();
// a3();


// function a1(){
//     let n1 = 10;
//     console.log(n1);

//     function a2(){
//         let n2 = 20;
//         console.log(n2);

//         function a3(){
//             let n3 = 30;
//             console.log(n3);

//             function a4(){
//                 let a4 = 40;
//                 console.log(a4);
//                 console.log(n3);
//                 console.log(n2);
//                 console.log(n1);
//             }
//             a4();
//         }
//         a3();
//     }
//     a2();
// }
// a1();


// Q1
// class student {
//     constructor(name,age,branch){
//         this.name = name;
//         this .age = age;
      

//     }
// }

// var obj1 = new student ("Vidhi",18);
// console.log(obj1);


// var obj2 = new student ("Devanshi",18);
// console.log(obj2);

// var obj3 = new student ("Rani",18);
// console.log(obj3);



// using method like hello(), static and all :

// class student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
      

//     }


// hello(){
//     console.log("method");
// }
// get_name(){
//     console.log(this.name);
// }
// static get_marks{

// }
// }
// var obj1 = new student ("Vidhi",18);
// obj1.hello();





//Q2.

// class Car {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
// }

// class Owner {
//     constructor(name) {
//         this.name = name;
//     }
// }

// var car1 = new Car("BMW", 850000);
// console.log(car1);

// var car2 = new Car("Suziki", 760000);
// console.log(car2);


// var ownerr = new Owner("Vidhi");
// console.log(ownerr);

// using inheritance :
// main keyword to use inheritance is extennds 

// class Car {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
// }

// class Owner extends Car {
//     constructor( brand,price,name) {
//         super(brand,price);
//         this.name = name;
//     }
// }
// var ownerr = new Owner("Suziki",85000,"vidhi");
// // console.log(ownerr.brand);
// console.log(ownerr.price);
// console.log(ownerr.name);
// console.log(ownerr);

//Q3.
// class Mobile {
//     constructor(datamember,model,cost) {
//         this.datamember = datamember;
//         this.model = model;
//         this.cost = cost;
//     }
// }

// var Mobile1 = new Mobile("Iphone", "15pro",75000);
// console.log(Mobile1);

// var Mobile2 = new Mobile("Samsung", "S25",85000);
// console.log(Mobile2);

// var Mobile3 = new Mobile("Realme", "A10",75000);
// console.log(Mobile3);

//Q4.

// class Teacher {
//     constructor(name) {
//         this.name = name;
    
//     }
// }

// class Subject {
//     constructor(title) {
//         this.title = title;
//     }
// }

// class classroom {
//     constructor(Roomno) {
//         this.Roomno = Roomno;
//     }
// }


// var Teacher1 = new Teacher("Aakruti Mam");
// console.log(Teacher1);

// var Subject1 = new Subject("Javascript");
// console.log(Subject1);

// var classroom1 = new classroom(714);
// console.log(classroom1);




// using inheritance with 3 classes :

//  class Teacher {
//     constructor(name) {
//         this.name = name;
    
//     }
// }

// class Subject extends Teacher {
//     constructor(title , name) {
//         super(name);
//         this.title = title;
//     }
// }

// class classroom extends Subject {
//     constructor(Roomno , title , name) {
//         super(name, title)
//         this.Roomno = Roomno;
//     }
// }


// var classroom1 = new classroom( 714 , "Vidhi" , "Javascript");
// console.log(classroom1);








// csript : is used for let and const 
// var n2 = 10;
// console.log(n2);

// function f1() {
//     var n1 = 11;
//     console.log(n1);

//     function f2() {
//         n1 = 12;
//         console.log(n1);

//         function f3() {
//             n1 = 13;
//             console.log(n1);
//         }
//         f3();
//     }

//     f2();
// }

// f1();

// // call stack  : where order cann return line by line 

