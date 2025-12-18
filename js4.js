// ARROW FUNCTIONS BASICS
const add = (a, b) => a + b;
console.log(add(5, 7));

const square = x => x * x;
console.log(square(6));

const noParams = () => "No params here";
console.log(noParams());

const multiLineArrow = (a, b) => {
    const sum = a + b;
    return sum * 2;
};
console.log(multiLineArrow(3, 4));

const implicitReturnObject = (name, age) => ({name, age});
console.log(implicitReturnObject("Alice", 30));


// OBJECTS: BASICS
const user = {
    name: "John",
    age: 25,
    email: "john@example.com",
};

console.log(user.name);

let another = user;
console.log(another);

another.name = "Bob";
console.log(user.name, another.name);

// NUMBER BASICS
let n1 = 123;
let n2 = 1.23e2;
console.log(n1, n2);

console.log(Number("123"));
console.log(Number("hello"));
console.log(parseInt("100px"), parseFloat("3.14em"));

console.log("Max number", Number.MAX_SAFE_INTEGER);
console.log("Min number", Number.MIN_SAFE_INTEGER);

console.log(isNaN(NaN), isFinite(1 / 0));

// BigInt for large integers
let big = 1234567890123456789012345678901234567890n;
console.log(big + 10n);

// Math functions
console.log(Math.round(4.7));
console.log(Math.random());

// Object methods
const calc = {
    x: 0,
    y: 0,
    read(xVal, yVal) {
        this.x = xVal;
        this.y = yVal;
    },
    sum() {
        return this.x + this.y;
    },
    product() {
        return this.x * this.y;
    }
};
calc.read(3, 4);
console.log("sum:", calc.sum(), "product:", calc.product());

// USING ARROW FUNC INSIDE METHODS
const runner = {
    name: "Runner",
    speed: 10,
    describe() {
        const info = () => `${this.name} runs at ${this.speed}`;
        return info();
    }
};
console.log(runner.describe());

// numbers - Infinity, 0, negative
console.log("Infinity example", 1/0);
console.log("-Infinity example", -1/0);

// operations with NaN
console.log("NaN plus 1:", NaN + 1);

// number to string conversions
console.log((123).toString(), (3.14).toFixed(1));

// parse numeric strings
console.log(parseInt("512abc"), parseFloat("512.55abc"));

// combine numbers conditionally
function compareNums(a, b) {
    return a > b ? a : b;
}
console.log(compareNums(5, 10));

// arrow with default values
const multDefault = (x = 1, y = 1) => x * y;
console.log(multDefault(), multDefault(5, 2));

// arrow that returns NaN to show type behavior
const getBad = () => parseInt("bad");
console.log(getBad());

