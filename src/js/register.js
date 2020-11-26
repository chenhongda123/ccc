var btn = document.getElementById('sbmt01');
var nameInp = document.getElementById('input1');
var pwInp = document.getElementById('input2');

  btn.onclick = function(){
    var uname = nameInp.value;
    var pw = pwInp.value;
    postSend('./server/register.php', function(data) {
      // 3 获取login.php返回的结果,来进行下一步
      console.log(data);
      data = JSON.parse(data); //值没转换，是字符串
      // 4： 如果登录成功,跳转购物车页面
      if (data.code == 1) {
          location.href = "./denglu.html";
      } else {
          p.innerHTML = data.msg
      }
  }, `username=${uname}&password=${pw}`);
}

  