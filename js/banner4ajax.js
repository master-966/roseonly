
$(function () {
    $.ajax({
        url: './w_banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var resultlis4 = '';
            var resultdls4 = '';
            var json4 =json.banner4.imgurl;
            $.each(json4, function (index, item) {
                if (index <= 3) {
                    resultlis4 +=
                        `
                        <li>
                            <a href="">
                                 <img src="${json4[index]}" alt="">
                            </a>
                        </li> 
                        `
                } else {
                    resultdls4 +=
                        `
                        <dl>
                            <a href="">
                                 <img src="${json4[index]}" alt="">
                            </a>
                        </dl> 
                        `
                }
            });
            $('.w_lisbanner4').html(resultlis4);
            $('.w_lis2banner4').html(resultdls4);
        }
    });
})


$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})









