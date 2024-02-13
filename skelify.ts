export function skelify(input: string): string | string[] {
  // lower case
  // remove special characters
  // split on empty string
  // replace empty strings with "-"

  return input.toLowerCase().split(" ").join("-");
}

// interface customWindow extends Window
interface myObject extends Object {
  index: number;
  value: string;
  isSpecialCharacter: boolean;
}

function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

interface Person {
  name: string;
  age: number;
}

export function removeSpecialCharacters(input: string): any {
  let inputArray = input.split("");
  let booleanObjectsArray = inputArray.map((x, index) => {
    return new Object({
      index: index,
      value: x,
      isSpecialCharacter: isSpecialCharacter(x),
    }) as myObject;
  });
  // const falseBooleanObjectsArray: myObject[] = booleanObjectsArray.map(
  //   (x, index) => falseBooleanObjectsArray[index].isSpecialCharacter
  // );

  const falseBooleanObjectsArray: myObject[] = booleanObjectsArray.filter(
    (x: any) => x.isSpecialCharacter === false
  );

  //   console.log(falseBooleanObjectsArray);
  falseBooleanObjectsArray.map((x) => {
    if (x.value === " ") x.value = "-";
  });

  let buffer: string[] = falseBooleanObjectsArray.map((x, index) =>
    x.value.toLowerCase()
  );
  buffer.map((x, index) => {
    if (buffer[index] === "-" && buffer[index + 1] === "-")
      delete buffer[index];
  });
  console.log(buffer.join(""));
}

export const specialCharacters = ["|", "&", "$", "@", "*", "."];

export function isSpecialCharacter(inputCharacter: string): boolean {
  return specialCharacters.includes(inputCharacter);
}

const inputString = "Learn Web Components In | 25 Minutes";

console.log(removeSpecialCharacters(inputString));

// console.log(skelify(inputString));
// console.log(removeSpecialCharacters(inputString));
