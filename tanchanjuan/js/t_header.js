

    $(".lang").mouseover(function(){

    $(".cn").find("a").css("display","block")

})
$(".lang").mouseleave(function(){

    $(".cn").find("a").css("display","none")
    
})
 
$(".h_dlzc").mouseover(function(){
    $(".header_toplogin_con").css("display","block")
    $(".header_toplogin_con").mouseover(function(){
        $(this).css("display","block");
    })
    $(".header_toplogin_con").mouseleave(function(){
        $(this).css("display","none");
    })
  
})
if(localStorage.getItem("load")){
    $(".login").html("个人中心");
    $(".signin").html("退出");
    var val=JSON.parse(localStorage.getItem("car"));
    $(".cart_num").html(`(${val.length})`)
    
}else{
    $(".login").html("登录");
    $(".signin").html("注册");
    $(".cart_num").html(`(0)`)
}
$(".login").addClass("login1")//添加类名给登录
$(".sigin").addClass("sigin1")//添加类名给注册

$(".login1").bind("click",function(){//点击登录给跳转页面，储存值
    location.href("./d_load.html ");
    localStorage.setItem("login","logining");

})
$(".sigin1").bind("click",function(){//点击注册给注册页面，储存值
    location.href("./d_load.html ");
    localStorage.setItem("login","sigining")
})
$(".sigin").bind("click",function(){//点击退出消除值的储存
    localStorage.setItem("load","");
})
$(".h_font").click(function(){
    $(this).css("font-weight","bold");
})


$(function(){
    $(document).scroll(function(){
        if($(document).scrollTop()>163){
            $(".hid").css({"display":"block","position":"fixed","top":0});
            $(".hid .roseonly-logo").css("border","none");
            $(".hid .roseonly-logo").width(120);
            $(".hid .roseonly-logo").height(38);
            
        }else{
            $(".hid").css("display","none")
        }
    })
})


$(".topmenu_1_qxlm").click(function(){//新品
    location.href="./x_goodsList.html"
    localStorage.setItem("type","xinping");
})
$(".topmenu_1 aili").click(function(){//爱礼
    location.href="./x_goodsList.html"
    localStorage.setItem("type","aili");
})
$(".shengri").click(function(){//生日
    location.href="./x_goodsList.html"
    localStorage.setItem("type","shengri");
})
$(".ta").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","ta");
})
$(".lihe").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","lihe");
})
$(".xianhua").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","xianhua");
})
$(".meiguichanghe").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","meiguichanghe");
})
$(".jingdianyongxu").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","jingdianyongxu");
})
$(".zhi").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","19zhi80cm");
})
$(".yongsheng").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","yongshengmeigui");
})
$(".yinyuemeigui").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","yinyuemeigui");
})
$(".yinyue").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","yinyue");
})
$(".juxing").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","juxing");
})
$(".meiguizhubao").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","meiguishipin");
})
$(".xianglian").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","xianglian");
})

$(".jin").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","18kjingxiang");
})
$(".shipin").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","shiping");
})
$(".ershi").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","erhuan");
})
$(".gong").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","meiguigongzai");
})
$(".bai").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","yindujin");
})
$(".jiaju").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","jiaju");
})
$(".sanxiang").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","sanxiang");
})
$(".jingdianyongxu1").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","jingdianyongxu1");
})
$(".dan").click(function(){
    location.href="./x_goodsList.html"
    localStorage.setItem("type","danzhi");
})













