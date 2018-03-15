$(document).ready(function(){
    // console.log('1'); 어떤 부분이 문제인지 확인할때 사용
    var box1 = $('.box1');
    var btn = $('.btn');
    
    btn.on('click',function(){
        box1.toggleClass('box-act');
    });
});
