if(localStorage.getItem('login')=='logining'){
    $('#d_load').css({
        display: 'block'
    });
    $('#d_login').css({
        display: 'none'
    });
}


if(localStorage.getItem('login')=='sigining'){
    $('#d_load').css({
        display: 'none'
    });
    $('#d_login').css({
        display: 'block'
    });
}


//登陆跳注册
$('#d_load .d_a1').click(function () {
    $('#d_load').css({
        display: 'none'
    });
    $('#d_login').css({
        display: 'block'
    });
})

//账号密码不为空则登陆按钮变色
$('#d_load .user').keyup(function () {
    if ($('#d_load .user input').val() && $('#d_load .pass  input').val()) {
        $('#d_load .d_span1').css({
            background: "#606060"
        })
    } else {
        $('#d_load .d_span1').css({
            background: "#c6c6c6"
        })
    }
})
$('#d_load .pass').keyup(function () {
    if ($('#d_load .user  input').val() && $('#d_load .pass  input').val()) {
        $('#d_load .d_span1').css({
            background: "#606060"
        })
    } else {
        $('#d_load .d_span1').css({
            background: "#c6c6c6"
        })
    }
})



//注册跳登陆
$('#d_login .d_a2').click(function () {
    $('#d_load').css({
        display: 'block'
    });
    $('#d_login').css({
        display: 'none'
    });
})

//随机数
function road() {
    var num = ''
    for (var i = 0; i < 4; i++) {
        num += Math.round(Math.random() * 9)
    }
    return num
}

//随机验证码
$('#d_login .d_yan span').html(road())

//跟新验证码
$('#d_login .d_yan span').click(function () {
    $('#d_login .d_yan span').html(road())
})

//注册验证
$('#d_login .d_span1').click(function () {
    var d_bool = true;

    //验证手机号
    var regphone = /^[0-9]{11}$/
    if (regphone.test($('#d_login .d_div1 input').val())) {
        $('#d_login .d_div1 .span2').html('√')
        $('#d_login .d_div1 .span2').css({
            color: 'green'
        })
    } else {
        $('#d_login .d_div1 .span2').html('×')
        $('#d_login .d_div1 .span2').css({
            color: 'red'
        })
        d_bool = false
    }

    //验证验证码
    if ($('#d_login .d_yan input').val() == $('#d_login .d_yan .span1').html()) {
        $('#d_login .d_yan .span2').html('√')
        $('#d_login .d_yan .span2').css({
            color: 'green'
        })
    } else {
        $('#d_login .d_yan .span2').html('×')
        $('#d_login .d_yan .span2').css({
            color: 'red'
        })
        d_bool = false
    }

    //验证密码
    var regpass = /^[a-zA-Z]{1}[0-9a-zA-Z]{5,15}$/
    if (regpass.test($("#d_login .d_div5 input").val())) {
        $('#d_login .d_div5 .span2').html('√')
        $('#d_login .d_div5 .span2').css({
            color: 'green'
        })
    } else {
        $('#d_login .d_div5 .span2').html('×')
        $('#d_login .d_div5 .span2').css({
            color: 'red'
        })
        d_bool = false
    }

    //用d_bool来判断是否发送请求
    if (d_bool) {
        $.ajax({
            url: './data/login2.php',
            type: 'get',
            cache: false,
            data: `act=add&user=${$('#d_login .d_div1 input').val()}&pass=${$("#d_login .d_div5 input").val()}`,
            dataType: 'json',
            success: function (json) {
                alert(json.msg)
                if (json.msg == '注册成功') {
                    $('#d_load').css({
                        display: 'block'
                    });
                    $('#d_login').css({
                        display: 'none'
                    });
                }

            }
        })
    }
})


//登陆请求
$('#d_load .d_span1').click(function () {
    $.ajax({
        url: './data/login2.php',
        type: 'get',
        cache: false,
        data: `act=login&user=${$('#d_load .user input').val()}&pass=${$('#d_load .pass  input').val()}`,
        dataType: 'json',
        success: function (json) {
            alert(json.msg)
            if (json.msg == '登陆成功') {
                location.href = './	T_index.html'
                localStorage.setItem('load','true')
            }
        }
    })
})


$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})