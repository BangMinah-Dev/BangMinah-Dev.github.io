// js

// 1. Viết hàm kiểm tra 2 số, trả về số lớn hơn.
function checkNbr(nbr1, nbr2) {
    return nbr1 > nbr2 ? nbr1 : nbr2
}

//2. Viết hàm tính n! (giai thừa) với n là số nguyên dương.
function tinhGiaiThua(n) {
    let giaiThua = 1;

    for (let i = 1; i <= n; i++) {
        giaiThua *= i
    }
    return giaiThua
}

// 3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần.
function sortEvenNumber(arr) {
    const newArr = arr.filter(evenNbr => evenNbr % 2 == 0)
    return newArr.sort(function (a, b) { return b - a })
}

// function xepSoChan(arr) {
//     let arrChan = []

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             arrChan.push(arr[i])
//         }
//     }
//     console.log(arrChan)

//     for (let i = 0; i < arrChan.length; i++) {
//         for (let j = 0; j < arrChan.length; j++) {
//             if (arrChan[j] < arrChan[j + 1]) {
//                 let temp = arrChan[j]
//                 arrChan[j] = arrChan[j + 1]
//                 arrChan[j + 1] = temp
//             }
//         }
//     }
//     console.log(arrChan)
// }

// Linh
// function findEvenNumber (a1){
//     let evenNumber = a1.filter((number)=> number%2 == 0);
//     let soChan = evenNumber[0];
//     for (let i = 0; i < evenNumber.length-1; i++){
//         for (let j = i+ 1; j < evenNumber.length; j++){
//             if (evenNumber[i] < evenNumber[j]){
//                 soChan = evenNumber[j];
//                 evenNumber[j] = evenNumber[i];
//                 evenNumber[i] = soChan;
//             }
//         }
//     } return evenNumber;
// }

// 4. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:
// - Mùa xuân từ tháng 1 đến tháng 3
// - Mùa hè từ tháng 4 đến tháng 6
// - Mùa thu từ tháng 7 đến tháng 9
// - Mùa đông từ tháng 10 đến tháng 12
function checkSeason() {
    switch (new Date().getMonth()) {
        case 0:
        case 1:
        case 2:
            season = "Spring"
            break
        case 3:
        case 4:
        case 5:
            season = "Summer"
            break
        case 6:
        case 7:
        case 8:
            season = "Autumn"
            break
        case 9:
        case 10:
        case 11:
            season = "Winter"
            break
    }
    return season
}

// 5. Cho một mảng các chuỗi, viết hàm sắp xếp mảng theo thứ thự bảng chữ cái.
function sortStr_ASC(arr) {
    return arr.sort()
}

// 6. Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 7. Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố.
// (nbr - 1) để khi chia tránh gặp chính nó trong vòng lặp 
function checkSoNT(nbr) {
    let flag = true;

    for (let i = 2; i < nbr - 1; i++) {
        if (nbr % i == 0) {
            flag = false
            break;
        }
    }

    if (nbr < 2) {
        return `${nbr} không phải là số nguyên tố`
    } else if (flag == true) {
        return `${nbr} là số nguyên tố`
    } else {
        return `${nbr} không phải là số nguyên tố`
    }
}

// 8. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).
// In ra các ước
function checkSoHH(nbr) {
    let res = ""
    let sum = 0
    for (let i = 1; i <= nbr / 2; i++) {
        if (nbr % i == 0) {
            sum += i
            res += ` ${i}`
        }
    }

    if (sum == nbr) {
        return res
    }
    return `${nbr} Không phải số hoàn hảo`
}

// in ra số hoàn hảo
function printSoHH(nbr){
    let sum
    for(let i = 2; i <= nbr; i++){
        sum = 1
        for(j = 2; j <= i / 2; j++){
            if(i % j == 0)
            sum += j
        }
        if(sum == i){
            console.log(i)
        }
    }
}

// 9. Viết chương trình vẽ một hình chữ nhật bằng các dấu * với chiều rộng và chiều cao cho trước (chiều rộng, chiều cao lớn hơn 1).
function hcn(cd, cr) {
    for (let i = 1; i <= cd; i++) {
        for (let j = 1; j <= cr; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

// 10. Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước (chiều cao lớn hơn 1).

function tamGiacCan(n) {

    for (i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            // document.write("&nbsp&nbsp");
            document.write("a");
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}


function tamGiacCan1(h) {
    var str = "";
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < 2 * h - 1; j++) {
        if (j >= h - 1 - i && j <= h - 1 + i) {
        //   str += "*";\
        document.write("*");
        } else {
        //   str += "&nbsp&nbsp";
        document.write("a");
        }
      }
    //   str += "<br />";
    document.write("<br>");
    }
  
    document.writeln(str);
  }

  function bai6(string){
    var newstring = ""
    for(var i = string.length - 1; i >= 0 ; i--){
        newstring +=string[i]
        // console.log(string[i])
        if(string[i] === string[i].toUpperCase()){
            console.log(string[i])

            string[i].toLowerCase()
        }else if(string[i] === string[i].toLowerCase()){
            string[i].toUpperCase()
        }
    }
    

    return newstring
}