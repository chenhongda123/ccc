


var btn = document.getElementById('sbmt02');
var nameInp = document.getElementById('input3');
var pwInp = document.getElementById('input4');
var p = document.querySelector('#wrong');

btn.onclick = function() {
    //获取用户名和密码
    var uname = nameInp.value; //用户名
    var pw = pwInp.value; //密码
    // 2： 通过ajax请求login.php,进行登录验证
    postSend('./server/login.php', function(data) {
        // 3 获取login.php返回的结果,来进行下一步
        // console.log(data);
        data = JSON.parse(data); //值没转换，是字符串
        // 4： 如果登录成功,跳转购物车页面
        if (data.code == 1) {
            location.href = "./01index.html";
        } else {
            p.innerHTML = data.msg
        }
    }, `username=${uname}&password=${pw}`);
}




