
$(function () {
    $.ajax({
        url: './w_banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var resultlis = '';
            var resultdls = '';
            var json1 =json.banner1.imgurl;
            $.each(json1, function (index, item) {
                if (index <= 4) {
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
            $('.w_lisbanner1').html(resultlis);
            $('.w_lis2banner1').html(resultdls);
        }
    });
})

$(function(){
    $('#foot').load('./d_foot.html')    
    $('#head').load('./	T_header.html')
})










