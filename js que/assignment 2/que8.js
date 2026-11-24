// q8
var arr = [-1,-2,-3,4,5,6,7,8,9,10];
var positive=0;
var negative=0;
var zero =0;
for(var i=0;i<arr.length;i++){
   if (arr[i]>0){
   positive++;
   }
   else if(arr[i]<0){
   negative++;
   }
   else {
       zero++;
   }
    }
console.log(positive);
console.log(negative);
console.log(zero);