/**
 * Created by Administrator on 2017/11/7 0007.
 */
$(function () {

    $.ajax({
        type: "get",
        url: getURL.comurl + "getinlanddiscount",
        dataType: "Json",
        data: {

        },
        success: function (data) {
            console.log(data);
            $(".inlanddiscount1").html(template("tpl", data))

        }
    });



})