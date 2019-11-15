$(function () {
    $('.x_header').load('./T_header.html');
    $('.x_foot').load('./d_foot.html');
    $.ajax({
        url: './data/data.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (json) {
            //获取本地type
            var type = localStorage.getItem('type')

            //保存获取的数据
            var data = json[type]

            //渲染页面
            $('.x_img').html(`<img src='${data.bgimg}'></img>`)
            $.each(data.code, function (a, b) {
                $('.x_goodsList').append(`
                <div class="x_goods" code='${data.code[a]}'>
                    <a href="#">
                    <img src="${data.imgurl[a]}" alt="">
                    <p>${data.title[a]}</p>
                    <span>${data.introduce[a]}</span>
                    <p>￥${data.price[a]}</p>
                   </a>
                </div>
                `)
            })
            var arrcode = JSON.parse(JSON.stringify(data.code))
            var codescreen

            //页面销量排序
            $('#x_sales').click(function () {
                $('#x_top').css({color:'#9d9d9d'})
                $('#x_buttom').css({color:'#9d9d9d'})

                if (codescreen) {
                    var arrcode1 = JSON.parse(JSON.stringify(codescreen)) || JSON.parse(JSON.stringify(arrcode))
                } else {
                    var arrcode1 = JSON.parse(JSON.stringify(arrcode))
                }
                $(this).addClass('x_border')
                $('.x_addA').removeClass('x_border')
                $('#x_new').removeClass('x_border')
                var arrsales = []
                $.each(JSON.parse(JSON.stringify(data.amount)), function (a, b) {
                    $.each(arrcode1, function (i, v) {
                        if (a == v) {
                            arrsales.push(b)
                        }
                    })
                })

                for (var i = 0; i < arrsales.length - 1; i++) {
                    for (var j = 0; j < arrsales.length; j++) {
                        if (arrsales[j] < arrsales[j + 1]) {
                            var num = arrsales[j]
                            arrsales[j] = arrsales[j + 1]
                            arrsales[j + 1] = num
                            var num1 = arrcode1[j]
                            arrcode1[j] = arrcode1[j + 1]
                            arrcode1[j + 1] = num1
                        }
                    }
                }
                $('.x_goodsList').html('')
                $.each(arrcode1, function (a, b) {
                    $.each(data.code, function (i, v) {
                        if (b == v) {
                            $('.x_goodsList').append(`
                            <div class="x_goods" code='${data.code[i]}'>
                                <a href="#">
                                <img src="${data.imgurl[i]}" alt="">
                                <p>${data.title[i]}</p>
                                <span>${data.introduce[i]}</span>
                                <p>￥${data.price[i]}</p>
                               </a>
                            </div>
                            `)
                        }
                    })
                })

            })

            var bool = true
            //页面价格排序
            $('#x_pag').click(function () {
                if (codescreen) {
                    var arrcode1 = JSON.parse(JSON.stringify(codescreen)) || JSON.parse(JSON.stringify(arrcode))
                } else {
                    var arrcode1 = JSON.parse(JSON.stringify(arrcode))
                }
                $("#x_sales").removeClass('x_border')
                $('.x_addA').removeClass('x_border')
                $('#x_new').removeClass('x_border')
                var arrpag = []
                $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                    $.each(arrcode1, function (i, v) {
                        if (a == v) {
                            arrpag.push(b)
                        }
                    })
                })
                bool = !bool
                if (bool) {
                    $('#x_buttom').css({color:'#414141'})
                    $('#x_top').css({color:'#9d9d9d'})
                    for (var i = 0; i < arrpag.length - 1; i++) {
                        for (var j = 0; j < arrpag.length; j++) {
                            if (arrpag[j] < arrpag[j + 1]) {
                                var num = arrpag[j]
                                arrpag[j] = arrpag[j + 1]
                                arrpag[j + 1] = num
                                var num1 = arrcode1[j]
                                arrcode1[j] = arrcode1[j + 1]
                                arrcode1[j + 1] = num1
                            }
                        }
                    }

                } else {
                    $('#x_top').css({color:'#414141'})
                    $('#x_buttom').css({color:'#9d9d9d'})
                    for (var i = 0; i < arrpag.length - 1; i++) {
                        for (var j = 0; j < arrpag.length; j++) {
                            if (arrpag[j] > arrpag[j + 1]) {
                                var num = arrpag[j]
                                arrpag[j] = arrpag[j + 1]
                                arrpag[j + 1] = num
                                var num1 = arrcode1[j]
                                arrcode1[j] = arrcode1[j + 1]
                                arrcode1[j + 1] = num1
                            }
                        }
                    }
                }

                $('.x_goodsList').html('')
                $.each(arrcode1, function (a, b) {
                    $.each(data.code, function (i, v) {
                        if (b == v) {
                            $('.x_goodsList').append(`
                            <div class="x_goods" code='${data.code[i]}'>
                                <a href="#">
                                <img src="${data.imgurl[i]}" alt="">
                                <p>${data.title[i]}</p>
                                <span>${data.introduce[i]}</span>
                                <p>￥${data.price[i]}</p>
                               </a>
                            </div>
                            `)
                        }
                    })
                })
            })


            //筛选价格
            $('.x_addI')[0].oninput = function () {
                $('#x_top').css({color:'#9d9d9d'})
                $('#x_buttom').css({color:'#9d9d9d'})

                codescreen = []
                var txt1 = $('.x_addI').eq(0).val() - 0
                var txt2 = $('.x_addI').eq(1).val() - 0
                if (txt1 && txt2) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b >= txt1 && b <= txt2) {
                            codescreen.push(a)
                        }
                    })
                }
                if (!txt1) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b <= txt2) {
                            codescreen.push(a)
                        }
                    })

                }
                if (!txt2) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b >= txt1) {
                            codescreen.push(a)
                        }
                    })
                }
                $('.x_goodsList').html('')
                $.each(codescreen, function (a, b) {
                    $.each(data.code, function (i, v) {
                        if (b == v) {
                            $('.x_goodsList').append(`
                            <div class="x_goods" code='${data.code[i]}'>
                                <a href="#">
                                <img src="${data.imgurl[i]}" alt="">
                                <p>${data.title[i]}</p>
                                <span>${data.introduce[i]}</span>
                                <p>￥${data.price[i]}</p>
                               </a>
                            </div>
                            `)
                        }
                    })
                })


            }
            $('.x_addI')[1].oninput = function () {
                $('#x_top').css({color:'#9d9d9d'})
                $('#x_buttom').css({color:'#9d9d9d'})

                codescreen = []
                var txt1 = $('.x_addI').eq(0).val() - 0
                var txt2 = $('.x_addI').eq(1).val() - 0
                if (txt1 && txt2) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b >= txt1 && b <= txt2) {
                            codescreen.push(a)
                        }
                    })
                }
                if (!txt1) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b <= txt2) {
                            codescreen.push(a)
                        }
                    })

                }
                if (!txt2) {
                    $.each(JSON.parse(JSON.stringify(data.price)), function (a, b) {
                        if (b >= txt1) {
                            codescreen.push(a)
                        }
                    })
                }
                $('.x_goodsList').html('')
                $.each(codescreen, function (a, b) {
                    $.each(data.code, function (i, v) {
                        if (b == v) {
                            $('.x_goodsList').append(`
                            <div class="x_goods" code='${data.code[i]}'>
                                <a href="#">
                                <img src="${data.imgurl[i]}" alt="">
                                <p>${data.title[i]}</p>
                                <span>${data.introduce[i]}</span>
                                <p>￥${data.price[i]}</p>
                               </a>
                            </div>
                            `)
                        }
                    })
                })
            }


            //综合排序
            $('.x_addA').click(function () {
                $('#x_top').css({color:'#9d9d9d'})
                $('#x_buttom').css({color:'#9d9d9d'})

                console.log(111)
                if (codescreen) {
                    var arrcode1 = JSON.parse(JSON.stringify(codescreen)) || JSON.parse(JSON.stringify(arrcode))
                } else {
                    var arrcode1 = JSON.parse(JSON.stringify(arrcode))
                }
                $("#x_sales").removeClass('x_border')
                $('.x_addA').addClass('x_border')
                $('#x_new').removeClass('x_border')
                var arrlist = []
                $('.x_goodsList').html('')
                $.each(JSON.parse(JSON.stringify(data.code)), function (a, b) {
                    $.each(arrcode1, function (i, v) {
                        if (a == v) {
                            arrlist.push(b)
                        }
                    })
                })
                $.each(arrcode1, function (a, b) {
                    $.each(data.code, function (i, v) {
                        if (b == v) {
                            $('.x_goodsList').append(`
                            <div class="x_goods" code='${data.code[i]}'>
                                <a href="#">
                                <img src="${data.imgurl[i]}" alt="">
                                <p>${data.title[i]}</p>
                                <span>${data.introduce[i]}</span>
                                <p>￥${data.price[i]}</p>
                               </a>
                            </div>
                            `)
                        }
                    })
                })
            })

            //储存本地值
            $('.x_goodsList').on('click', '.x_goods', function () {
                localStorage.setItem('list', JSON.stringify({
                    type: type,
                    code: $(this).attr('code')
                }))
                location.href = './d_buy.html'
            })
        }
    })
})