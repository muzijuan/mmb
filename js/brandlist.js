/**
 * Created by Administrator on 2017/11/9 0009.
 */
$(function(){
    var brandtitleid=getURL.getParam("brandtitleid");


        $.ajax({

            type:"get",
            url:getURL.comurl+"getbrand",
            dataType:"Json",
            data:{
                brandtitleid:brandtitleid,
            },
            success:function (data) {
                console.log(data);
                $(".select_content_ul").html(template("tpl1",data));
            }
        })



    }
)