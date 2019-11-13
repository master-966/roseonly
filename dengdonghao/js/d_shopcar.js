//ajax请求
// $.ajax({
//     url: './data/data.json',
//     type: 'get',
//     cache: false,
//     dataType: 'json',
//     success: function (json) {
//         var type=localStorage.getItem('list')
//     }
// })

//获取本地渲染购物车
if (localStorage.getItem('load')) {
    $.ajax({
        url: './data/data.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (json) {
            var car = JSON.parse(localStorage.getItem('car')) //数组[{type:xinping,code:2,num:5},{type:xinping,code:2,num:5}]
            $.each(car, function (a, b) {
                json[b.type].code[b.code]
                $('#d_nav').append(`
                    <div class="d_nav">
                        <input type="checkbox" class="d_check">
                        <span class="d_span1">roseonly</span>
                        <div class="d_img"><img src=${json[b.type].imgurl[b.code]} alt=""></div>
                        <p>${json[b.type].title[b.code]}</p>
                        <i>${json[b.type].price[b.code]}</i>
                        <div class="d_dd">
                            <span class="d_bnt1">-</span>
                            <input type="text" class="d_txt1" value='${b.num}'>
                            <span class="d_bnt2">+</span>
                        </div>
                        <em>删除</em>
                    </div>

                `)
            })
            $('.d_nav .d_check').prop('checked', true)
            $('.d_div3 input').prop('checked', true)
            var sum = 0
            $('.d_nav .d_dd .d_txt1').each(function (a, b) {
                if ($('.d_check').eq(a).prop("checked")) {
                    sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
                }
            })
            $('.d_div4 .d_span1').html(`合计：￥${sum}`)
        }
    })
} else {
    $('#d_nav').append(`
    <h2>亲，点击登陆哦~</h2>
    `)

}

//登陆
$('#d_nav').on('click','h2',function(){
    location.href='./d_load.html'
})



//底部边框
if ($('#d_nav').html()) {
    $('#d_nav').css({
        borderBottom: '1px solid #414141'
    })
}

//按钮减
$('#d_nav').on('click', '.d_bnt1', function () {
    var self = this
    $('.d_bnt1').each(function (a, b) {
        if (self == b) {
            if ($('.d_nav .d_dd .d_txt1').eq(a).val() == 1) {
                return
            }
            $('.d_nav .d_dd .d_txt1').eq(a).val($('.d_nav  .d_dd .d_txt1').eq(a).val() - 1)
            var car = JSON.parse(localStorage.getItem('car'))
            car[a].num = $('.d_nav  .d_dd .d_txt1').eq(a).val()
            localStorage.setItem('car', JSON.stringify(car))
        }
    })
    var sum = 0
    $('.d_nav .d_dd .d_txt1').each(function (a, b) {
        if ($('.d_check').eq(a).prop("checked")) {
            sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
        }
    })
    $('.d_div4 .d_span1').html(`合计：￥${sum}`)


})

//按钮加
$('#d_nav').on('click', '.d_bnt2', function () {
    var self = this
    $('.d_bnt2').each(function (a, b) {
        if (self == b) {
            if ($('.d_nav .d_dd .d_txt1').eq(a).val() == 99) {
                return
            }
            $('.d_nav  .d_dd .d_txt1').eq(a).val($('.d_nav  .d_dd .d_txt1').eq(a).val() - 0 + 1)
            var car = JSON.parse(localStorage.getItem('car'))
            car[a].num = $('.d_nav  .d_dd .d_txt1').eq(a).val()
            localStorage.setItem('car', JSON.stringify(car))
        }
    })
    var sum = 0
    $('.d_nav .d_dd .d_txt1').each(function (a, b) {
        if ($('.d_check').eq(a).prop("checked")) {
            sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
        }
    })
    $('.d_div4 .d_span1').html(`合计：￥${sum}`)
})

//删除
$('#d_nav').on('click', 'em', function () {
    var self = this
    $('#d_nav em').each(function (a, b) {
        if (self == b) {
            b.parentElement.remove()
            var car = JSON.parse(localStorage.getItem('car'))
            car.splice(a, 1)
            localStorage.setItem('car', JSON.stringify(car))
        }
    })
    if ($('#d_nav').find('.d_nav').length) {
        $('#d_nav').css({
            borderBottom: '1px solid #414141'
        })
    } else {
        $('#d_nav').css({
            borderBottom: 0
        })
    }
    var sum = 0
    $('.d_nav .d_dd .d_txt1').each(function (a, b) {
        if ($('.d_check').eq(a).prop("checked")) {
            sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
        }
    })
    $('.d_div4 .d_span1').html(`合计：￥${sum}`)
})

//多选框
$('#d_nav').on('click', '.d_check', function () {
    var bool = true
    $('.d_check').each(function (a, b) {
        if (!$(this).prop("checked")) {
            $('.d_div3 input').prop('checked', false)
            bool = false
            return
        }
    })
    $('.d_div3 input').prop('checked', bool)
    var sum = 0
    $('.d_nav .d_dd .d_txt1').each(function (a, b) {
        if ($('.d_check').eq(a).prop("checked")) {
            sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
        }
    })
    $('.d_div4 .d_span1').html(`合计：￥${sum}`)

})

//全选框
$('.d_div3 input').click(function () {
    $('.d_check').each(function (a, b) {
        $(b).prop("checked", $('.d_div3 input').prop('checked'))
    })
    var sum = 0
    $('.d_nav .d_dd .d_txt1').each(function (a, b) {
        if ($('.d_check').eq(a).prop("checked")) {
            sum += Number($('.d_nav i').eq(a).html()) * $('.d_nav .d_dd .d_txt1').eq(a).val()
        }
    })
    $('.d_div4 .d_span1').html(`合计：￥${sum}`)
})

//清空购物车

$('.d_div1 .d_span2').click(function(){
    if (localStorage.getItem('load')) {
        $('#d_nav').css({
            borderBottom: 0
        })
        $('#d_nav').html('')
        localStorage.setItem('car', JSON.stringify([]))
        $('.d_div4 .d_span1').html(`合计：￥0`)    
    }
})


$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})