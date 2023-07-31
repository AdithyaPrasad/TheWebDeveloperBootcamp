function addNumbers(){
    for (let i = 1; i<101; i++){
        if (i%5 == 0 && i%3 == 0){
            console.log("FizzBuzz")
            continue;
        } else if (i % 3 == 0) {
            console.log("Fizz")
            continue;
        } else if (i%5 == 0) {
            console.log("Buzz")
            continue;
        } else {
            console.log(i)
        }
    }
}  
addNumbers()

function HCD(x,y) {
    var smaller = x
    var larger = y
    if (smaller > y) {
        smaller = y
        larger = x
    }
    if (larger % smaller == 0) {
        return smaller
    } else {
        var HCF = 1
        for (let i = 2; i <= (smaller/2) ; i++) {
            if (larger % i == 0) {
                HCF = i
            }
        }
        return HCF
    }
}
HCD (4,6)

function getLast(n,k,i){
    let ans = k % n + (i-1)
    return ans
}

console.log(getLast(3,7,2));
var button = document.getElementById("btn");
var number = document.getElementById("num");
var ognum = 0;
number.textContent = 1
button.addEventListener("click",function(){
    ognum++;
    number.textContent = ognum;
});