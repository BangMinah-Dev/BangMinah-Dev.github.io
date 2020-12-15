// JS

// 1. Đếm số nguyên tố trong đoạn [a, b].
function countSoNT(a, b) {
    let count = 0
    for (let i = a; i <= b; i++) {
        if(checkSoNT(i)){
            count++
        }
    }
    return count
}

function checkSoNT(nbr){
    if(nbr < 2){
        return false;
    } 
    for(let i = 2; i <= Math.sqrt(nbr); i++){
        if(nbr % i == 0){
            return false;
        } 
    }
    return true;
}

// 2. Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
function showDate(m, y) {
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            if( ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ){
                return 29
            }else{
                return 28
            }
        default:
            return `Không hợp lệ`   
    }
}

// 4. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.
function importMax(arr, x){
    let max = [0]
    // find max
    for(let i = 0; i <= arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    // get index of element in array
    let index = arr.indexOf(max)
    // push x
    arr.splice(index + 1 , 0, x)
    return arr
}

// 5. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.
function importASC(arr, x){
    arr.push(x)
    for(let i = 0; i <= arr.length; i++){
        for(let j = 0; j <= arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

// 6. Tính tổng các chữ số trong 1 số nguyên dương.
function tinhTong(nbr){
    let sum = 0
    let soTach = 0
    while (nbr != 0) {
        soTach = Math.floor(nbr % 10)
        sum += soTach
        nbr /= 10
    }
    return sum
}

// 7. Kiểm tra tính đối xứng của một số nguyên.
function checkDoiXung(nbr){
    let reverse = 0
    let rem
    let temp = nbr
    while(temp != 0){
        rem = Math.floor(temp % 10)
        reverse = Math.floor((reverse * 10) + rem)
        temp = Math.floor(temp/10)
    }
    if(reverse == nbr){
        return `${nbr} Là số đối xứng`
    }else{
        return `${nbr} Không là số đối xứng`
    }
}

// 8. Giải phương trình bậc 2: ax^2 + bx + c = 0.
function giaiPT(a,b,c){
    let res
    res = (b*b) - (4*a*c)
    if(res < 0){
        return `Phương trình vô nghiệm`
    }else if(res == 0){
        return `Phương trình có 1 nghiệm \nx = ${-b/2*a}`
    }else{
        return `Phương trình có 2 nghiệm :\nx1 = ${ -b + Math.sqrt(res) / (2*a) } \nx2 = ${ -b - Math.sqrt(res) / (2*a) }`
    }
}

// 9. Vẽ hình chữ nhật rỗng kích thước m, n:
function hcn(m, n) {
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || j == 1 || i == m || j == n) {
                document.write("*")
            }
            else {
                document.write("&nbsp&nbsp")
            }
        }
        document.write("<br>")
    }
}

// 10.  Vẽ tam giác vuông chiều cao h:
function tamGiacVuong(h) {
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

// 11. Vẽ tam giác cân ngược:
function tamGiacCanNguoc(h) {
    for (let i = h; i >= 1; i--) {
        for (let j = 1; j <= h - i; j++) {
            document.write("&nbsp")
        }
        for (let k = 1; k <= i; k++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

// 12. Vẽ chữ X
function veX(h){
    if(h<=0){
        return `Chiều cao phải lớn hơn 0!`;
    }else if(h%2==0){
        return `Chiều cao phải là số lẻ`;
    }else{
        for(let i=1; i<=h; i++){
            for(let j=1;j<=h;j++){
                if(j==i || j==h+1-i){
                    document.write("*");
                }else{
                    document.write("&ensp;");
                }
            }
            document.writeln("<br/>");
        }
    }
}