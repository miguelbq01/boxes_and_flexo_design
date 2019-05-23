$(document).ready(function() {
    //Login Function ------------------------------------------------------------------------------------------------------------

    $('#login_form').fadeIn(1);

    $('.btn_iniciar_sesion').on('click', function() {
        if ($('#login_input_password').val() == "") {
            $('#login_error_alert').slideDown();
            $('#login_input_password').parent().addClass('input_error_validation');
            setTimeout(function() {
                $('#login_error_alert').slideUp();
            }, 5000);
        }

        if ($('#login_input_usuario').val() == "") {
            $('#login_error_alert').slideDown();
            $('#login_input_usuario').parent().addClass('input_error_validation');
            setTimeout(function() {
                $('#login_error_alert').slideUp();
            }, 5000);
        }
    });

    $('#login_input_usuario').on('focus', function() {
        $('#login_input_usuario').parent().removeClass('input_error_validation');
    });
    $('#login_input_password').on('focus', function() {
        $('#login_input_password').parent().removeClass('input_error_validation');
    });

    $('.delete').on('click', function() {
        $(this).parent().slideUp();
    });

    //End Login Function ------------------------------------------------------------------------------------------------------------


    //Listado Correos Function ------------------------------------------------------------------------------------------------------



    //End Listado Correos Function --------------------------------------------------------------------------------------------------





});