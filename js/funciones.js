$(document).ready(function() {
    $('.btn_iniciar_sesion').on('click', function() {
        if ($('#login_input_password').val() == "") {
            alert();
        }
    });

});