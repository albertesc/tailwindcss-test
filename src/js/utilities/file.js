
/*  PENDIENTE DE REFACTORIZAR
    */

window.$ = require("jquery");

$(function(){
    $('#file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.split("\\");
        var filename = m[2];
        $('.file-custom').html(filename);
    });
})
