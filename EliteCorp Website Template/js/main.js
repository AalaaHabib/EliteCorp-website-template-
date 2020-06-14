$(function(){
'use strict';
$('.featured-work ul li').on('click',function(){
$(this).addClass('li-active').siblings().removeClass('li-active');


if ($(this).data('class')==='all')

{
    $('.shefules .col-md-3').show();
    $('.shefules .col-md-3').css('opacity','1');
}
else{
    $('.shefules .col-md-3').css('opacity','.3');
    $($(this).data('class')).css('opacity','1');
}

});
});