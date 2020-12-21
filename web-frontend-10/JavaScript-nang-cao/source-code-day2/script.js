//

// Bài 1: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
function maxStr(arr) {
    // Gán phần tử đầu tiên trong mảng vào biến element
    let element = arr[0];
    // Khởi tạo biến res chứa mảng kết quả
    let res = [];

    // Duyệt mảng để tìm ra phần tử có độ dài lớn nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > element.length) {
            element = arr[i];
        }
    }

    // Duyệt mảng nếu có phần tử nào có độ dài bằng với độ dài đã tìm ra cho vào mảng kết quả [res]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == element.length) {
            res.push(arr[i]);
        }
    }

    return res;
}

// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên),
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
// Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function notContain(arr1, arr2) {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        // Tìm trong mảng thứ nhất có phần tử nào giống trong mảng thử hai
        if (arr2.indexOf(arr1[i]) == -1) {
            // -1 là giá trị trả về mặc định khi mà không tìm thấy phần tử giống
            res.push(arr1[i]);
        }
    }

    // Tương tự vòng lặp bên trên
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            res.push(arr2[i]);
        }
    }

    return res;
}

// Bài 3: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac.
// Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

function multiArray(m){
    let arr = []
    for(let i = 0; i < m; i++){
        arr.push(i)
    }
    console.log(arr)
}


/*
-----------------------------------------
*/

let objectArr = [
    {
        name: "Huy",
        gender: "male",
        age: 10,
    },
    {
        name: "Minah",
        gender: "male",
        age: 40,
    },
    {
        name: "Jisoo",
        gender: "female",
        age: 30,
    },
    {
        name: "IU",
        gender: "female",
        age: 20,
    }
];

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function avgAge(objectArr) {
    let res = 0;

    for (let i = 0; i < objectArr.length; i++) {
        res += objectArr[i].age / objectArr.length;
    }

    return res;
}

// Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
//  Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function sortAgeDesc(objectArr) {
    for (let i = 0; i < objectArr.length; i++) {
        for (let j = 0; j < objectArr.length; j++) {
            if (objectArr[i].age > objectArr[j].age) {
                let obj = objectArr[i];
                objectArr[i] = objectArr[j];
                objectArr[j] = obj;
            }
        }
    }

    return objectArr;
}

// Bài 6: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function sortName(objectArr) {
    objectArr.sort(function (a, b) {
        let nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        let nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    return objectArr;
}

// Bài 7: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function filterItems(objectArr, query) {
    return objectArr.filter(function (el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}
