// q6
var arr = [1,2,3,4,5,6,7,8,9,10];
var even=0;
var odd=0;
for(var i=0;i<arr.length;i++){
    if (arr[i]%2==0){
       even++;
    }
    else{
        odd++;
        
    }
}
console.log("odd",odd)
console.log("even",even)