$(function(){
    $('.z_div .z_div3').click(function(){
        $('.z_fix').css({display:'block'});
    })
    $('.z_fix .z_yu1 span').click(function(){
        $('.z_fix').css({display:'none'});
    })
    $('.z_yu3').click(function(){
        if($('.z_yu .inp1').val()){
            if(/^[0-9]{11}$/.test($('.z_yu .inp1').val())){
                alert('预定成功')
                $('.z_fix').css({display:'none'});
            }else{
                $('.z_yu .inp1').css({border:' 1px solid red'})
            }
        }else{
            $('.z_yu .inp1').css({border:' 1px solid red'})
        }
    })
    $('.z_yu .inp1').focus(function(){
        $('.z_yu .inp1').css({border:' 1px solid #888'}) 
    })
})
if(localStorage.getItem('load')){
    $('.z_span1').html('个人中心')
    $('.z_span2').html('退出')
    if(localStorage.getItem('car')){
        $('.add').html(`(${localStorage.getItem('car').length})`)
    }else{
        $('.add').html('(0)')
    }
}else{
    $('.z_span1').html('登陆')
    $('.z_span2').html('注册')
    $('.add').html('(0)')
}
$('.add').click(function(){
    location.href='./d_shopcar.html'
})
$(".z_span1").click(function () {
    if (!localStorage.getItem('load')) {
        localStorage.setItem("login", "logining");
        location.href="./d_load.html ";
    }
})
$(".z_span2").click(function () {
    if (localStorage.getItem('load')) {
        localStorage.setItem("login", "logining");
        localStorage.setItem("load", "");
    } else {
        localStorage.setItem("login", "sigining");
        location.href="./d_load.html ";
    }
})
$('.loge_sort').on('click','ul li',function(){
    var self=this
    $('.loge_sort ul li').each(function(a,b){
        if(self==b){
            a==0?location.href='./T_index.html':a==1?location.href='./w_banner6.html':location.href="./z_roseonly_home.html"
        }
    })
})
