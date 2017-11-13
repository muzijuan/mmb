/**
 * Created by Administrator on 2017/11/8 0008.
 */
$(function () {

     var shopid=0;
      var area1=0;
    $.ajax({
       type:"get",
        url:getURL.comurl+"getgsshop",
        dataType:"Json",
        success:function (bbb) {
            // console.log(bbb);
            $(".c1ul").html(template("tpl1",bbb));
            shopid=$("#one1 ").data("shop");
            console.log(shopid);
        }
    })


    $.ajax({
        type:"get",
        url:getURL.comurl+"getgsshoparea",
        dataType:"Json",
        success:function (ccc) {
            // console.log(ccc);
            $(".c2ul").html(template("tpl2",ccc));
            area1=$("#two1").data("area1");
            console.log(area1);

        }
    })
//渲染商品列表


    $.ajax({
        type:"get",
        url:getURL.comurl+"getgsproduct",
        dataType:"Json",
        data:{
            shopid:shopid,
            areaid:area1,
        },
        success:function (ddd) {
            console.log(ddd);
            $(".gs1").html(template("tpl3",ddd));
        }
    })

    $(".content ul").on("click",function (e) {
        e.preventDefault();
    })

    $(".gs_navtitle a").on("click",function () {
        var  $index=$(this).index();
        $(".c").eq($index).show().siblings().hide();

    })


    $(".gs_nav").on("click",".c1 a",function () {
        // 对勾的显示和隐藏
        $(this).siblings().show().parent().siblings().find("i").hide();
        var val=$(this).html();
        $(".jd").html(val);
        // $(this).parent().parent().parent().parent().siblings().child().eq($index).val()=val;
    })


    $(".gs_nav").on("click",".c2 a",function () {
        $(this).siblings().show().parent().siblings().find("i").hide();
        var val=$(this).html();
        $(".hb").html(val);
        // $(this).parent().parent().parent().parent().siblings().child().eq($index).val()=val;
    })



})