// function greetingUser(personName) {

//     alert("Welcome "+ personName);
//     alert("Thanks for visting");
//     alert("Can I Help you more " + personName)
// }

// var login = true;
// var userName = prompt("enter your name");

//  if (!isNaN (userName)) {
//     alert("number not allow");
// }

// else{
//     greetingUser(userName); 
// }

// else if(login === true && userName === "ali"){ 
//     greetingUser(userName);
// }
// else if(login === true && userName === 'asharib'){
//     greetingUser(userName);
// }
// sum in to the prompt

// function sum (a,b){
//     console.log(a)
//     console.log(b)
    
//     console.log(Number (a+b))
// }

// var usersum1 = prompt ("enter a num")
// var usersum2= prompt ("enter a num")

// if (!isNaN (sum)) {
//     alert("number not allow");}
// sum(usersum1,usersum2)


// calculate %

// var total =+ prompt("enter marks")


// function prcnt(marks){
//     return total*100/500

// }
// console.log(prcnt (total)+"%")


var total = +prompt("Enter marks out of 500:");

function prcnt(marks) {
    return (marks * 100) / 500;
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "F";
    }
}

var percentage = prcnt(total);
var grade = calculateGrade(percentage);

console.log(percentage + "%");
console.log("Grade: " + grade)








