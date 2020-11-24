var topArr = document.querySelectorAll("div .login-title");
var pwInp = document.getElementById("input4");
var upass = document.getElementById("upass");
var prevIndex = 0;
  console.log(topArr)
 console.log( document.getElementById("input4"));
 console.log( document.getElementById("upass"));
for (var i = 0, len = topArr.length; i < len; i++){
    topArr[i].index = i
  
topArr[i].onclick = function(){
    topArr[prevIndex].className = 'login-title'
    topArr[this.index].className = 'login-title active'
    prevIndex = this.index

  if (this.index == 1) {
  var inptbox = document.getElementById("pwd");
//   var found = document.getElementById("found");
    // pwInp.placeholder = '请输入短信验证码';
    upass.className='input-row row-captcha';
    upass.removeChild(inptbox);
    upass.innerHTML =` <input class='input-txt captcha-box' type='text' name='password' autofocus placeholder='请输入短信验证码' id='input4'>  <a href='javascript:void(0)' id='sendCode' class='send-captcha disabled'>获取验证码</a> `

    }else{
     upass.className='input-row row-pwd';
     upass.removeChild(document.getElementById("input4"));
     upass.innerHTML = ` <div class='input-box'  id='pwd'><input class='input-txt' type='text' name='password' autofocus placeholder='请输入密码' id='input4'></div>`
    
    }
}

}



//登录
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

