// 1: 传入元素id,返回指定id元素
function $id(id) {
    return document.getElementById(id)
}

// 2：生成一个n到m之间的随机整数
function rand(n, m) {
    return n + parseInt(Math.random() * (m - n + 1));
}

// 3：生成一个16进制的随机颜色
function color() {
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += rand(0, 15).toString(16)
            // 把十进制的数字变成十六进制的字符串:0 1 ...9 a b c d f
    }
    return result;
}

// 4：传入一个数组和一个元素,判断数组中是否存在该元素,存在返回true,不存在返回false
function has(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (data === arr[i]) {
            //continue和break;
            //在此处,循环在函数中,return终止了函数执行,就是终止了循环
            return true;
        }
    }
    //如果函数能运行到此处,说明没有终止函数
    return false;
}
//传入一个数组,返回数组去重以后的结果,不改变原数组
function norepeat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!has(result, arr[i])) {
            //如果进入此处,说明arr[i]在result里面不存在,可以放进去
            result.push(arr[i])
        }
    }
    return result;
}


// 5：格式化时间:YYYY-MM-DD HH-mm-ss
//times是一个时间戳:指定时间距离格林威治时间的毫秒数,是可选参数
function formatDate(times) {
    var time = new Date;
    if (times) {
        //如果进入此处,说明time有实参赋值,因为如果没有实参赋值,他是undefined
        //如果传入参数,表示不是当前时间,是你指定的时间
        time.setTime(times)
    }
    //年
    var year = time.getFullYear();
    //月
    var month = time.getMonth() + 1; //month取值0-11之间,显示要变成1-12之间,所以+1
    //如果月份是一位数,前面要补0;
    month = month < 10 ? "0" + month : month;
    //日
    var date = time.getDate();
    //如果日是一位数,前面要补0;
    date = date < 10 ? "0" + date : date;
    //小时
    var hour = time.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    //分
    var minute = time.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    //秒
    var second = time.getSeconds();
    second = second < 10 ? "0" + second : second;
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}



// 6：获取滚动的距离{top:"",left:""}
function getScroll() {
    if (window.pageYOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.documentElement.scrollLeft) {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}


// 7：获取指定dom的指定样式值  【操作元素的样式】
// ==>dom:dom节点(标签名)
// ==>attr:要获取样式的属性名
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        //如果window.getComputedStyle不是undefined,说明是非IE浏览器
        return window.getComputedStyle(dom, null)[attr];
    } else {
        //如果window.getComputedStyle是undefined,说明是IE浏览器
        return dom.currentStyle[attr]
    }
}
// console.log(getStyle(div, "height"))




// 8： 封装一个没有兼容问题的全局的trim方法  (trim去除前后的空格)
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "")
}
// console.log("1" + trim(str) + "1");





//  9： move函数可以实现指定元素的单属性缓动到目标位置   (单属性缓动) 【运动函数】
//         ==>参数1:dom  要缓动的元素节点
//         ==>参数2:attr 要缓动的属性
//         ==>参数3:target 缓动到的目标值
//             ==>如果是透明度,目标值要乘100传入,同时css样式要书写opacity:初始值;
//         ==>参数4:fn    是一个可选参数,必须是一个函数,在动画完成以后执行这个函数里面的代码
function move(dom, attr, target, fn) {
    clearInterval(dom.timer)
        //每隔一段时间运动一段距离
    dom.timer = setInterval(function() {
        // 1 获取当前位置
        if (attr == "opacity") {
            var current = parseInt(getStyle(dom, attr) * 100)
        } else {
            var current = parseInt(getStyle(dom, attr))
        }
        // 2 计算速度
        var speed = target > current ? Math.ceil((target - current) / 10) : Math.floor((target - current) / 10)
            // 3 计算下一个位置
        var next = current + speed;
        // 4 点位元素
        if (next == target) { //这里是到位数
            if (attr == "opacity") {
                dom.style.opacity = target / 100;
                dom.style.filter = "alpha(opacity=" + target + ")"; //这个是考虑兼容问题
            } else {
                dom.style[attr] = target + "px"; //这是普通情况 (attr在这里加[]是代表变量)
            }
            clearInterval(dom.timer); //其实这个函数在这里已经走完了,要添加什么在此处代码下面添加
            if (fn) {
                //fn会在动画完成以后执行
                fn();
            }
        } else { // 如果不到位数，精确差点
            if (attr == "opacity") {
                dom.style.opacity = next / 100;
                dom.style.filter = "alpha(opacity=" + next + ")";
            } else {
                dom.style[attr] = next + "px"
            }
        }
    }, 50)
}
// move(box1, 'width', 800, function() {
//     move(box2, 'height', 0, function() {
//         move(box3, 'opacity', 0)
//     })
// })




//  10；animate:让指定元素的多属性同时缓动到指定目标    【多属性运动】（以后用animate，不用上面move函数）
//          ==>参数1:dom  要缓动的元素节点
//          ==>参数2:json     // 这里所有的属性不能有小数
//              {
//                 width:400,
//                 height:500,
//                 left:300,
//                 top:200,
//                 opacity:90,
//                 zIndex:9     (zIndex它的缓动不需要缓动，一步到位)
//              }
//         ==>参数3:fn  动画完成以后执行的函数
function animate(dom, json, fn) {
    clearInterval(dom.timer)
        //每隔一段时间,json里面的每个属性都变化一点
    dom.timer = setInterval(function() {
        //每次运动开始
        var flag = true; //如果后面有哪个属性没有到达目标位置,就把flag变成false
        //有几个属性，就要运动属性
        //json里面有几个键值对,就要运动几次
        for (var attr in json) {
            //1 获取当前位置
            if (attr == "opacity") {
                var current = parseInt(getStyle(dom, attr) * 100)
            } else {
                var current = parseInt(getStyle(dom, attr)); // zIndex没单位走的是这一步
            }
            //2 计算速度
            var target = parseInt(json[attr]); //以防万一传入单位，所以用parseInt
            var speed = target > current ? Math.ceil((target - current) / 10) : Math.floor((target - current) / 10);
            //3 计算下一次位置
            if (attr == "zIndex") {
                var next = target; //如果缓动的属性是zIndex,直接一步到位,不用缓动
            } else {
                var next = current + speed;
            }
            //4 定位元素
            if (attr == 'opacity') {
                dom.style.opacity = next / 100;
                dom.style.filter = "alpha(opacity=" + next + ")"
            } else if (attr == 'zIndex') {
                dom.style.zIndex = next;
            } else {
                dom.style[attr] = next + "px";
            }
            if (next != target) {
                flag = false;
            }
        }
        //本次运动结束,检查flag的值
        if (flag) {
            clearInterval(dom.timer);
            if (fn) {
                fn()
            }
        }
    }, 1000 / 60)
}



// 12：封装的map方法去重 (面向对象的方法)   (在字符串forEach里)
//传入一个数组，可以获取里面的值和索引
// Array.prototype.forMap = function(callback) {
//     var result = []; //传入个空数组
//     for (var i = 0; i < this.length; i++) { //遍历
//         result.push(callback(this[i], i))
//     }
//     return result;
// }
// var res = arr.forMap(function(val, i) {
//     return val * i;
// });
// // console.log(res)


// 13：封装forXunHuan方法:类似forEach    (面向对象的封装)
// Array.prototype.forXunHuan = function(callback) {
//     //实例对象方法里面的this就是实例 对象
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i], i)
//     }
// };
// arr.forXunHuan(function(val, i) {
//     //封装的时候传入的第一个实参是值,第二个实参是索引
//     console.log("我是最新的要你做的事情,我是第" + i + "个元素,我的值是" + val)
// })