console.log("start")


setTimeout(()=>{
    console.log("runs after 2sec");
},2000)

console.log("end")

//
var count = 0 ;


setInterval(()=>{
    count ++;
    console.log("runs for a sec",count);
},1);