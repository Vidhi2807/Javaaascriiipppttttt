function sortedArray(arr){
    let count=0;
    for(let i of arr){
        for (let j=i;j<arr.length;j++){
            if (arr[i]>arr[j]){
                count++
            }
        }
    }
if(count==0){
console.log("Array is sorted");
return;
}
sort(arr);
    console.log(arr)
}

    function sort(arr){
                for (let i=0;i<arr.length;i++){
                            for (let j=i+1;j<arr.length;j++){
                     if (arr[i]>arr[j]){
                         [arr[i],arr[j]]=[arr[j],arr[i]]
                     }
                            }
                }
                return arr;
    }
    
    sortedArray([1,10,2,7,3,21,4,5])
                         
                 