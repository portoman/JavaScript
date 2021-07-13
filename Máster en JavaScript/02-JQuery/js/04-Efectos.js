"use strict"

$(document).ready(function(){


    $("#mostrar").hide();

        //Mostrar
        $("#mostrar").on("click",function(){
            $(this).hide();
            $("#ocultar").show();
            $("#caja").show('normal');
        })

        //Ocultar
        $("#ocultar").on("click",function(){
            $(this).hide();
            $("#mostrar").show();
            $("#caja").hide('fast');
        })

        //Fade in

        $("#mostrar2").on("click",function(){
            $(this).hide();
            $("#ocultar2").show();
            $("#caja2").show('normal');
        })

         //Fade out
        $("#ocultar2").on("click",function(){
            $(this).hide();
            $("#mostrar2").show();
            $("#caja2").hide('fast');
        })

});  
