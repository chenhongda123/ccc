// 附页02page的轮播图
var timer = setInterval(autoPlay, 50);
var num = 0;

function autoPlay() {
    $id("u").style.left = num + "px";
    num -= 2;
    if (num <= -1200) {
        num = 0;
    }
}
//鼠标移入到容器 停止定时器 
$id("box").onmouseover = function() {
        clearInterval(timer);
    }
    //鼠标离开启动定时器
$id("box").onmouseout = function() {
    timer = setInterval(autoPlay, 20);
}



// 附页1 page 遮罩层
var kezi = document.getElementById('ke'); //免费激光镌刻(按钮)
var zZ = document.getElementById('zhezhao'); //遮罩层
var gB = document.getElementById('guanBi'); //右上角的关闭按钮
var inp = document.getElementById('inp'); //input框
var sC = document.getElementById('shanChu'); //删除按钮
var yes = document.getElementById('yes');
var no = document.getElementById('no');
kezi.onclick = function() {
    zZ.style.display = 'block';
}
gB.onclick = function() {
    zZ.style.display = "none";
}
no.onclick = function() {
    zZ.style.display = 'none';
}
yes.onclick = function() {
    zZ.style.display = 'none';
    kezi.style.borderColor = '#ea413c';
    kezi.style.color = '#ea413c';
}
sC.onclick = function() {
    inp.value = " ";
}