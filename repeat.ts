function repeat() {
  for (let i = 0; i < 100; ++i) {
    console.log(`- ${i}.`);
  }
}

// Refactor to closure
function templateString(input: number | string): string {
  return `- ${input}.`;
}

// function templateString2(
//   inputString: string,
//   arg: number | string | undefined
// ): string {
//   return `- ${inputString} ${arg}`;
// }

function repeatInput(inputString: string): string[] {
  let i = 0;
  //   const templateString = `- ${i}.`;

  let buffer: string[] = [];

  for (i = 0; i < 100; ++i) {
    // buffer.push(`- ${i}`);
    buffer.push(templateString(i));
    // buffer.push(templateString2("This needs to be a bit more generic", i));
  }

  return buffer;
}

let output = repeatInput("");
console.log(output);
