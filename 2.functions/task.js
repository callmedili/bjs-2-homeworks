"use strict";

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const number = arr[i];

		if (number < min) {
			min = number;
		}

		if (number > max) {
			max = number;
		}

		sum += number;
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let sumOdd = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
		} else {
			sumOdd += arr[i];
		}
	}

	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let countEven = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
			countEven += 1;
		}
	}

	if (countEven === 0) {
		return 0;
	}

	return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	let max = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > max) {
			max = result;
		}
	}

	return max;
}