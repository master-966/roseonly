
$(function () {
    $.ajax({
        url: './w_banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var resultlis3 = '';
            var resultdls3 = '';
            var json3 =json.banner3.imgurl;

            $.each(json3, function (index, item) {
                if (index <= 3) {
                    resultlis3 +=
                        `
                        <li>
                            <a href="">
                                 <img src="${json3[index]}" alt="">
                            </a>
                        </li> 
                        `
                } else  {
                    resultdls3 +=
                        `
                        <dl>
                            <a href="">
                                 <img src="${json3[index]}" alt="">
                            </a>
                        </dl> 
                        `
                }
                
            });
            $('.w_lisbanner3').html(resultlis3);
            $('.w_lis2banner3').html(resultdls3);
        }
    });
})










