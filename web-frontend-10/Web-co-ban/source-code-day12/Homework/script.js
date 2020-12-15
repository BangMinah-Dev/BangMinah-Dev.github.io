// js

document.write("<h2>1. Cho một mảng số nguyên. Viết hàm kiểm tra nếu trong mảng có phần tử âm thì thay thế nó bằng 0.</h2>")
document.write('<p>Dùng hàm " checkNegative() " tham số truyền vào là 1 mảng </p>')
document.write("<h2>2. Viết hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên.</h2>")
document.write('<p>Dùng hàm " minMax() " tham số truyền vào là 1 mảng </p>')
document.write("<h2>3. Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.</h2>")
document.write('<p>Dùng hàm " find() " tham số truyền vào là 1 mảng </p>')



// Hàm kiểm tra nếu trong mảng có phần tử âm thì thay thế nó bằng 0
function checkNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(`New Array : [${arr}]`)
}

// Hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
function minMax(arr){
    let min = arr[0]
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    console.log(`min = ${min} ; max = ${max}`)
}

// Hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì
function find(arr){
    const oddArr = arr.filter(oddNbr => oddNbr % 2 != 0)
    const evenArr = arr.filter(evenNbr => evenNbr % 2 == 0)
    let first = oddArr[0]
    let last = evenArr[evenArr.length-1]

    console.log(`First odd : ${first} ; index : ${(arr.indexOf(first))} \nLast even : ${last} ; index : ${(arr.indexOf(last))}`)
}