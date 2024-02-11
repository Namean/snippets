# Reader.ts.md

Table of Contents / On This Page

- [Reader]()
- [See Also]()

Reader is a component of FSWrapper, which a wrapper around the fs module that node js exposes. To use this piece of code, you'll have to install @types/node.

     Reader has a companion, called Writer, which does much the same thing but writes to the files system as opposed to reading.

`npm install @types/node`

```ts
import fs from "fs";

export class Reader {
  constructor(public fileName: string) {}

  getFileObject(): string {
    let fileBuffer, fileString;

    fileBuffer = fs.readFileSync(this.fileName);
    fileString = fileBuffer.toString();

    return fileString;
  }

  get getFileName() {
    return this.fileName;
  }

  set setFileName(fileName: string) {
    this.fileName = fileName;
  }
}

const reader = new Reader("test.txt");
console.log(reader.getFileObject());
```

## See Also

- [Writer.ts]()
