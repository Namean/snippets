// https://byby.dev/ts-object-destructuring

const person = { firstName: "", hobby: "" };
const { firstName, hobby = "reading" } = person;
