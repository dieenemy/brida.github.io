jQuery(document).ready(function(){
    var click = $('.go-top');
    click.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300')
    });

    var navigation = $('.navigation-bar');
    $(window).scroll(function () { 
        if($(window).scrollTop() > 250){
            navigation.addClass('change');
        } else {
            navigation.removeClass('change');
        }
    });
})