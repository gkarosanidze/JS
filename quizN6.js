// Task 1

console.log("-----Task 1-----");
classifyNumber(-5);
classifyNumber(5);
classifyNumber(8);
classifyNumber(0);
classifyNumber(8.2);
classifyNumber("0");
classifyNumber("invalid");



function classifyNumber(n) {
    if (Number.isInteger(+n)) {
        if (n > 0) {
            console.log("Positive");
            if (n % 2 === 0)
                console.log("Even");
            else console.log("Odd");
        } else if (n < 0) {
            console.log("Negative");
        } else {
            console.log("Zero");
        }
    } else console.log("Invalid Parameter");
}


// Task 2

console.log("-----Task 2-----");
checkAge(-5);
checkAge(0);
checkAge(5);
checkAge(12);
checkAge(14);
checkAge(17);
checkAge(30);
checkAge(64);
checkAge(80);
checkAge(140);
checkAge("invalid");


function checkAge(age){
    if (typeof age=== 'number') {
        if (age < 0 || age > 120) {
            console.log("Invalid age");
        } else if (age <= 12)
            console.log("Child");
        else if (age <= 17)
            console.log("Teen");
        else if (age <= 64)
            console.log("Adult");
        else
            console.log("Senior");
    } else
        console.log("Invalid parameter");
}



// Task 3

console.log("-----Task 3-----");
analyzeText(123);
analyzeText(" gv a nt  sa ");
analyzeText(" abb  a ");
analyzeText("ai ra mzis sizmaria");
analyzeText("airevi iveria")
analyzeText("not palindrome");

function analyzeText(text){
    text = text.toString().toLowerCase();
    let vowels = "aeiou";
    let vowelN = 0;
    let reversed = "";
    let original = "";

    for (let char of text) {
        if (vowels.includes(char))
            vowelN++;
        if (char !== ' ') {
            original += char;
            reversed = char + reversed;
        }
    }
    console.log("Total characters: " + text.length);
    console.log("Total vowels: " + vowelN);
    console.log("Is palindrome: " + (original === reversed));
}


// Task 4

console.log("-----Task 4-----");

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if (isPrime(i)){
        console.log("Prime");
    } else console.log(i);
}


function isPrime(n){
    if (n === 1) return false;
    for (let i = 2; i <= Math.ceil(Math.sqrt(i)); i++){
        if (n % i === 0)
            return false;
    }
    return true;
}

// Task 5

console.log("-----Task 5-----");

const user = {
    name: "Nugo",
    scores: [10, 20, 30, 30]
};
let sum = 0;
for (let i = 0; i < user.scores.length; i++){
    sum += user.scores[i];
}
let average = sum / user.scores.length;
if (average >= 25){
    user.passed = true;
} else {
    user.passed = false;
}
console.log(user);


// Task 6

const calc = (a, b, type) => {
    switch (type) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        default:
            return "Invalid";
    }
}

console.log("-----Task 6-----");
console.log(calc(1, 2, "add"));
console.log(calc(2, 3, "sub"));
console.log(calc(3, 4, "mul"));
console.log(calc(4, 5, "subdsfdsf"));


// Task 7

console.log("-----Task 7-----");
validatePassword("123456");
validatePassword("12345678");
validatePassword("abcdefghi");
validatePassword("123vnfdkn  jnfjn543");
validatePassword("123fdkvnfokn");
validatePassword("odsin435DFD9543klnm");

function validatePassword(password){
    if (password.length < 8){
        console.error("Password must be at least 8 characters long");
        return false;
    }
    let containsNum = false;
    let containsUppercase = false;
    for (let char of password){
        if (char === ' '){
            console.error("Password contains space");
            return false;
        }
        if (char >= '0' && char <= '9'){
            containsNum = true;
        }
        if (char >= 'A' && char <= 'Z'){
            containsUppercase = true;
        }
    }
    if (!containsNum){
        console.error("Password does not contain at least one number");
        return false;
    }
    if (!containsUppercase){
        console.error("Password does not contain at least one uppercase letter");
        return false;
    }
    console.log("Valid password");
    return true;
}

