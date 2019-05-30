$(document).ready(function() {

    /* COMIENZA METODOS PARA OVERLAY EN CORREOS */
    $('.correo_vis_overlay').hide();

    $('.contenedor_correo').mouseover(function() {
        $(this).find('.correo_vis_overlay').fadeIn();
    });

    $('.contenedor_correo').mouseleave(function() {
        $(this).find('.correo_vis_overlay').fadeOut();
    });
    /* FIN METODOS PARA OVERLAY EN CORREOS */

    /* COMIENZA METODO PARA CAMBIAR SECCION EN NAVBAR */
    $('.header_contenedor_link').click(function() {
        $('.header_contenedor_link').find('.active').removeClass('active');
        $('.header_contenedor_link').find('.subrayado_link').addClass('hidden');
        $(this).find('.subrayado_link').removeClass('hidden');
        $(this).find('a').addClass('active');
    });
    /* FIN METODO PARA CAMBIAR SECCION EN NAVBAR */

    /* COMIENZA METODOS EN NUEVO CLIENTE */
    funciones_nuevocliente();
    $('#agregar_otro_cliente').click(function() {
        var nuevocliente = $('#nuevocliente').clone();
        $(".contenedor_nuevo_cliente_inputs").append(nuevocliente).fadeIn(400);
        funciones_nuevocliente();
    });

    function funciones_nuevocliente() {
        $('.icono_x').click(function() {
            if ($('.nuevo_cliente_contenedor').length > 1) {
                $(this).parent().fadeOut().remove();
            }

        });
    }
    /* FIN METODOS EN NUEVO CLIENTE */


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
        $(this).parent().parent().slideUp();
        $('.modal-background').fadeOut();
    });

    //End Login Function ------------------------------------------------------------------------------------------------------------


    //Listado Usuarios Function ------------------------------------------------------------------------------------------------------

    //MODAL
    $('.icono_cajon_add').click(function() {
        $('#modal_nuevo_cliente').parent().addClass('is-active');
    });


    $('.icono_cajon_abrir').on('click', function() {
        if ($(this).parent().parent().find('div.cajones_interiores').css('display') == 'none') {
            $(this).parent().parent().find('div.cajones_interiores').slideDown(250);
            $('icono_cajon_abrir').rotate();
        } else {
            $(this).parent().parent().find('div.cajones_interiores').slideUp(250);
            $(this).parent().parent().find('div.contenedor_dias').slideUp(250);
        }
    });


    $('.cajon_cliente').on('click', function() {
        if ($(this).parent().find('.contenedor_dias').css('display') == 'none') {
            $(this).parent().find('.contenedor_dias').slideDown(250);
        } else {
            $(this).parent().find('.contenedor_dias').slideUp(250);
        }
    });

    $('.btn_dia_envio').on('click', function() {

        if ($(this).hasClass('dia_activo')) {
            $(this).removeClass('dia_activo');
        } else {
            $(this).addClass('dia_activo');
        }

    });
    //End Listado Usuarios Function --------------------------------------------------------------------------------------------------



});