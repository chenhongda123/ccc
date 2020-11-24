var btn = document.getElementById('sbmt01');
var nameInp = document.getElementById('input1');
var pwInp = document.getElementById('input2');
  btn.onclick = function(){
    var uname = nameInp.value;
    var pw = pwInp.value;
    postSend('./server/register.php',function(data){})
  }