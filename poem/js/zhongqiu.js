/**
 * Created by ���� on 2017/6/9.
 */

$(function(){

    var i=0;

    var Count=$(".page").length-1;

    touch.on("html","swipeup",function(){

        if(i<Count){

            $(".page").eq(i).addClass("pageUp");
            $(".page").eq(i).children().addClass("hide");
            i++;
            $(".page").eq(i).removeClass("pageDown");
            $(".page").eq(i).children().removeClass("hide");
        }
    });

    touch.on("html","swipedown",function(){
        if(i>0){
            $(".page").eq(i).addClass("pageDown");
            $(".page").eq(i).children().addClass("hide");
            i--;
            $(".page").eq(i).removeClass("pageUp");
            $(".page").eq(i).children().removeClass("hide");
        }
    })

})