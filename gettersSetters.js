const data = `private _id: string | undefined | null;
private id: number | undefined | null;
private name: string | undefined | null;
private last_name: string | undefined | null;`;

let dataArray = data.split('\n');
const params = dataArray.map(x => {
    let y = x.trim().split(' ');
    let firstIndexLength = y[1].length;
    
    return capitalize(y[1].slice(0, firstIndexLength - 1));
    
})

function capitalize(inputString) {
    return [inputString[0].toUpperCase(), inputString.slice(1, Infinity)].join('');
    // return [str[0].toUpperCase(), str.slice(1, Infinity)].join('');
}

const paramResults = params.map(x => {
    const y = x;

    return `public get${y}() { return this.${y.toLowerCase()}}`;
});

paramResults.map(x => console.log(x))
