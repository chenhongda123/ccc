// 1 回到顶部
$(function() {
    // 1 通过浏览器卷曲的高度来决定按钮的显示和隐藏
    $(window).scroll(function() {
        // 通过浏览器卷曲的高度来决定
        if ($(window).scrollTop() >= 950) {
            // 让回到顶部按钮显示
            $('.hdb').fadeIn()
        } else {
            // 让回到顶部按钮隐藏
            $('.hdb').fadeOut()
        }
    })
})



// 2 附页02page的选项卡
$('ul>li').click(function() {
    $(this) //你点击的那一个li
        .addClass('active') //添加类名
        .siblings() //所有兄弟元素(不包括自己)
        .removeClass('active') //移除类名
        .parent() //找到父元素ul
        .next() //下一个兄弟元素ol
        .children() //ol下面的所有li
        .removeClass('active') //移除类名
        .eq($(this).index()) //找到索引和我点击的li对应的那一个
        .addClass('active') //添加active类名
})


// 3 首页轮播图(第一个)
var mySwiper = new Swiper('.box01', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2500
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
// 4 首页轮播图(第二个)
var mySwiper = new Swiper('.box02', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2500
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})




// 5 加入购物车
// 点击购物车，把商品加入数据库
var bh = $("#bianhao").html(); //商品编号
var mz = $("#mingzi").html(); //商品名字
var pr = $("#pr").html(); //商品价格
var tu = $('#tupian').attr('src'); //商品图片
var sl = $('#shuliang'); //商品数量
$('.gou').click(function() {
        $.ajax({
            url: './server/addwq.php',
            data: {
                id: bh,
                name: mz,
                price: pr,
                img: tu,
                num: sl.val(),
            },
            success: function(res) {
                // console.log(res);
                if (res.code) {
                    alert('商品加入成功')
                }
            },
            dataType: 'json',
        })
    })
    //点击查看购物车，进入购物车页面
$('#goumai').click(function() {
    location.href = "./gwc.html"
})



//6.商品数量的增加和减少
function changeNumber() {
    //获取商品数量
    var value = $('#shuliang').val();
    if (this.id == 'del') {
        value--;
        if (value <= 0) {
            value = 1;
            alert("宝贝数量必须大于0");
        }
    } else {
        value++;
    }
    $('#jia').parent().find($("#shuliang")).val(value);
    return false;
}
$('#jia').on('click', changeNumber)
$('#del').on('click', changeNumber)