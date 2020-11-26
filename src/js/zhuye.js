// 3：注册
// var zhuce = document.getElementById('zhuce'); //注册
// var tmc = document.getElementById('tmc'); //透明层
// var xx = document.getElementById('xx'); //关闭按钮
// zhuce.onclick = function() {
//     tmc.style.display = 'block';
// }
// xx.onclick = function() {
//     tmc.style.display = "none";
// }




// 4: 秒杀
var timeText = document.getElementById('timeText');
var hNum = document.getElementById('hNum');
var mNum = document.getElementById('mNum');
var sNum = document.getElementById('sNum');

getTime();
// 设置计时器,不断获取时间,刷新页面
// setInterval(函数,间隔的时间:毫秒);
setInterval(getTime, 1000); //每隔1秒刷新时间
// 封装函数，获取当前的时间
function getTime() {
    // 获取电脑的当前时间
    var odate = new Date();
    // 获取小时
    var hours = odate.getHours();
    // 获取分钟
    var mintes = odate.getMinutes();
    // 获取秒
    var secondes = odate.getSeconds();
    // 判断当前小时是奇数还是偶数
    if (hours % 2 == 0) {
        timeText.innerHTML = hours + ':00';
        // 小时位置的显示数字01,一小时以内显示01
        hNum.innerHTML = "01";
    } else {
        timeText.innerHTML = (hours - 1) + ':00';
        // 小时位置的显示数字00,不足一小时以内显示00
        hNum.innerHTML = "00";
    }
    // 分钟判断是否小于10
    if ((59 - mintes) < 10) {
        mNum.innerHTML = "0" + (59 - mintes);
    } else {
        mNum.innerHTML = 59 - mintes;
    }
    if ((59 - secondes) < 10) {
        sNum.innerHTML = "0" + (59 - secondes);
    } else {
        sNum.innerHTML = 59 - secondes;
    }
}