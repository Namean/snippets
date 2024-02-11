# Writer.ts.md

Table of Contents / On this Page

- [Writer]()
- [See Also]()

## Writer

```ts
import fs from "fs";

export class Writer {
  constructor(public fileName: string) {}

  write(fileContent: string | NodeJS.ArrayBufferView): number {
    fs.writeFileSync(this.fileName, fileContent as NodeJS.ArrayBufferView);
    return 0;
  }

  writeJSON(fileContent: string | object, options?: any): number {
    try {
      let json = JSON.stringify([fileContent], null, 4);
      fs.writeFileSync(this.fileName, json);
    } catch (err) {
      throw new Error("Something we wrong");

      return -1;
    }

    return 0;
  }

  appendJSON(content: string | object, options?: any): number {
    const { fileName } = this;
    let fileBuffer, fileString, fileObject, json;

    fileBuffer = fs.readFileSync(fileName);
    fileString = fileBuffer.toString();
    fileObject = JSON.parse(fileString);

    fileObject.push(content);

    json = JSON.stringify(fileObject, null, 4);

    fs.writeFileSync(fileName, json);

    return -99;
  }

  getFileObject(): string {
    let fileBuffer, fileString;

    fileBuffer = fs.readFileSync(this.fileName);
    fileString = fileBuffer.toString();

    return fileString;
  }

  get getFileName() {
    return this.fileName;
  }

  setFileName(fileName: string) {
    this.fileName = fileName;
  }
}
```

## See Also

- Reader
- FSWrapper.ts
