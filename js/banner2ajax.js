
$(function () {
    $.ajax({
        url: './w_banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var resultlis2 = '';
            var resultdls2 = '';
            var json2 =json.banner2.imgurl;           
            $.each(json2, function (index, item) {
                if (index <= 1) {
                    resultlis2 +=
                        `
                        <li>
                            <a href="">
                                 <img src="${json2[index]}" alt="">
                            </a>
                        </li> 
                        `
                } else {
                    resultdls2 +=
                        `
                        <dl>
                            <a href="">
                                 <img src="${json2[index]}" alt="">
                            </a>
                        </dl> 
                        `
                }
            });
            $('.w_lisbanner2').html(resultlis2);
            $('.w_lis2banner2').html(resultdls2);
        }
    });
})

$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})










