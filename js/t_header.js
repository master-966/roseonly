$(".lang").mouseover(function () {

    $(".cn").find("a").css("display", "block");

})

$(".lang").mouseleave(function () {

    $(".cn").find("a").css("display", "none");

})
$(".cart_num").click(function(){
    location.href='./d_shopcar.html';
})
$(".gouwuche").click(function(){
    location.href='./d_shopcar.html';
})

$(".h_dlzc").mouseover(function () {
    $(".header_toplogin_con").css("display", "block");
    $(".header_toplogin_con").mouseover(function () {
        $(this).css("display", "block");
    })
    $(".header_toplogin_con").mouseleave(function () {
        $(this).css("display", "none");
    })

})
if (localStorage.getItem("load")) {
    $(".login").html("个人中心");
    $(".signin").html("退出");
    var val = JSON.parse(localStorage.getItem("car"));
    if (val) {
        $(".cart_num").html(`(${val.length})`);
    } else {
        $(".cart_num").html(`(0)`);
    }
} else {
    $(".login").html("登录");
    $(".signin").html("注册");
    $(".cart_num").html(`(0)`);
}

$(".login").click(function () {
    if (!localStorage.getItem('load')) {
        localStorage.setItem("login", "logining");
        location.href("./d_load.html ");
    }
})

$(".signin").click(function () {
    if (localStorage.getItem('load')) {
        localStorage.setItem("login", "logining");
        localStorage.setItem("load", "");
    } else {
        localStorage.setItem("login", "sigining");
        location.href("./d_load.html ");
    }
})


// $(".login").addClass("login1") //添加类名给登录
// $(".sigin").addClass("sigin1") //添加类名给注册

// $(".login1").bind("click", function () { //点击登录给跳转页面，储存值
//     location.href("./d_load.html ");
//     localStorage.setItem("login", "logining");

// })
// $(".sigin1").bind("click", function () { //点击注册给注册页面，储存值
//     location.href("./d_load.html ");
//     localStorage.setItem("login", "sigining")
// })
// $(".sigin").bind("click", function () { //点击退出消除值的储存
//     localStorage.setItem("load", "");
// })
// $(".h_font").click(function () {
//     $(this).css("font-weight", "bold");
// })


$(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() > 163) {
            $(".hid").css({
                "display": "block",
                "position": "fixed",
                "top": 0
            });
            $(".hid .roseonly-logo").css("border", "none");
            $(".hid .roseonly-logo").width(120);
            $(".hid .roseonly-logo").height(38);

        } else {
            $(".hid").css("display", "none");
        }
    })
})


$(".topmenu_1_qxlm").click(function () { //新品
    console.log(111)
    localStorage.setItem("type", "xinping");
    location.href = "./x_goodsList.html";
})
$(".aili").click(function () { //爱礼
    console.log(222)
    localStorage.setItem("type", "aili");
    location.href = "./x_goodsList.html";
})
$(".shengri").click(function () { //生日

    localStorage.setItem("type", "shengri");
    location.href = "./x_goodsList.html";
})
$(".ta").click(function () {

    localStorage.setItem("type", "songgeita");
    location.href = "./x_goodsList.html";
})
$(".lihe").click(function () {

    localStorage.setItem("type", "lihe");
    location.href = "./x_goodsList.html";
})
$(".xianhua").click(function () {

    localStorage.setItem("type", "xianhua");
    location.href = "./x_goodsList.html";
})
$(".meiguichanghe").click(function () {

    localStorage.setItem("type", "meiguichanghe");
    location.href = "./x_goodsList.html";
})
$(".jingdianyongxu").click(function () {

    localStorage.setItem("type", "jingdianyongxu");
    location.href = "./x_goodsList.html";
})
$(".zhi").click(function () {

    localStorage.setItem("type", "19zhi80cm");
    location.href = "./x_goodsList.html";
})
$(".yonsgheng").click(function () {

    localStorage.setItem("type", "yongshengmeigui");
    location.href = "./x_goodsList.html";
})
$(".yinyuemeigui").click(function () {

    localStorage.setItem("type", "yinyuemeigui");
    location.href = "./x_goodsList.html";
})
$(".yinyue").click(function () {

    localStorage.setItem("type", "yinyue");
    location.href = "./x_goodsList.html";
})
$(".juxing").click(function () {

    localStorage.setItem("type", "juxing");
    location.href = "./x_goodsList.html";
})
$(".meiguizhubao").click(function () {

    localStorage.setItem("type", "meiguishipin");
    location.href = "./x_goodsList.html";
})

//加类名
$(".xianglian").click(function () {

    localStorage.setItem("type", "xianglian");
    location.href = "./x_goodsList.html";
})

$(".jin").click(function () {

    localStorage.setItem("type", "18kjingxiang");
    location.href = "./x_goodsList.html";
})
$(".shipin").click(function () {

    localStorage.setItem("type", "shiping");
    location.href = "./x_goodsList.html";
})
$(".ershi").click(function () {

    localStorage.setItem("type", "erhuan");
    location.href = "./x_goodsList.html";
})
$(".gong").click(function () {

    localStorage.setItem("type", "meiguigongzai");
    location.href = "./x_goodsList.html";
})
$(".bai").click(function () {

    localStorage.setItem("type", "yindujin");
    location.href = "./x_goodsList.html";
})
$(".jiaju").click(function () {

    localStorage.setItem("type", "jiaju");
    location.href = "./x_goodsList.html";
})
$(".sanxiang").click(function () {

    localStorage.setItem("type", "sanxiang");
    location.href = "./x_goodsList.html";
})
$(".jingdianyongxu1").click(function () {

    localStorage.setItem("type", "jingdianyongxu1");
    location.href = "./x_goodsList.html";
})
$(".dan").click(function () {
    localStorage.setItem("type", "danzhi");
    location.href = "./x_goodsList.html";
})