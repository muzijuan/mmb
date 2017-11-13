/**
 * Created by Administrator on 2017/11/8 0008.
 */
$(function () {
    var productid=getURL.getParam("productid");
   $.ajax({
       type:"get",
       url:getURL.comurl+"getdiscountproduct",
       dataType:"Json",
        data:{
            productid:productid,
        },
        success:function (data) {
            console.log(data);
        }

   })



})