/**
 * Created by Administrator on 2017/11/7 0007.
 */
$(function () {
    var productid = getURL.getParam("productid");
    $.ajax({
        type: "get",
        url: getURL.comurl + "getmoneyctrlproduct",
        dataType: "Json",
        data: {
            productid:productid,
        },
        success: function (data) {
            console.log(data);
            $(".moneyctrlproduct").html(template("tpl", data))

        }
        });

})