'use strict'

var Name = prompt("Enter your Name?");
console.log(" your Name is " + Name);
alert ("please" + Name + "make your all answer Yes or No")
var KnewMe = prompt("Hello " + Name + " Do You Knew Me ?").toUpperCase();
console.log("Its convaret to Upper  Case + " + KnewMe);



switch (KnewMe) {
    case "YES":
    case "Y":
        alert("lets Knew How Much Do You Knew About Me  ");
        break;
    case "NO":
    case "N":
        alert("try To answer some qoustion ?");
        break;
}
var age = prompt("Are you older than me ");;
var Newage = age.toLowerCase();

console.log("Its convaret to lower Case + " + Newage);



switch (Newage) {
    case "yes":
    case "y":
        alert("You are so old   ");
        break;
    case "no":
    case "N":
        alert("You still Young");
        break;
}
var major = prompt("DO You Knew what is my Universty Major");
major.toLowerCase();

console.log("Its convaret to lower Case " + major);



switch (major) {
    case "yes":
    case "y":
        alert("Yes Im Civil Engineer Nice You Knew alot about me");
        break;
    case "no":
    case "N":
        alert("No I am civil Engineer");
        break;
}
var adress = prompt("Do you Knew where i live");
adress.toUpperCase();

console.log("Its convaret to Upper Case " + adress);



switch (adress) {
    case "YES":
    case "Y":
        alert("maybe you a close person for me ");
        break;
    case "NO":
    case "N":
        alert("No i live in safoot ");
        break;
}
var Meeting = prompt("did we met befor");
Meeting.toUpperCase();

console.log("Its convaret to Upper Case " + Meeting);



switch (Meeting) {
    case "YES":
    case "Y":
        alert("nice to meet you " + Name);
        break;
    case "NO":
    case "N":
        alert("I hope to meet you soon " + Name );
        break;
}