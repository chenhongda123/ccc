// 1: 封装一个setCookie方法用来设置
function setCookie(key, value, expires) {
    // 接收三个参数
    // key:你要设置的cookie的属性名
    // value:你要设置的cookie的属性值
    // expires:你要设置的cookie的过期时间,单位是秒,这个参数可以不传递,不传递默认使用session

    if (expires) {
        var time = new Date();
        time.setTime(time.getTime() - 8 * 60 * 60 * 1000 + 1000 * expires);
        document.cookie = key + "=" + value + ";expires=" + time;
    } else {
        document.cookie = key + "=" + value;
    }
}


// 2: 封装一个getCookie方法用来获取 
// 将来使用的时候,getCookie(你要获取的cookie的key)
// 返回值就是你要获取的这一条cookie的value 
function getCookie(key) {
    str = "";
    var tmp = document.cookie.split('; ');
    for (var i = 0; i < tmp.length; i++) {
        var t = tmp[i].split('=');
        if (t[0] === key) {
            str = t[1];
        }
    }
    return str;
}