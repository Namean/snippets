
export function skelify(input: string): string | string[] {
	
	// lower case
	// remove special characters
	// split on empty string
	// replace empty strings with "-"
	

	return input.toLowerCase().split(" ").join('-');

}


export function removeSpecialCharacters(input: string): string | string[] {
	let inputArray = input.split('');
	
	let m = new Map();

	m.set(0, 'a');
	m.set(1, 'b');
	m.set(2, '|');
	
	m.forEach((x, index) => {
		console.log(index, x);
	});

	inputString.split(' ').map((x, index) => new Object({index: index, value: x, isSpecialChar: undefined}))

	return inputArray;
}

export const specialCharacters = ['|', '&', '$', '@', '*', '.'];

export function isSpecialCharacter(inputCharacter: string): string {
	return specialCharacters.includes(inputCharacter);
}

const inputString = "Learn Web Components In | 25 Minutes";

// console.log(skelify(inputString));
console.log(removeSpecialCharacters(inputString));

