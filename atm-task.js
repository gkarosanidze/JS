/*
================================================
 JavaScript Practical Exam — ATM System
 Rules:
 - Plain JavaScript only (no libraries)
 - Do NOT change the given object structure
 - Use console.log for output
 - Code must run without errors
================================================
*/

// ===============================
// GIVEN DATA (DO NOT MODIFY)
// ===============================
const atmAccount = {
    owner: "Nugo Natroshvili",
    pin: 1234,
    balance: 500,
    dailyLimit: 400,
    failedAttempts: 0,
    isLocked: false,
    transactions: []
};

// ===============================
// TASK 1 — AUTHENTICATION
// ===============================
// Write authenticate(account, enteredPin)

function authenticate(account, enteredPin) {
    if (account.isLocked)
        return false;
    if (enteredPin === account.pin){
        account.failedAttempts = 0;
        return true;
    }
    if (enteredPin !== account.pin){
        account.failedAttempts++;
    }
    if (account.failedAttempts === 3)
        account.isLocked = true;
    return false;
}

// ===============================
// TASK 2 — CHECK BALANCE
// ===============================
// Write checkBalance(account)
// Return current balance

function checkBalance(account) {
    return account.balance;
}

// ===============================
// TASK 3 — DEPOSIT MONEY
// ===============================
// Write deposit(account, amount)
//
// Rules:
// - amount must be positive number
// - update balance
// - store transaction:
//   { type: "DEPOSIT", amount: <amount> }
// - return updated balance

function deposit(account, amount) {
    if (typeof amount === 'number') {
        if (amount <= 0) {
            return "Transaction failed";
        } else {
            account.balance += amount;
            account.transactions.push({type: "DEPOSIT", amount: amount});
            return account.balance;
        }
    }
}

// ===============================
// TASK 4 — WITHDRAW MONEY
// ===============================
// Write withdraw(account, amount)
//
// Rules:
// - amount must be positive
// - cannot withdraw more than balance
// - cannot exceed dailyLimit (sum of withdrawals per day)
// - update balance
// - store transaction:
//   { type: "WITHDRAW", amount: <amount> }
// - if invalid → return "Transaction failed"

function withdraw(account, amount) {
    if (typeof amount === 'number') {
        if (amount <= 0) {
            return "Transaction failed";
        }
        if (amount > account.balance) {
            return "Transaction failed";
        }
        if (getTodayWithdrawTotal(account) + amount >= account.dailyLimit) {
            return "Transaction failed";
        }
        account.balance -= amount;
        account.transactions.push({type: "WITHDRAW", amount: amount});
        return "Transaction succeed";
    }
}

// ===============================
// TASK 5 — DAILY LIMIT CALCULATION
// ===============================
// Write getTodayWithdrawTotal(account)
// Return total amount withdrawn today

function getTodayWithdrawTotal(account) {
    let total = 0;
    for (let transaction of account.transactions) {
        if (transaction.type === "WITHDRAW") {
            total += transaction.amount;
        }
    }
    return total;
}

// ===============================
// TASK 6 — TRANSACTION HISTORY
// ===============================
// Write printTransactions(account)
//
// Output format:
// 1. DEPOSIT: +200
// 2. WITHDRAW: -100

function printTransactions(account) {
    for (let i = 0; i < account.transactions.length; i++) {
        let str = (i + 1) + ". " + account.transactions[i].type + ": ";
        switch (account.transactions[i].type) {
            case "DEPOSIT":
                str += '+';
                break;
            case "WITHDRAW":
                str += '-';
                break;
        }
        str += account.transactions[i].amount;
        console.log(str);
    }
}

// ===============================
// TASK 7 — LAST N TRANSACTIONS
// ===============================
// Write printLastTransactions(account, count)
//
// Print last <count> transactions
// If count > available, print all

function printLastTransactions(account, count) {
    if (count > account.transactions.length)
        count = account.transactions.length;
    for (let i = account.transactions.length - count; i < account.transactions.length; i++) {
        let str = (i - account.transactions.length + count + 1) + ". " + account.transactions[i].type + ": ";
        switch (account.transactions[i].type) {
            case "DEPOSIT":
                str += '+';
                break;
            case "WITHDRAW":
                str += '-';
                break;
        }
        str += account.transactions[i].amount;
        console.log(str);
    }
}

// ===============================
// TASK 8 — ATM FLOW
// ===============================
// Write atmMenu(account, pin)
//
// Flow example:
// - authenticate
// - show balance
// - deposit
// - withdraw
// - show balance
// - print transactions

function atmMenu(account, pin) {
    let isAuthenticated = authenticate(account, pin);
    if (isAuthenticated) {
        console.log(checkBalance(account));
        console.log(deposit(account, 100));
        console.log(withdraw(account, 200));
        console.log(checkBalance(account));
        printTransactions(account);
    }
}

// ===============================
// TEST AREA (DO NOT MODIFY)
// ===============================
atmMenu(atmAccount, 1234);