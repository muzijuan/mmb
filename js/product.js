/**
 * Created by Administrator on 2017/11/6 0006.
 */
$(function(){
   var productid=getURL.getParam("productid");
    var categoryid=getURL.getParam("categoryid")
    $.ajax({

        type:"get",
        url:getURL.comurl+"getcategorybyid",
        dataType:"Json",
        data:{
            categoryid:categoryid
        },
        success:function (data) {
            // console.log(data);
            $(".box_l").html(template("tpl",data));
        }
    })
    
    $.ajax({
      type:"get",
        url:getURL.comurl+"getproduct",
        dataType:"Json",
        data:{
            productid:productid
        },
        success:function (msg) {
            // console.log(msg);
            // console.log(msg.result[0]);
            var pro=getURL.productName(msg.result[0].productName);
            // console.log(pro);
            msg["pro"]=pro;
            console.log(msg);
            $(".productname1").html(template("tpl2",msg));
            $(".mmb_bijia").html(template("tpl3",msg));
        }
    })

$.ajax({

    type:"get",
    url:getURL.comurl+"getproductcom",
    dataType:"Json",
    data:{
        productid:productid
    },
    success:function (bbb) {
        // console.log(bbb);
        $(".oneul").html(template("tpl4",bbb));
    }
})






})