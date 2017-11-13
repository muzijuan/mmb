/**
 * Created by Administrator on 2017/11/6 0006.
 */
$(function(){
    var categoryid=getURL.getParam("categoryid");
    $.ajax({   
        type:"get",
        url:getURL.comurl+"getcategorybyid",
        dataType:"jsonp",
        data:{
            categoryid:categoryid
        },
        success:function (data) {
         $(".box_l").html(template("tpl",data))
        }

    });
    $.ajax({
       type:"get",
        url:getURL.comurl+"getproductlist",
        dataType:"jsonp",
        data:{
            categoryid:categoryid
        },
        success:function (data) {
           
            $(".mmb_productlist1_son").html(template("tpl2",data))
        }
        


    })






})