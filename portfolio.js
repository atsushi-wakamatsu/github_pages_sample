$(function(){
    var windowWidth = $(window).width();
    var headerHight = 100; 
    jQuery('a[href^="#"]').click(function() {
    var speed = 500;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
});

function　page(){
    // window.location.href = 'パス名'; // 通常の遷移
    window.open('contact.html', '_blank'); // 新しいタブを開き、ページを表示
};