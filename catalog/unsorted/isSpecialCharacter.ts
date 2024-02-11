
export const specialCharacters = ['|', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


export function isSpecialCharacter(inputCharacter: string): boolean {
	return specialCharacters.includes(inputCharacter);
}


const inputString = "Learn Web Components In | 25 Minutes";

let results = inputString.split(' ').map((x, index) => {
	let name: any = new Object({ index: index, isSpecialCharacter: isSpecialCharacter(x)});
	return name;
});


// console.log(results.map((x, index) => x['isSpecialCharacter']));
console.log(results.filter(y => y['isSpecialCharacter'] == true));

// console.log(Object.values(results));

