// Js

/*
    Multi line
*/

// Đây là kiểu dữ liệu chuỗi, nội dung được đặt trong dấu nháy đơn hoặc nháy kép
console.log("File Javascript");

console.log('Course');

console.log('Hom nay "troi dep qua"');

console.log("Hom nay 'troi dep qua'");

// Kiểu dữ liệu số (number)
var x = 5;
var y = 5.5;

// Kiểu dữ liệu boolean (đúng / sai)
var check = true;
var uncheck = false;

let name;

const pi = 3.14;

// Block scope
var newName = "abc";
let newAge = 20;
function getName(){
    newName = "Long";
    newAge = 25;
    var newAddress = "HCM";
}
getName();

// Viết một hàm tính tổng của 2 số:
function sum(a, b){
    alert(`Tổng của 2 số là : ${a} + ${b} = ${a+b}`)
}


function sendEmail(from, message = "Khong co noi dung") {
    alert(from + " : " + message);
}
// sendEmail("Huy","TEST");


console.log()
console.log("" + 1 + 0)
console.log("1.")
console.log("" - 1 + 0)
console.log("2.")
console.log(true + false)
console.log("3.") 
console.log( 6 / "3")
console.log("4.") 
console.log("2" * "3")
console.log("5.") 
console.log(4 + 5 + "px")
console.log("6.") 
console.log("$" + 4 + 5)
console.log("7.") 
console.log("4" - 2)
console.log("8.") 
console.log("4px" - 2)
console.log("9.") 
console.log(7 / 0)
console.log("10.") 
console.log("-9" + 5)
console.log("11.") 
console.log("-9" - 5)
console.log("12.") 
console.log(null + 1)
console.log("13.") 
console.log(undefined + 1)
console.log("14.") 
console.log(typeof(7) + 1)
console.log("15.") 
console.log(typeof "9" + 5)
console.log("16.") 

// Tính bình phương của một số

// Match.pow(cơ số, số mũ)

// function binhPhuong(x){
//     return Math.pow(x , 2);
// }

// Tính bình phương của một tổng (3a + 2b - c)


