// js

const idPrefix = "student-";

$(() => {
    renderList();
});

function renderList() {
    $.ajax({
        method: "GET",
        url: "https://stdmanagement.herokuapp.com/users",
    }).done(function (data) {
        mainData(data)
    });
}

function mainData(data){
    let content = "";

        for (let i = 0; i < data.length; i++) {
            content += `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].birthday}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].phone}</td>
                            <td>
                            <a class="edit" mr-1 data-toggle="modal" data-target="#exampleModal"
                                data-id="${data[i].id}" 
                                data-name="${data[i].name}" 
                                data-birthday="${data[i].birthday}" 
                                data-email="${data[i].email}"  
                                data-phone="${data[i].phone}">
                                    <i class="far fa-edit mr-1"></i>Chỉnh sửa
                            </a>
                            |
                            <a class="delete" data-toggle="modal" data-target="#staticBackdrop"
                                data-name="${data[i].name}" 
                                id="${idPrefix}${data[i].id}">
                                    <i class="fas fa-trash-alt mr-1 ml-1"></i>Xóa
                            </a>
                            </td>
                        </tr>`;
        }
        $("#dataTable").html(content);
        modal();
        editModal();
        search();
}

function modal() {
    let element = $(".delete");

    for (let i = 0; i < element.length; i++) {
        $(element[i]).click(function () {
            let id = $(this).attr("id").replace(idPrefix, "");

            let name = $(this).data("name");

            $(".contentModal").text(name);

            $(".btn-danger").attr("id", id);
        });
    }
}

function deleteItem() {
    let id = $(".btn-danger").attr("id");

    $.ajax({
        method: "DELETE",
        url: "https://stdmanagement.herokuapp.com/users/" + id,
    }).done(() => {
        $(".modal").modal("hide");
        renderList();
    });
}

$(document).ready(function () {
    $(".save").click(function () {
        $.ajax({
            method: "POST",
            url: "https://stdmanagement.herokuapp.com/users",
            data: {
                name: $("#inputFullName").val(),
                birthday: $("#inputDOB").val(),
                email: $("#inputEmail").val(),
                phone: $("#inputPhone").val(),
            },
        }).done(() => {
            alert("Success");
            window.location.href = "index.html";
        });
    });
});

function editModal() {
    let element = $(".edit");
    for (let i = 0; i < element.length; i++) {
        $(element[i]).click(function () {
            let id = $(this).data("id");
            let name = $(this).data("name");
            let birthday = $(this).data("birthday");
            let email = $(this).data("email");
            let phone = $(this).data("phone");

            $(".btn-primary").attr("id", id);
            $("#name").val(name);
            $("#birthday").val(birthday);
            $("#email").val(email);
            $("#phone").val(phone);
        });
    }
}

function editItem() {
    let id = $(".btn-primary").attr("id");

    $.ajax({
        method: "PUT",
        url: "https://stdmanagement.herokuapp.com/users/" + id,
        data: {
            id: id,
            name: $("#name").val(),
            birthday: $("#birthday").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
        },
    }).done(() => {
        $(".modal").modal("hide");
        renderList();
    });
}

function search() {
    $("#search").click(function () {
        let result = $("#inputSearch").val();
        console.log(result);
        $.ajax({
            method: "GET",
            url: `https://stdmanagement.herokuapp.com/users?q=${result}`,
        }).done( (data) => {
            mainData(data)
            
            console.log(data);
        });
    });
}
