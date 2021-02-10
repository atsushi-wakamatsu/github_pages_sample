$.ajax({
    success : function(response){
        alert('成功');
    },
    error: function(){
        //通信失敗時の処理
        alert('通信失敗');
    }
});

window.contact = window.contact || {};

$("#submit").on('click', function(){
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
});

window.contact.ajax = function(data){
    alert('ajax');
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
        console.log('送信完了');
        alert('送信完了');
    }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        alert(XMLHttpRequest.status);
        alert(textStatus);
        alert(errorThrown);
        console.log('送信失敗');
        alert('送信失敗'); 
    }).always(function(){
        location.href="index.html";
    })
}


jQuery(function($){
    $(document).ajaxSend(function() {
        $("#overlay").fadeIn(300);　
    });
    
    $('#button').click(function(){
        $.ajax({
            type: 'GET',
            success: function(data){
                console.log(data);
            }
        }).done(function() {
            setTimeout(function(){
                $("#overlay").fadeOut(300);
            },500);
        });
    }); 
});