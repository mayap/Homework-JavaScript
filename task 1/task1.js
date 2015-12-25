

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 

var counter = 0;
var maxCount = 0;
var element;
var i = 0;
var j = 0;
for (i = 0; i < arr1.length; i++) {
	for (j = 0; j < arr1.length; j++) {
		if (arr1[i] === arr1[j]) {
			counter++;
		}
	}
	
	if (counter > maxCount) {
		maxCount = counter;
		element = arr1[i];
		counter = 0;
	}
	counter = 0;
}

console.log(element + " (" + maxCount + " times" +")");