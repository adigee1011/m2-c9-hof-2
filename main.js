let arr = [5,2,6,8,2,4,2,5,7,9,34,1];


let sum = arr.reduce(function (prev,curr,index){
    let next = prev + curr;
    return next;
},0)

console.log(sum);

let max = arr.reduce(function(prev,curr,index){
    if (prev>curr) {
        return prev
    } else {
        return curr
    }
}) 


console.log(max);