$(function () {
    $.ajax({
        url: './json/t_pinpaigushi.json',
        type: "get",
        datatype: "json",
        cache: false,
        success: function (json) {
            var results = "";
            $.each(json, function (index, item) {
                results += `<div class="news">
                <div class="imgs">
                <img src="${item.imgurl}" alt="">
                </div>
                <h5>${item.con}</h5>
                <p>${item.introduce}</p>
                
                </div>`
            });
            $(".conent").html(results);
        }
    });
})
var arr = ["https://www.roseonly.com.cn/nuoshi/pinpaigushi/380.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/324.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/220.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/379.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/378.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/210.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/52.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/371.html", "https://www.roseonly.com.cn/nuoshi/pinpaigushi/364.html"]

$('.conent').on('click', '.news', function () {
    var self=this;
    $(".news").each(function (index, item) {
        if (self == item) {
            location.href = arr[index]
        }
    })
})




$(".conent").on("mouseover", ".news", function () {

    $(this).find("img").css({

        width: 270,
        height: 270
    })
})
$(".conent").on("mouseout", ".news", function () {
    $(this).find("img").css({
        width: 257,
        height: 257
    })
})

$(function(){
    $(".hidhead").load("./T_header.html");
    $(".foot").load("./d_foot.html");
})
