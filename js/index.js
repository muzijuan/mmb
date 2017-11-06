$(function () {
   $.ajax({
       type:"get",
       url:"http://192.168.32.82:9090/api/getindexmenu",
       dataType:"json",
        success:function (data) {
            console.log(data);
          $(".mmb1_nav").html(template("tpl",data))
        }
   })
    $.ajax({
        type:"get",
        url:"http://192.168.32.82:9090/api/getmoneyctrl",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".count").html(template("tp2",data))
        }

    })








})