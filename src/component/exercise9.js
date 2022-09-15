// try the Javascript code in page 126 (the textbox insert)

let stock = {
    first: 1,
    second: 0,
    third: 200
    }; 
console.log({...stock});
let stock1 = {
    ...stock,
    fourth: 10
};
console.log(' stock1 is  ', stock1);
let stock2 = {
    ...stock,
    third: 10
};
console.log(' stock2 is  ', stock2);
