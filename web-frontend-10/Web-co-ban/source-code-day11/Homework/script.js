// js

document.write(`<h2>1. Hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại</h2>`)
document.write(`<p>Cách sử dụng :<br/>Chuyển đổi từ °C sang độ °F dùng hàm <b>" c_toF() "</b></p>`)
document.write(`<p>Cách sử dụng :<br/>Chuyển đổi từ °F sang độ °C dùng hàm <b>" f_toC() "</b></p>`)

document.write(`<h2>2. Hàm tính thế kỷ của 1 năm</h2>`)
document.write(`<p>Cách sử dụng :<br/>Dùng hàm <b>" centFromYear() "</b></p>`)

document.write(`<h2>3. Hàm cắt chuỗi</h2>`)
document.write(`<p>Cách sử dụng :<br/>Dùng hàm <b>" cutString() "</b><br/><i>* tham số chuyền vào là 1 chuỗi</i></p>`)

document.write(`<h2>4. Hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.</h2>`)
document.write(`<p>Cách sử dụng :<br/>Dùng hàm <b>" capitalStr() "</b> <br/><i>* tham số chuyền vào là 1 chuỗi</i> </p>`)



// Hàm chuyển đổi từ độ C sang độ F
function c_toF(nbr){
    console.log(`C = ${nbr} => F = ${nbr * 1.8 + 32}`)
}
// Hàm chuyển đổi từ độ F sang độ C
function f_toC(nbr){
    console.log(`F = ${nbr} => C = ${(nbr - 32) / 1.8}`)
}

// Hàm tính thế kỷ
function centFromYear(nbr){
    console.log(`Year = ${nbr} => Century = ${Math.ceil(nbr/100)}`)
}

// Hàm cắt chuỗi
function cutString(str){
    console.log(`String = ${str}\nString Cutted = ${str.slice(0,10)}...`)
}

// Hàm viết hoa chữ đầu tiền
function capitalStr(str){
    let lowerStr = str.toLowerCase();
    let letter = str.slice(0,1)
    console.log(`${letter.toUpperCase() + lowerStr.substr(1)}`)
}
