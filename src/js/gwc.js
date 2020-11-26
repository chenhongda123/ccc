// 一打开购物车页面，展示购物车里面的商品
function showTbody() {
    $.ajax({
        url: "./server/showlist.php",
        success: function(res) {
            // console.log(res);
            if (res.code) {
                var arr = res.data;
                if (res.data) {
                    // 如果有商品，table显示,div隐藏
                    $('#box').show();
                    $('.no').hide();
                    // 在table里面展示商品信息
                    $('#tbody').empty();
                    $.each(arr, function(index, item) {
                        $('#tbody').append(`
                    <ol id="${item.product_id}">
                        <li class="one yi">${item.product_name}</li>
                        <li class="two er">
                        <img src="${item.product_img}" alt="" class="tu_img">
                        </li>
                        <li class="three san">￥${item.product_price}</li>
                        <li class="three si">
                        <span class='add'>+</span>
                        <span class="num">${item.product_num}</span>
                        <span class='jian'>-</span>
                        </li>
                        <li class="del">删除商品</li>
                    </ol>
                        `)
                    })
                }
            } else {
                // 如果没有商品，table显示,div隐藏,行数为0，查到了，数据库以及没有了，但是页面要删除
                $('#box').hide();
                $('.no').show();
            }
        },
        dataType: 'json',
        cache: false, //清除缓存
    })
}
showTbody();

// 点击+增加一个商品数量，点击-减少一个商品数量
$('#tbody').click(function(e) {
    // console.log(e.target);
    var target = e.target;
    // target是一个dom节点
    if ((target.className == "add") || (target.className == "jian")) {
        // 点击+增加一个商品数量,点击-减少一个商品数量
        $.ajax({
            url: './server/updatewq.php',
            data: {
                type: target.className,
                id: $(target).parents('ol').attr('id')
            },
            success: function(res) {
                // console.log(res);
                if (res.code) {
                    showTbody() //重新请求展示
                }
            },
            dataType: 'json'
        })
    } else if (target.className == "del") {
        // 点击删除按钮删除一个商品
        $.ajax({
            url: './server/delwq.php',
            data: {
                id: $(target).parents('ol').attr('id')
            },
            success: function(res) {
                // console.log(res);
                if (res.code) {
                    showTbody() //重新请求展示
                }
            },
            dataType: 'json'
        })
    }
})


$('body').bind('selectstart', function() {
    return false;
})