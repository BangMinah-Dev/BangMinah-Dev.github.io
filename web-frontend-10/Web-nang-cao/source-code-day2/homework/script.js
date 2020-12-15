// js

// Lấy thông tin màn hình 
let monitor = document.getElementById("monitor")

// Gán sự kiện và lấy giá trị theo từng nút bấm
let btn = document.getElementsByName("btn")

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function (){
        monitor.value += btn[i].value
    })
}

// Xóa màn hình
function _clear(){
    monitor.value = ""
}

// Tính căn bậc hai
function _sqrt(){
    monitor.value = Math.sqrt(monitor.value)
}

// Tính giai thừa
function giaiThua() {
    let giaiThua = 1;

    for (let i = 1; i <= monitor.value; i++) {
        giaiThua *= i
    }
    
    monitor.value = giaiThua
}

// Tính phần trăm
function percent(){
    monitor.value = monitor.value / 100
}

// Tính bình phương
function binhPhuong(){
    monitor.value = Math.pow(monitor.value, 2)
}

// Xóa 1 số cuối
function _del(){
    // Lấy giá trị hiện tại trên màn hình
    let curent_monitor = monitor.value
    // Lấy độ dài chuỗi hiện tại
    let len = curent_monitor.length
    // Thực hiện xóa ký tự cuối
    monitor.value = monitor.value.slice(0, len - 1)
}

// Tính kêt quả
function equal(){
    monitor.value = eval(monitor.value)
    let res = monitor.value

let a = res.includes(".")
console.log(a)
}

