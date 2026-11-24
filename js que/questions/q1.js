  
var sub1 = 85;
var sub2 = 92;
var sub3 = 78;
var sub4 = 88;
var sub5 = 95;
var Marks = sub1 + sub2 + sub3 + sub4 + sub5;
console.log("Marks = " +Marks);
var percentage = (Marks / 500) * 100; 
console.log("Percentage = " + percentage , "%");


if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) {
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");
} else if (percentage >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}


