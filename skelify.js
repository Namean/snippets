"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSpecialCharacter = exports.specialCharacters = exports.removeSpecialCharacters = exports.skelify = void 0;
function skelify(input) {
    // lower case
    // remove special characters
    // split on empty string
    // replace empty strings with "-"
    return input.toLowerCase().split(" ").join("-");
}
exports.skelify = skelify;
// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }
// interface Person {
//   name: string;
//   age: number;
// }
function removeSpecialCharacters(input) {
    var inputArray = input.split("");
    var booleanObjectsArray = inputArray.map(function (x, index) {
        return new Object({
            index: index,
            value: x,
            isSpecialCharacter: isSpecialCharacter(x),
        });
    });
    // const falseBooleanObjectsArray: myObject[] = booleanObjectsArray.map(
    //   (x, index) => falseBooleanObjectsArray[index].isSpecialCharacter
    // );
    var falseBooleanObjectsArray = booleanObjectsArray.filter(function (x) { return x.isSpecialCharacter === false; });
    //   console.log(falseBooleanObjectsArray);
    falseBooleanObjectsArray.map(function (x) {
        if (x.value === " ")
            x.value = "-";
    });
    var buffer = falseBooleanObjectsArray.map(function (x, index) {
        return x.value.toLowerCase();
    });
    buffer.map(function (x, index) {
        if (buffer[index] === "-" && buffer[index + 1] === "-")
            delete buffer[index];
    });
    console.log(buffer.join(""));
}
exports.removeSpecialCharacters = removeSpecialCharacters;
exports.specialCharacters = ["|", "&", "$", "@", "*", "."];
function isSpecialCharacter(inputCharacter) {
    return exports.specialCharacters.includes(inputCharacter);
}
exports.isSpecialCharacter = isSpecialCharacter;
var inputString = "Learn Web Components In | 25 Minutes";
console.log(removeSpecialCharacters(inputString));
// console.log(skelify(inputString));
// console.log(removeSpecialCharacters(inputString));
