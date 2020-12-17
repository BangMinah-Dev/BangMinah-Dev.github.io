// js

// Bài 1: tính tổng tất cả các số nguyên nằm giữa chúng
function tongSoNamGiua(nbr1, nbr2) {
    let sum = 0;

    if(nbr1 < nbr2){
        for (let i = nbr1 + 1; i < nbr2; i++) {
            sum += i;
        }
    }
    
    if(nbr1 > nbr2){
        for (let i = nbr2 + 1; i < nbr1; i++) {
            sum += i;
        }
    }
    
    return sum;
}

// Bài 2: Cho 1 số nguyên dương,
// viết hàm tính tổng tất cả các ước số của số đó
function tongUocSo(nbr) {
    let sum = 0;
    for (let i = 1; i <= nbr; i++) {
        if (nbr % i == 0) {
            sum += i;
        }
    }
    return sum;
}

// Bài 3: Cho 1 số nguyên dương,
// kiểm tra xem số đó có phải là số nguyên tố hay không,
// kết quả trả về true hoặc false.
function soNT(nbr) {
    if (nbr <= 1 || isNaN(nbr)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nbr); i++) {
        if (nbr % i == 0) {
            return false;
        }
    }
    return true;
}

// Bài 4: Cho 1 số nguyên dương.
// Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
function tongCacSoNT(nbr) {
    let sum = 0;
    for (let i = 0; i <= nbr; i++) {
        if (soNT(i) == true) {
            sum += i;
        }
        // soNT lấy từ function bên trên (Bài 3)
    }
    return sum;
}

// Bài 5: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ.
// Ví dụ: ''HELLO world'' => ''Hello World''.
function captialize(str) {
    // Tách từng từ làm thành phần từ của mảng
    let input_arr = str.split(" ");

    // Tạo mảng chứa chuỗi viết thường
    let output = []

    // Chuyển cả chuỗi nhập vào ban đầu thành chữ thường 
    for (let i = 0; i < input_arr.length; i++) {
        output.push(input_arr[i].toLowerCase())
    }

    // Từ mảng chữ thường duyệt qua các phần tử
    // Mỗi phần tử lấy ra :
    // - Ký tự đầu tiên chuyển thành chữ hoa ( charAt(0) )
    // - Lấy toàn bộ độ dài của chuỗi trừ ký tự đầu tiên ( substring(1) )
    // Ghép lại bằng cách nối chuỗi
    for (let i = 0; i < output.length; i++) {
        output[i] = output[i].charAt(0).toUpperCase() + output[i].substring(1);
    }
    
    // Nối lại các phần tử của trong mảng thành chuỗi cách nhau bằng "dấu cách"
    let result = output.join(" ")

    return result
}


// Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
// Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(str) {
    let array = str.split(" ");
    let output = array.join("-").toLowerCase();
    return output;
}

// Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
// (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường),
// kết quả trả về true hoặc false.
// Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function checkDoiXung(str){

    // Chuyển chuỗi ban đầu thành chữ thường và bỏ dấu cách
    let strBefore = str.toLowerCase().replace(/\s/g, '')

    // Chuyển chuỗi thành các ký tự làm phần tử của mảng
    let array = str.split("")
    // Đảo ngược mảng và chuyển lại thành chuỗi
    let rev_str = array.reverse().join("")

    let strAfter = rev_str.replace(/\s/g, '')

    if(strBefore === strAfter){
        return true
    }else{
        return false
    }
}