// Printing array in reverse
function printReverse(arr){
	revArr = arr.reverse()
	arr.forEach(function(i){
		console.log(i);
	})
	// for(var i = arr.length - 1; i >=0;i--){
	// 	console.log(arr[i]);
	// }
}
printReverse([1,2,3,4])
printReverse(['a','b','c'])

// Checking if array is uniform
function isUniform(arr){
	var temp = arr[0]
	for (var i = 1;i<arr.lenght;i++){
		if(arr[i] !== temp){
			return false
		}
	}
	return true;
}
isUniform([1,1,1,1])
isUniform([2,1,1,1])
isUniform(["a","b","p"])
isUniform(["b","b","b"])

// Summing up all numbers in array
function sumArray(arr){
	var sum=0
	for (var count = 0;count<arr.length;count++){
		sum += arr[count];
	}
	console.log(sum)
}
sumArray([1,2,3])
sumArray([10,3,10,4])
sumArray([-5,100])

// Finding max number in array
function max(arr){
	var maxi = arr[0]
	arr.forEach(function(num){
		if (num > maxi){
			maxi = num
		}
	})
	console.log(maxi)
}
max([1,2,3]);
max([10,3,10,4]);
max([-5,100])