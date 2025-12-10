let message = "hello";
message = 123456;
console.log(message);

let n = 123;
n = 12.345;
console.log(n);

console.log( 1 / 0 );

console.log(NaN ** 0);

console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str} ${str2}`;
console.log(phrase);

console.log( "the result is ${1 + 2}" );

let age = null;
console.log(age);

let birthDate;
console.log(birthDate);

console.log(typeof age);
age = 19;
console.log(typeof age);
console.log(typeof alert);
console.log(typeof 2 + 3);

console.log( `hello ${1}` );
console.log( `hello ${"name"}` );

let value = true;
console.log(value);
console.log(typeof value);
value = String(value);
console.log(value);
console.log(typeof value);

console.log("8" / "4");

let num = "name";
num = Number(num);
console.log(num);

console.log(Number("   \t\n"));

console.log(Boolean("123"));
console.log(Boolean("1"));
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean(5));
console.log(Boolean(""));
console.log(Boolean("\t\n"));
console.log(Boolean("  "));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(NaN));

let x = 7;
console.log(-x);
console.log(x ** 2);
console.log(25 ** 0.5);

console.log("Hello" + " " + "JS");
console.log(2 + 1 + '2');
console.log(2 + '1' + 2);
console.log('2' + 1 + 2);

x = 5;
console.log(++x);
console.log(x);
console.log(x++);
console.log(x);

console.log("2" + "3");     // 23
console.log(+"2" + +"3");   // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4

let k = 2;
k *= 3 + 5;
console.log(k);

let counter = 0;
counter++;
++counter;
console.log(counter);

console.log(1 & 2);
console.log(2 | 1);
console.log(4 ^ 1);
console.log(~ 1);
console.log(2 << 1);
console.log(3 >> 1);
console.log(-8 >> 2);
console.log(-8 >>> 2);

let number = (1 + 5, 2 + 3);
console.log(number);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

console.log("2" > 1);
console.log("01" == 1);
console.log("01" === 1);

console.log("" == false);
console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);

console.log(null > 0);
console.log(null == 0);
console.log(null === 0);
console.log (null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(null == "\n0\n");
console.log(null === +"\n0\n");
