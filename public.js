/**
 * 1、JS常用方法函数集合
 * 2、前端成员分模块提交方法，例如：域名相关函数、数组处理函数、对象处理函数等等等
 * 3、做好注释，方法名、参数类型、参数名、参数说明以及上传人姓名时间
 */




/************** 域名相关函数 **************/

/**
 * 判断是否是域名
 * chao.yong 2020/08/09
 * @param {String} str 域名检测项
 */
function isym(str) {
    str = str.toLowerCase();
    var hz = '.com,.net,.org,.biz,.info,.name,.mobi,.tel,.xxx,.ac,.ag,.am,.asia,.at,.co,.be,.bz,.ca,.cc,.ch,.cm,.cx,.cz,.de,.ac.cn,.bj.cn,.sh.cn,.tj.cn,.cq.cn,.he.cn,.sx.cn,.nm.cn,.ln.cn,.jl.cn,.hl.cn,.js.cn,.zj.cn,.ah.cn,.fj.cn,.jx.cn,.sd.cn,.ha.cn,.hb.cn,.hn.cn,.gd.cn,.gx.cn,.hi.cn,.sc.cn,.gz.cn,.yn.cn,.xz.cn,.gs.cn,.qh.cn,.nx.cn,.xj.cn,.tw.cn,.mo.cn,.com.cn,.net.cn,.sn.cn,.org.cn,.hk.vc,.hk.cn,.sale,.wang,.xyz,.pro,.xin,.app,.vip,.top,.cn,.tv,.hk,.ng,.la,.in,.pw,.sx,.me,.gg,.gs,.st,.us,.dk,.ec,.es,.eu,.fm,.fr,.gd,.gl,.gr,.gy,.hn,.ht,.im,.io,.it,.je,.jp,.ki,.lc,.li,.lu,.lv,.md,.mg,.mn,.ms,.mu,.mx,.my,.nl,.nu,.pe,.ph,.pl,.pm,.se,.sh,.so,.tc,.tf,.tk,.tl,.tm,.to,.tw,.co.uk,.uk,.vc,.vg,.wf,.ws,.yt,.ltd,.men,.bid,.fi,.lt,.games,.news,.work,.space,.win,.link,.store,.co.jp,.edu,.ren,.date,.site,.red,.kim,.cn.com,.club,.gp,.is,.pt,.one,.tt,.ai,.ma,.ee,.su,.run,.car,.fish';
    hz = hz.split(",");
    var qm = str.substr(0, str.indexOf("\."));
    var hm = str.substr(str.indexOf("\."));
    return str.length > 0 && in_array(hm, hz) >= 0 && qm.match(/^[a-z0-9\u4e00-\u9fa5]+([a-z0-9\u4e00-\u9fa5-]*(?:[a-z0-9\u4e00-\u9fa5]+))?$/i) ? true : false;
}
/**
 * .替换为/
 * chao.yong 2020/08/11
 * @param {String} ym 要替换的域名
 */
function thym(ym) {
    return ym.replace(/\./g, "/")
        .toLowerCase();
}
/**
 * 替换.为_
 * chao.yong 2020/08/11
 * @param {String} ym 要替换的域名
 */
function thym2(ym) {
    return ym.replace(/\./g, "_")
        .toLowerCase();
}
/**
 * 获取域名的后缀
 * chao.yong 2020/08/11
 * @param {String} ym 域名
 */
function getSuffix(ym) {
    return ym.replace(/.+\./, ".");
}

/**
 * 获取域名的前缀
 * chao.yong 2020/08/11
 * @param {String} ym 域名
 */
function getDomainPrefix(ym) { 
  var reg = getSuffix(ym);
  var re = new RegExp(reg, "g")
  return ym.replace(re, '');

/**
 * 域名格式化
 * chao.yong 2020/08/09
 * @param {String} websites 要过滤域名的文本
 */
function filter(websites) {
    var pattern =
        /(?:(?:https|http|ftp|rtsp|mms):\/\/|\s|^|[^a-zA-Z])((?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8})(\/[a-zA-Z0-9#%&\'\(\)\*\+,\.\/:\<\=\>\?@\[\]\^_`\|\\~\-]+)?/ig;
    var slashending = /\/+$/;
    var deletequery = /#.*$/;
    var path = /\/(.*?)+/;
    var result;
    var i = 0;
    var list_num = new Array;

    var websitesArray = new Array;
    while (result = pattern.exec(websites)) {
        if (result[2] === undefined) {
            result[2] = '';
        }
        var filter_url = result[1].toLowerCase() + result[2];
        websitesArray.push(filter_url.replace(deletequery, '')
            .replace(slashending, '/')
            .replace(path, ''));
        list_num[i] = websitesArray[i].match(/^([\d]{1,4})(?:\.[a-zA-Z0-9\-]{0,61}){2,}/);
        if (list_num[i] != undefined) {
            list_num[i] = list_num[i][1];
            if (i > 0) {
                if (list_num[i - 1] == list_num[i] - 1) {
                    if (i > 1) {
                        websitesArray[i] = websitesArray[i].replace(/^\d+\./, "");
                    } else {
                        websitesArray[i] = websitesArray[i].replace(/^\d+\./, "");
                        websitesArray[i - 1] = websitesArray[i - 1].replace(/^\d+\./, "");
                    }
                }
            }
        }
        i++;
    }
    return websitesArray;
};

/**
 * 域名导出（新窗口打开）
 * chao.yong 2020/08/09
 * @param {String} classname 要导出的元素dom
 */
function dcym(classname) {
    if (classname != "") {
        var E = [];
        $('.' + classname)
            .each(function() {
                E.push($(this)
                    .text());
            })
        E = E.reverse()
            .join("<br>");
        if (E != "") {
            var F = window.open("", "", "");
            F.opener = null;
            F.document.write(E);
            F.document.close()
        } else {
            alert('待导出内容为空!');
        }
    }
}


/************** 数组处理函数 **************/

/**
 * 数组拆分
 * chao.yong 2020/08/09
 * @param {Array} arr 要拆分的数组
 * @param {Number} size 要拆分的数量
 */
function chunk(arr, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(arr.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(arr.slice(start, end));
    }
    return result;
}


/************** 对象处理函数 **************/

/**
 * 对象转数组 {a:1,b:2} => [{a:1},{b:2}]
 * chao.yong 2020/08/09
 * @param {Object} obj 对象
 */
function switchObjectReverse(obj) {
    var arr = [];
    for (var i in obj) {
        var obj1 = {};
        obj1[obj[i]] = i;
        arr.push(obj1);
    }
    return arr;
}

/************** 常用函数 **************/

/**
 * 过滤文本
 * chao.yong 2020/08/09
 * @param {String} s 要过滤的文本
 */
function glwb(s) {
    var a_nr = s;
    re = new RegExp('"', "g");
    a_nr = a_nr.replace(re, "&#34;");
    re = new RegExp("'", "g");
    a_nr = a_nr.replace(re, "&#39;");
    re = new RegExp('<', "g");
    a_nr = a_nr.replace(re, "&#60;");
    re = new RegExp('>', "g");
    a_nr = a_nr.replace(re, "&#62;");
    return a_nr
}

/**
 * 序列化时间戳（时间戳转换日期格式，例如2020-08-09或者2020/08/09）
 * chao.yong 2020/08/09
 * @param {Number} seconds 时间戳
 */
function serlizeTime(seconds) {
    var date = new Date(seconds);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d
}
/**
 * 同$.inArray()
 * chao.yong 2020/08/11
 * @param {String} seconds 检索的项
 * @param {Array} seconds 数组
 */
function in_array(search,array){
  for(var i in array){
    if(array[i]==search){
      return true;
    }
  }
  return false;
}

/**
 * 对象序列化
 * chao.yong 2020/08/09
 * @param {Object} obj 要序列化的对象
 */
function serializeObj(obj) {
    var str = '?';
    for (var i in obj) {
        str += i + '=' + obj[i] + '&';
    }
    return str.substr(0, str.length - 1);
}

/**
 * 设置cookie
 * chao.yong 2020/08/09
 * @param {String} C 要设置的cookie名
 * @param {String} D 要设置的cookie值
 * @param {String} h 要设置的cookie天数
 */
function set_c(C, D, h) {
    exp = new Date();
    exp.setTime(exp.getTime() + (3600 * 1000 * h));
    document.cookie = C + "=" + escape(D) + "; expires=" + exp.toGMTString() + "; path=/"
}

/**
 * 获取cookie
 * chao.yong 2020/08/09
 * @param {String} C 要获取的cookie
 */
function get_c(C) {
    var D;
    D = C + "=";
    offset = document.cookie.indexOf(D);
    if (offset != -1) {
        offset += D.length;
        end = document.cookie.indexOf(";", offset);
        if (end == -1) {
            end = document.cookie.length
        };
        return unescape(document.cookie.substring(offset, end))
    } else {
        return ""
    }
}

/**
 * 删除cookie
 * chao.yong 2020/08/09
 * @param {String} B 要删除的cookie
 */
function del_c(B) {
    exp = new Date();
    exp.setTime(exp.getTime() - 10000000);
    document.cookie = B + "=" + null + "; expires=" + exp.toGMTString() + "; path=/"
}


/************** jquery扩展 **************/
if (typeof ossurl === "undefined") {
    var js = document.scripts;
    js = js[js.length - 1].src.substring(0, js[js.length - 1].src.lastIndexOf("/"));
    var ossurl = js.substring(0, js.lastIndexOf("/"));
}
$.extend({
    includePath: ossurl,
    include: function(K) {
        var N = typeof K == "string" ? [K] : K;
        for (var T = 0; T < N.length; T++) {
            var M = N[T].replace(/^\s|\s$/g, "");
            var R = M.split(".");
            var L = R[R.length - 1].toLowerCase();
            var P = L == "css";
            var O = P ? "link" : "script";
            var S = P ? " type='text/css' rel='stylesheet' disabled='true' " : " language='javascript' type='text/javascript' ";
            var Q = (P ? "href" : "src") + "='" + $.includePath + M + "'";
            if ($(O + "[" + Q + "]")
                .length == 0) {
                document.write("<" + O + S + Q + "></" + O + ">")
            }
        }
    }
});
$.include(["/layer/layer.js", "/js/md5.js"]);
