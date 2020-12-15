// JS

// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F
function convertTemp() {
    let input = document.getElementById("temp").value
    let tempC = document.getElementById("tempC").checked
    let tempF = document.getElementById("tempF").checked
    let res = document.getElementById("res")

    if (isNaN(input) == true) {
        res.style.color = "green"
        res.innerHTML = "Bạn vừa nhập đầu vào không phải là số"
    } else if (input == "") {
        res.style.color = "red"
        res.innerHTML = "Bạn chưa nhập đầu vào"
    } else if (tempC == true) {
        res.style.color = "black"
        res.innerHTML = `C = ${input} &nbsp => &nbsp F = ${input * 1.8 + 32}`
    } else if (tempF == true) {
        res.style.color = "black"
        res.innerHTML = `F = ${input} &nbsp => &nbsp C = ${(input - 32) / 1.8}`
    }
}

// Bài 2: Viết hàm tìm ra số lớn thứ nhì trong mảng

function findSecondMax(arr) {
    if (arr.length == 2) {
        alert("Độ dài mảng phải lớn hơn 2 phần tử")
    } else {
        for (let i = 0; i <= arr.length; i++) {
            for (let j = 0; j <= arr.length; j++) {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
    }
    let secondMax = arr[1]

    return `Số lớn thứ hai là : ${secondMax}`
}

let array_bai2 = []

function push_2(){
    let element = document.getElementById("element").value
    let nbr = parseInt(element)
    array_bai2.push(nbr)
    
    document.getElementById("res_array").innerHTML = `[ ${array_bai2.join(", ")} ]`
    console.log(array_bai2)
}

function findSecondMax_2(arr) {
    arr.sort(function (a, b) { return b - a });
    return `Số lớn thứ hai là : ${arr[1]}`
}

// Bài 3 : Viết hàm tìm ra chuỗi có độ dài lớn nhất.
function findMaxLength(arr) {
    let strLength = 0
    let longestStr = ""

    for (let i = 0; i < arr.length; i++) {
        if (strLength < arr[i].length) {
            strLength = arr[i].length
            longestStr = arr[i]
        }
    }
    return `Chuỗi có độ dài lớn nhất là : ${longestStr}`
}

// Bài 4: Viết hàm kiểm tra kết thúc chuỗi
function checkLastChar(str, char) {
    let lengthChar = char.length
    let letter = str.slice(-lengthChar)

    if (letter == char) {
        return true
    } else {
        return false
    }
}

// Bài 5 : Viết hàm kiểm tra xem có phần tử nào bị lặp lại hay không
function checkArray(arr) {
    let check = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                check = true
                break
            }
        }
    }
    return check
}


function checkArray(arr) {
    let check = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                check = true
                break
            }
        }
    }
    return check
}