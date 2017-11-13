$(function () {
   $.ajax({
       type:"get",
       url:getURL.comurl+"getindexmenu",
       dataType:"json",
        success:function (data) {
            console.log(data);
          $(".mmb1_nav").html(template("tpl",data))
        }
   })
    $.ajax({
        type:"get",
        url:getURL.comurl+"getmoneyctrl",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".count").html(template("tp2",data))
        }

    })








})