let year = 2015;
if (year === 2015) {
    console.log("You are right!");
}

let releaseYear = 2014;
if (releaseYear === 2015) {
    console.log("Correct!");
} else {
    console.log("Wrong year, try again.");
}

let jsVersion = 2017;
if (jsVersion < 2015) {
    console.log("Too early...");
} else if (jsVersion > 2015 && jsVersion < 2020) {
    console.log("Close, but not 2015.");
} else if (jsVersion === 2015) {
    console.log("Exactly!");
} else {
    console.log("Far in the future!");
}

let age = 20;
let accessAllowed;
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log("Access allowed:", accessAllowed);

let score = 75;
let result = score >= 60 ? "Pass" : "Fail";
console.log("Exam result:", result);

let userAge = 25;
let message = userAge < 3
    ? "Hi, baby!"
    : userAge < 18
        ? "Hello!"
        : userAge < 100
            ? "Greetings!"
            : "Unusual age.";
console.log("Message:", message);

console.log(userAge >= 18 ? "Adult" : "Minor");

let temperature = 12;
if (temperature < 0) {
    console.log("Freezing");
} else if (temperature < 15) {
    console.log("Cold");
} else if (temperature < 25) {
    console.log("Warm");
} else {
    console.log("Hot");
}

let x = 10;
let y = 20;
if (x > y) {
    console.log("a is bigger");
} else if (x < y) {
    console.log("b is bigger");
} else {
    console.log("Equal");
}

let number = -5;
let sign = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(sign);

let day = 3;
let dayName;
if (day === 1) {
    dayName = "Mon";
} else if (day === 2) {
    dayName = "Tue";
} else if (day === 3) {
    dayName = "Wed";
} else if (day === 4) {
    dayName = "Thu";
} else if (day === 5) {
    dayName = "Fri";
} else {
    dayName = "Weekend";
}
console.log(dayName);

let a = true || false;
console.log("true || false =>", a);

let b = false || false;
console.log("false || false =>", b);

let numOr = 1 || 0;
console.log("1 || 0 =>", numOr);

let firstTruthy = null || 0 || "hello" || 5;
console.log("null || 0 || 'hello' || 5 =>", firstTruthy);

let allFalsy = null || undefined || 0 || "";
console.log("null || undefined || 0 || '' =>", allFalsy);

let shortCircuitOr = "yes" || console.log("not printed");
console.log("short-circuit OR returns:", shortCircuitOr);

let n = false && true;
console.log("false && true =>", n);

let k = true && true;
console.log("true && true =>", k);

let z = 1 && 0 && "test";
console.log("1 && 0 && 'test' =>", z);

let lastTruthy = 1 && 2 && 3;
console.log("1 && 2 && 3 =>", lastTruthy);

let shortCircuitAnd = false && console.log("not printed");
console.log("short-circuit AND returns:", shortCircuitAnd);

let mixLogic1 = (null || 2) && 3;
console.log("(null || 2) && 3 =>", mixLogic1);

let mixLogic2 = null || (2 && 3) || 4;
console.log("null || (2 && 3) || 4 =>", mixLogic2);

let notTrue = !true;
console.log("!true =>", notTrue);

let notFalse = !false;
console.log("!false =>", notFalse);

let doubleNot = !!"hello";
console.log("!!'hello' =>", doubleNot);

let notFalsy = !0;
console.log("!0 =>", notFalsy);

let combo1 = (5 > 2) || (1 > 3);
console.log("(5 > 2) || (1 > 3) =>", combo1);

let combo2 = (5 > 2) && (1 > 3);
console.log("(5 > 2) && (1 > 3) =>", combo2);

let combo3 = !(5 < 2);
console.log("!(5 < 2) =>", combo3);

let valueA = null;
let defaultValue = valueA || "default";
console.log("null || 'default' =>", defaultValue);

let isAllowed = (10 > 5) && true;
console.log("10 > 5 AND true =>", isAllowed);

let falseAndValue = 0 && "won't print";
console.log("0 && 'won't print' =>", falseAndValue);

let orAndMixed = ("" || "fallback") && "final";
console.log("('' || 'fallback') && 'final' =>", orAndMixed);

let truthCheck = !!("" || 42);
console.log("!!('' || 42) =>", truthCheck);

let andThenOr = (1 && 2) || 0;
console.log("(1 && 2) || 0 =>", andThenOr);

let orThenAnd = 0 || (2 && 4);
console.log("0 || (2 && 4) =>", orThenAnd);

let negationExample = !(null || "value");
console.log("!(null || 'value') =>", negationExample);

let complexLogic = !((null && "hi") || (!0 && "ok"));
console.log("complex logic =>", complexLogic);

let moreMix = ("hi" && 0) || ("yes" && "go");
console.log("('hi' && 0) || ('yes' && 'go') =>", moreMix);

let chainOr = false || false || true;
console.log("false || false || true =>", chainOr);

let chainAnd = true && true && false;
console.log("true && true && false =>", chainAnd);

let example1 = ("a" || "b") && ("c" || "");
console.log("('a' || 'b') && ('c' || '') =>", example1);

let example2 = (0 || false) && (true || "yes");
console.log("(0 || false) && (true || 'yes') =>", example2);

let negativeOr = !("text" || "");
console.log("!('text' || '') =>", negativeOr);

let multipleNot = !!!true;
console.log("!!!true =>", multipleNot);

let logicTest = (5 < 3) || (2 === 2) && !(0);
console.log("mixed logical test =>", logicTest);

let lastOne = (!(false && true) || (null && "none"));
console.log("final expression =>", lastOne);
