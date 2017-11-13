/**
 * Created by Administrator on 2017/11/9 0009.
 */
$(function () {
    $.ajax({
        type:"get",
        url:getURL.comurl+"getsitenav",
        dataType:"Json",
        success:function (ddd) {
            console.log(ddd);
            $(".site_box").html(template("tpl1",ddd));
        }
    })




})