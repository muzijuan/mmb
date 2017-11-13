/**
 * Created by Administrator on 2017/11/8 0008.
 */
$(function(){

    $.ajax({

        type:"get",
        url:getURL.comurl+"getcoupon",
        dataType:"Json",
        success:function (data) {
            console.log(data);
            $(".coupon_bodyul").html(template("tpl",data));
        }
    })





})

