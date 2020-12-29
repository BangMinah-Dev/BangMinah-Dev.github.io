// js
$.ajax({
    method: "GET",
    url: "https://stdmanagement.herokuapp.com//users",
}).done(function (data) {
    for (let i = 0; i < data.length; i++) {
        $("#dataTable").append(
            `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].birthday}</td>
                <td>${data[i].email}</td>
                <td>${data[i].phone}</td>
                <td>
                <a class="edit mr-1"><i class="far fa-edit mr-1"></i>Chỉnh sửa</a>
                |
                <a class="delete"><i class="fas fa-trash-alt mr-1 ml-1"></i>Xóa<span class="userID">${data[i].id}</span></a>
                </td>
            </tr>`
        );
    }

    $(".delete").click(function () {
        let text = $(this).text()
        let id = text.substring(3)
        
        $.ajax({
            method: "DELETE",
            url: "https://stdmanagement.herokuapp.com/" + id,
            
        });
        console.log(id)
    });
});


$(".save").click(function () {
    $.ajax({
        method: "POST",
        url: "https://stdmanagement.herokuapp.com//users",
        data: {
            name: $("#inputFullName").val(),
            birthday: $("#inputDOB").val(),
            email: $("#inputEmail").val(),
            phone: $("#inputPhone").val(),
        },
        success: function () {
            alert("Success");
        },
    });
});
