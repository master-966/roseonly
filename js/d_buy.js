//设置最大值为99
$('#d_box1').on('keyup', '.d_txt', function () {
    if ($('.d_txt').val() - 0 >= 99) {
        $('.d_txt').val(99)
    }
})

//按钮加
$('#d_box1').on('click', '.d_b1', function () {
    if ($('.d_txt').val() == 99) {
        return
    }
    $('.d_txt').val($('.d_txt').val() - 0 + 1)
})

//按钮减
$('#d_box1').on('click', '.d_b2', function () {
    if ($('.d_txt').val() == 1) {
        return
    }
    $('.d_txt').val($('.d_txt').val() - 1)
})

//ajax请求
$.ajax({
    url: './data/data.json',
    type: 'get',
    cache: false,
    dataType: 'json',
    success: function (json) {
        var list = JSON.parse(localStorage.getItem('list'))
        $('#d_box1').html(`
        <img src="${json[list.type].imgurl[list.code]}" alt="" class="d_img1">
        <div class="d_right">
            <strong>${json[list.type].title[list.code]}</strong>
            <p>1025015</p>
            <div class="d_div1">价格：<span>￥${json[list.type].price[list.code]}</span></div>
            <div class="d_div2">颜色：<img src="${json[list.type].imgurl[list.code]}" alt=""></div>
            <div class="d_div3">
                <span>数量：</span>
                <div class="d_dd">
                    <input type="text" class="d_txt" value="1">
                    <div class="d_ddd">
                        <input type="button" class="d_b1" value="+">
                        <input type="button" class="d_b2" value="-">
                    </div>
                </div>
            </div>
            <div class="d_div4">
                <span class="d_span1">立即购买</span>
                <span class="d_span2">加入购物车</span>
            </div>
            <i>服务承诺：官方正品 免邮配送 同城速递</i>
        </div>
        `)
        window.json = json
    }
})

//加入购物车
$('#d_box1').on('click', '.d_div4 .d_span2', function () {
    if (localStorage.getItem('load')) {
        var list = JSON.parse(localStorage.getItem('list'))
        if (localStorage.getItem('car')) {
            var bool = false
            var car = JSON.parse(localStorage.getItem('car'))
            console.log(list)
            $.each(car, function (i, v) {
                if (list.type == v.type && list.code == v.code) {
                    bool = true
                }
            })
            if (bool) {
                $.each(car, function (i, v) {
                    if (list.type == v.type && list.code == v.code) {
                        v.num = Number(v.num) + Number($('.d_txt').val())
                        localStorage.setItem('car', JSON.stringify(car))
                    }
                })
            } else {
                car.push({
                    'type': list.type,
                    'code': list.code,
                    'num': $('.d_txt').val()
                })
                localStorage.setItem('car', JSON.stringify(car))
            }
        } else {
            localStorage.setItem('car', JSON.stringify([{
                'type': list.type,
                'code': list.code,
                'num': $('.d_txt').val()
            }]))
        }
        location.href = './d_shopcar.html'
    }else{
        alert('亲，请先登陆哦~')
    }
})

$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})