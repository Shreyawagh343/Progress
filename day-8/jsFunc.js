// arrow function 

const sum = (a,b) =>{
    return a +b;
}

console.log(sum(2,3));

// map function

let input = [1,2,3,4,5];

const ans = input.map(function (i){
    return i*2;
})
console.log(ans);

// filter function

let input1 = [1,2,3,4,5];

const ans1 = input.filter(function (n){
    if(n%2==0){
        return true;
    }
    else {
        return false;
    }
})
console.log(ans1);