
$(function () {
    $.ajax({
        url: './w_banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var resultlis = '';
            var resultdls = '';
            var resultlis2 = '';
            var resultdls2 = '';
            var json1 =json.banner1.imgurl;
            var json2 =json.banner2.imgurl;

            $.each(json1, function (index, item) {
                if (index <= 3) {
                    resultlis +=
                        `
                        <li>
                            <a href="">
                                 <img src="${json1[index]}" alt="">
                            </a>
                        </li> 
                        `
                } else  {
                    resultdls +=
                        `
                        <dl>
                            <a href="">
                                 <img src="${json1[index]}" alt="">
                            </a>
                        </dl> 
                        `
                }
                
            });
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
            $('.w_lisbanner1').html(resultlis);
            $('.w_lis2banner1').html(resultdls);
            $('.w_lisbanner2').html(resultlis2);
            $('.w_lis2banner2').html(resultdls2);
        }
    });
})










