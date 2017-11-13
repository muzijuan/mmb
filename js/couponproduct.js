/**
 * Created by Administrator on 2017/11/8 0008.
 */
$(function () {
    var couponid=getURL.getParam("couponid");
    $.ajax({
        type:"get",
        url:getURL.comurl+"getcouponproduct",
        dataType:"Json",
        data:{
            couponid:couponid,
        },
        success:function (data) {
            console.log(data);
            $(".coupon_bodyul").html(template("tpl",data));
            $("")
        }

    })

   $(".lunboul").children().eq(0).find("img").addClass("now")

    // 轮播图
    // $("left-angle").on("click",function () {
    //     $(".lunbo").src=$()
    //
    //
    // })
    $(document).on("click",".coupon_bodyul li",function () {
        console.log(111);
        $(".mask").show();
        $("left-angle").on("click",function () {
            $(".lunbo").src=$()


        })
    })


})