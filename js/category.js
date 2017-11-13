/**
 * Created by Administrator on 2017/11/6 0006.
 */
$(function () {
       
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcategorytitle",
        dataType: "json",
        success: function (data) {
            // console.log(data);
           $(".oneul").html(template("tpl1",data));

            $(".oneul").on("click", ".down", function () {
                var titleid=$(this).data("id");
                $this=$(this);
                $("twoul").toggleClass("now");
                // console.log(titleid);
                $.ajax({
                type:"get",
                url:"http://127.0.0.1:9090/api/getcategory",
                dataType: "json",
                data:{
                    titleid:titleid
                },
                success:function (msg) {
                    console.log(msg);
                  var twoul= $this.parent().parent().find("ul")
                    twoul.html(template("tpl2",msg));
                    twoul.toggleClass("now");
                }

            });
            })




        }


    });
  
});