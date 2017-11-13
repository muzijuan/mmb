/**
 * Created by Administrator on 2017/11/7 0007.
 */


var getURL = {
    getParamObj: function () {
        // location.search
        var obj = {};
        var search = location.search;
        search = search.slice(1);
        var arr = search.split("&");
        for (var i = 0; i < arr.length; i++) {
            var key = arr[i].split("=")[0];
            // decodeURI()转换成文字
            var value = decodeURI(arr[i].split("=")[1]);
            obj[key] = value;
        }
        return obj;
    },
    getParam: function (key) {
        return this.getParamObj()[key];

    },
    comurl: "http://127.0.0.1:9090/api/",
    productName:function (a) {
        var str=a;
        var arr=str.split(" ");
        var product=arr[0];
        return product;
    }
}
    
