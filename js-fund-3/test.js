let add7 = n => n + 7;
console.log(add7(12));

let multiply = (a, b) => console.log(a * b);
multiply(2, 2);

let capitalize = string => { 
    let x = string.substring(0, 1).toUpperCase();

    console.log(x + string.substring(1))};
capitalize("laksjdalskdjaslkdj");

let lastLetter = string => {
    console.log(string.substring(string.length - 1));
}
lastLetter("helloaskdjaslkdhaslkdhasodoahsdn2");