/**
 * Created by Administrator on 2017/11/9 0009.
 */
$(function(){
        $.ajax({

            type:"get",
            url:getURL.comurl+"getbrandtitle",
            dataType:"Json",
            success:function (data) {
                console.log(data);
                $(".select_contentul").html(template("tpl1",data));
            }
        })



}
)