console.log("Print all numbers between -10 and 19")
var count = -10
while (count <=19){
	console.log(count);
	count++;
}

console.log("Print all even numbers between 10 and 40");
count = 10
while (count<=40){
	console.log(count);
	count+=2;
}

console.log("Print all odd numbers between 300 and 330")
count = 301
while (count<=333) {
	console.log(count);
	count+=2
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
count = 5
while (count<=50){
	if (count%5===0 && count%3===0){
		console.log(count)
	}
	count++
}