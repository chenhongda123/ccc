function getSend(url, cb) {
    // 1 创建ajax对象
    var xhr = new XMLHttpRequest()
        // 2 配置请求信息
    xhr.open('GET', url);
    // 3 接收响应
    xhr.onload = function() {
            // 调用函数cb的时候传入实参xhr.responseText,所以函数cb需要有一个形参接收
            cb(xhr.responseText);
        }
        // 4 发送请求
    xhr.send()
}

function postSend(url, cb, params) {
    // 1 创建ajax对象
    var xhr = new XMLHttpRequest();
    // 2 配置请求信息
    xhr.open('POST', url);
    // 3 接收响应
    xhr.onload = function() {
        // 调用函数cb的时候传入实参xhr.responseText,所以函数cb需要有一个形参接收
        cb(xhr.responseText);
    };
    // 4-0 设置请求头
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    // 4-1 发送请求
    xhr.send(params);
}