"use strict";
// Index Signatures
// interface TransactionObj {
//   readonly [index: string]: number // index cannot be boolean type
// }
//! Example 1
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Mehedi: 23
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
//! Example2
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Mehedi",
    GPA: 3.94,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehusle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
