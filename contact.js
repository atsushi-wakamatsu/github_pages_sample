// ajaxが動くか確認
// $.ajax({
//     success : function(response){
//         alert('通信成功');
//     },
//     error: function(){
//         //通信失敗時の処理
//         alert('通信失敗');
//     }
// });

window.contact = window.contact || {};

$("#submit").on('click', function(e){
    e.preventDefault(); // フォームから送信されたデータ（通常のform_withのsubmitによるもの）とAjax関数によって送信されたデータを二重に送らないようにする
    window.contact.send(this);
});

window.contact.send = function(){
    if($('input[id="name"]').val() && $('input[id="email"]').val() && $('textarea[id="message"]').val()){
        var name = $('input[id="name"]').val() 
        var email = $('input[id="email"]').val() 
        var message = $('textarea[id="message"]').val()
        data = {
            name: name,
            email: email,
            message: message,
        }
        $(function(){
            $(document).ajaxSend(function() {
                $("#overlay").fadeIn(300);　
            });
            window.contact.ajax(data);
        });
    }
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbzDgkDCNdVj-qGl4TEMuGaVKU6CD4RPheAU1iqaFUDu41QtNo0yPgbMiw/exec'; // Change here: Your GAS URL here
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        setTimeout(function(){
            $("#overlay").fadeOut(300);
        },500);
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            alert('送信失敗'); 
            return;
        }
        alert('送信完了');
    }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest.status);
        console.log(textStatus);
        console.log(errorThrown);
        alert('送信失敗'); 
    }).always(function(){
        location.href="index.html";
    })
}