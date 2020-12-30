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
        let content = "";

        for (let i = 0; i < data.length; i++) {
            content += `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].birthday}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].phone}</td>
                            <td>
                            <a class="edit" href="edit.html" mr-1>
                                <i class="far fa-edit mr-1"></i>Chỉnh sửa
                            </a>
                            |
                            <a class="delete" data-name="${data[i].name}" id="${idPrefix}${data[i].id}" data-toggle="modal" data-target="#staticBackdrop">
                                <i class="fas fa-trash-alt mr-1 ml-1"></i>Xóa
                            </a>
                            </td>
                        </tr>`;
        }
        $("#dataTable").html(content);
        modal();
    });
}

function modal() {
    let element = $(".delete");

    for (let i = 0; i < element.length; i++) {
        $(element[i]).click(function () {
            let id = $(this).attr("id").replace(idPrefix, "");

            let name = $(this).data("name");

            $(".contentModal").text(name);

            $(".btn-danger").attr("id", id)
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
