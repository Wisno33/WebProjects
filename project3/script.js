function findMax(array){
	return array[array.length-1].toFixed(2);
}

function findMin(array){
	return array[0].toFixed(2);
}

function calcSum(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum.toFixed(2);
}

function calcMean(array){
	return (calcSum(array)/array.length).toFixed(2);
}

function calcMedian(array){
	if(array.length % 2 != 0)
		return array[Math.floor(array.length/2)].toFixed(2);
	else
		return ((array[array.length/2]+array[(array.length/2)-1])/2).toFixed(2);
}

function calcMode(array){

	var appearanceMap = new Map();

	for (var i = 0; i < array.length; i++) {
		if(array[i] in appearanceMap)
			appearanceMap[array[i]] = appearanceMap[array[i]] + 1;
		else
			appearanceMap[array[i]] = 1;
	}

	var modeValue = 0;

	for(var key in appearanceMap){
		if(appearanceMap[key] > modeValue)
			modeValue = appearanceMap[key];
	}

	var modeArray = [];

	for(key in appearanceMap){
		if(appearanceMap[key] == modeValue)
			modeArray.push(key);
	}
	
	return modeArray;
}

function calcStdDev(array){
	var mean = calcMean(array);
	var tempSum = 0;
	for (var i = 0; i < array.length; i++) {
		tempSum += Math.pow((array[i] - mean),2);
	}

	return Math.sqrt(tempSum/array.length).toFixed(2);
}

function calcVariance(array){
	return Math.pow(calcStdDev(array),2).toFixed(2);
}

function preformStatistics(){
	var userInput = document.getElementById("userInput").value.split(' ');

	for (var i = 0; i < userInput.length; i++) {
		userInput[i] = parseFloat(userInput[i]);
	}

	userInput.sort((a,b) => a-b);

	document.getElementById("maxValue").value = findMax(userInput);

	document.getElementById("minValue").value = findMin(userInput);

	document.getElementById("sumValues").value = calcSum(userInput);

	document.getElementById("mean").value = calcMean(userInput);

	document.getElementById("median").value = calcMedian(userInput);

	document.getElementById("mode").value = calcMode(userInput);

	document.getElementById("stdDev").value = calcStdDev(userInput);

	document.getElementById("variance").value = calcVariance(userInput);

	return false;
}