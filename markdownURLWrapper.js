const string = ""



queryString
  .split("\n")
  .map((queryString) => console.log(`## [QUERY: ${queryString}](  )`));