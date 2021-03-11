// JS

let _trangChu = $('#trangChu').attr("id")
let _theLoai = $('#theLoai').attr("id")
let _tinTuc = $('#tinTuc').attr("id")
let _huongDan = $('#huongDan').attr("id")

let _title = $("title").attr("class")

let _active = $(".nav-item")

if(_title == _trangChu){
    $(_active[0]).addClass("active")
}

if(_title == _theLoai){
    $(_active[1]).addClass("active")
}

if(_title == _tinTuc){
    $(_active[2]).addClass("active")
}

if(_title == _huongDan){
    $(_active[3]).addClass("active")
}