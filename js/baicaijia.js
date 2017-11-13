/**
 * Created by Administrator on 2017/11/8 0008.
 */
$(function () {
    mui('.mui-scroll-wrapper').scroll({
        scrollX:true,
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
var titleid=0;

$(document.body).on("click",".mui-control-item",function () {
    $(this).addClass("mui-active").siblings().removeClass("mui-active")
    titleid=$(this).data("titleid");
})

   $.ajax({
       type:"get",
       url:getURL.comurl+"getbaicaijiatitle",
       dataType:"Json",
       success:function (data) {
           // console.log(data);
           $(".bcj-nav1ul").html(template("tpl",data));
       }
} )

var content=function (titleid) {
    $.ajax({
        type:"get",
        url:getURL.comurl+"getbaicaijiaproduct",
        dataType:"Json",
        data:{
            titleid:titleid,
        },
        success:function (msg) {
            console.log(msg);
            $(".baicaijialistul").html(template("tpl2",msg));
        }
    } )

}
content(titleid);






})