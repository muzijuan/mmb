$(function(){
    $.ajax({
        type:"get",
        url:getURL.comurl+"getmoneyctrl",
        dataType:"Json",
        data:{
            pageid:1,
        },
        success:function (data) {
            console.log(data);
            $(".moneyctrl_productul").html(template("tpl",data))
        }



    })





})