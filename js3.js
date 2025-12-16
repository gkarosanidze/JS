let user;
console.log(user ?? "default");
user = "user";
console.log(user ?? "default");

let first = null, second = null, third = "third";
console.log(first ?? second ?? third);
console.log(first || second || third);

console.log(0 || 5);
console.log(0 ?? 5);

let height = null, width = null;
let area = (height ?? 10) * (width ?? 5);
console.log(area);

// console.log(1 && 2 ?? 3); // syntax error
console.log((1 && 2) ?? 3);

console.log("___________");
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log("___________");

i = 3;
while (i) {
    console.log(i);
    i--;
}

console.log("___________");

i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

console.log("___________");

i = 0;
for (;i < 3;){
    console.log(i++);
}

console.log("___________");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

console.log("___________");

outer: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i + " " + j)
        if (i + j === 3) break outer;
    }
}

console.log("___________");

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i + " " + j)
        if (i + j === 3) break;
    }
}

console.log("___________");

i = 3;
while (i){
    console.log(i--);
}

console.log("___________");

i = 0;
while (++i < 5){
    console.log(i);
}

console.log("___________");

i = 0;
while (i++ < 5){
    console.log(i);
}

console.log("___________");

for (let i = 0; i < 5; ++i){
    console.log(i);
}

console.log("___________");

for (let n = 2; n < 30; n++){
    let isPrime = true;
    for (let k = 2; k < n; k++){
        if (n % k === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        console.log(n);
}

console.log("___________");

let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;
    default:
        console.log("this doesn't run");
}

a = 3;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

printHello();

function printHello(name = "World") {
    console.log('Hello ' + name);
}

printHello("gvantsa");
