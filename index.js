// const body=document.getElementById("body");
// console.log(body);
// body.style.backgroundColor="pink"



// const h1=document.getElementById("h1");
// console.log(h1)
// console.log(h1.textContent)
// h1.textContent="by java "

// body.textContent="hello"
// body.h1.textContent="by java"

// const heading=document.getElementById(heading);
// console.log(heading);


// const heading1 =document.getElementsByClassName(heading1);
// console.log(heading1);
// // body.style.backgroundcolor="red"
// h1.textContent="homee"





// let data=prompt()
// const button=document.getElementById("color");
// let heading=document.getElementById("heading");
// const body=document.getElementById("body");
// button.addEventListener("click",()=>{
//     body.style.backgroundColor="pink";
//     console.log("done by button")
//     heading.innerText=data
// });



// let data=prompt()
// const button = document.getElementById("color");
// let heading=document.getElementById("heading");
// const body = document.getElementById("body");
// button.addEventListener("click",()=> {
//     body.style.backgroundColor="pink";
//     console.log("This is done through button")
//     heading.innerText=data
// });

const form = document.getElementById("userForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
let h2 = document.getElementById("h2");
form.addEventListener("submit", (e) => { 
    e.preventDefault();
    console.log(fname.value);
    console.log(lname.value);
    h2.innerText= `${fname.value} ${lname.value}`;
});

const body = document.getElementById("body");
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const newColor = `rgb(${r}, ${g}, ${b})`;

    body.style.backgroundColor = newColor;

    console.log(newColor);
});