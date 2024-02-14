$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("Abrir")
           .removeClass("Cerrar");
    }
    function close() {
        envelope.addClass("Cerrar")
           .removeClass("Abrir");
    }
   
});