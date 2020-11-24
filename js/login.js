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
 
    // pwInp.placeholder = '请输入短信验证码';
    upass.className='input-row row-captcha';
    upass.removeChild(inptbox);
    upass.innerHTML =" <input class='input-txt captcha-box' type='text' name='password' autofocus placeholder='请输入短信验证码' id='input4'>  <a href='javascript:void(0)' id='sendCode' class='send-captcha disabled'>获取验证码</a> "
    }else{
     upass.className='input-row row-pwd';
     upass.removeChild(document.getElementById("input4"));
     upass.innerHTML = " <div class='input-box'  id='pwd'><input class='input-txt' type='text' name='password' autofocus placeholder='请输入密码' id='input4'></div>"
    }
}

}
