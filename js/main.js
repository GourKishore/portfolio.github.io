$(document).ready(function(){
    $(".theme").click(function(){
        $(".main,.insidebody,.project").css("background-color","#292929");
        $(".main,.insidebody,.text2,.text3,.text4,.icon2,.shadow,.project").css("transition","3s");
        $(".icon2 i,.button a,.button2 a").css("box-shadow","0px 0px 10px 0px #fff");
        $(".shadow").css("box-shadow","0px 0px 20px 0px #fff");
        $(".nav,.body,.head").css("background-image","linear-gradient(to left top, #87309b, #672683, #491b6a, #2e1151, #160439)");
        $(this).fadeOut(300);
        // $( ".theme" ).replaceWith( $(".theme2") );
        $(".theme2").fadeIn(3000);
        $(".text2,.text3,.text4,.aboutme,.aboutme2,.knowme,.myskill,.project1,.project2,.description1").css("color","white");
        
    }); 
    
    $(".theme2").click(function(){
        $(".main,.insidebody,.project").css("background-color","#f2f0f5");
        $(".icon2 i").css("box-shadow","0px 0px 10px 0px #683dc5");
        $(".main ,.text2 ,.text3 ,.text4,.shadow,.project").css("transition","3s");
        $(".nav,.body,.head").css("background-image","linear-gradient(to left top, #4985e1, #6880e5, #8778e6, #a46fe2, #bf63da)");
        $(this).fadeOut(300);
        // $(".shadow").css("box-shadow","0px 0px 30px 0px #512679");
        $(".theme").fadeIn(3000);
        $(".text2,.text3,.text4,.aboutme,.aboutme2,.knowme,.myskill,.project,.project1,.project2,.description1").css("color","rgb(50, 51, 51)");
        $(".text3").css("color","#8154e2");

    
    }); 

    $(".switch i").click(function(){
        $(".navbar").toggle();
    }); 

});
