// Strings
const sum = (a, b) => a + b;
console.log(`1 + 2 = ${sum(1, 2)}`);

let list = `list:
    * 1
    * 2
    * 3
`;
console.log(list);

let list2 = `list:\n * 1 \n * 2 \n * 3`;
console.log(list2);

console.log(`The backslash: \\`);
console.log(`I\'m Gvantsa`);

let testStr = `TestString`;
console.log(testStr[0]);
console.log(testStr.at(-1));
for(let char of testStr) {
    console.log(char);
}
testStr[0] = 't';
console.log(testStr);

console.log(testStr.indexOf('t'));
console.log(testStr.indexOf('t', 4));
console.log(testStr.indexOf('hello'));
console.log(testStr.lastIndexOf('t'));

console.log(testStr.includes("ring"));
console.log(testStr.includes("test"));
console.log(testStr.includes("Test", 1));

console.log(testStr.slice(1, 4));
console.log(testStr.slice(-4, -2));
console.log(testStr.substring(4, 1));

console.log('B' > 'k');

console.log("A".codePointAt(0));
console.log(String.fromCodePoint(97));

console.log("Test".localeCompare("Test"));

console.log("    te st   ".trim());

console.log(ucFirst("john"));

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function truncate(str, n){
    if (str.length <= n) return str;
    return str.substring(0, n - 1) + `…`;
}

console.log(extractCurrencyValue('$120'));

function extractCurrencyValue(str){
    return +str.slice(1);
}

// Arrays
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.at(-1));

console.log(fruits.pop());
console.log(fruits);

fruits.push("Pear", "Lemon");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Strawberry", "Peach");
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}

let arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr);
arr.length = 5;
console.log(arr);

let empty = new Array(3);
console.log(empty[0]);

arr = [1, 2, 3];
console.log(arr.toString());
console.log(arr + 1);
delete arr[1];
console.log(arr);

arr.forEach((item, index, array) => {console.log(2*item)});

console.log(0 == []);

const nanArr = [NaN];
console.log(nanArr.indexOf(NaN));
console.log(nanArr.includes(NaN));

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);
