var card = document.querySelector("#hoverCard");
 console.log(card);

//  card.addEventListener("mouseenter",()=>{
//     card.style.backgroundColor = "pink";
//  });
//  card.addEventListener("mouseleave",()=>{
//     card.style.backgroundColor = "white";
//  });
//  card.addEventListener("mouseover",()=>{
//     card.style.backgroundColor = "pink";
//  });
//   card.addEventListener("mouseout",()=>{
//     card.style.backgroundColor = "lightblue";
//  });

// document.addEventListener("mousemove", (event) => {
//     console.log(
//         "current x-axis is " + event.clientX + 
//         " current y-axis is " + event.clientY
//     );
// });

//  document.addEventListener("click",(event)=>{
//     event.target.setAttribute("class","document");
//  console.log(event.target.getAttribute("class"));
//  })

 document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        console.log("downward direction");
    }
    else if (event.deltaY < 0) {
        console.log("upward direction");
    }
    else {
        console.log("static position");
    }
});

