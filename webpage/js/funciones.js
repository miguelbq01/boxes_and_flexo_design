$(document).ready(function() {
    /* FUNCIONES LANDING */
    $('.mas_productos').mouseenter(function() {
        $(this).find('img').attr('src', 'images/flechaB.png');
    }).mouseleave(function() {
        $(this).find('img').attr('src', 'images/flechaN.png');
    });

    if ($('.sections_principal').length > 0) {
        $('.overlay_contenedor').fadeOut(0);
        inView('#section_landing').on('enter', function(el) {
            $('#section_landing').css('opacity', '1');
            if ($('.navbar-brand .navbar_logo').hasClass('negro')) {
                $('.navbar-brand .navbar_logo').removeClass('negro');
                $('.navbar-brand .navbar_logo').addClass('blanco');
                setTimeout(function() {
                    $('#video_landing').css('top', '-1vh');
                    $('.navbar-brand .navbar_logo').css('background-image', 'url("images/logoBlanco.png")');
                    $('.navbar-burger').find('span').css('background-color', '#fff');
                    $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                    $('.icono_circulolinea').removeClass('negro');
                    $('#sidebar_section1').addClass('icono_caja').removeClass('icono_circulolinea');
                }, 25);
            }
        });
        inView('#section_aboutus').on('enter', function(el) {
            $('#section_aboutus').addClass('fadeSlideRight');
            if ($('.navbar-brand .navbar_logo').hasClass('blanco')) {
                $('.navbar-brand .navbar_logo').removeClass('blanco');
                $('.navbar-brand .navbar_logo').addClass('negro');
                $('#video_landing').css('top', '-8vh');
                setTimeout(function() {
                    $('.navbar-brand .navbar_logo').css('background-image', 'url("images/logoNegro.png")');
                    $('.navbar-burger').find('span').css('background-color', '#1a1a1a');
                    $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                    $('.icono_circulolinea').addClass('negro');
                    $('#sidebar_section2').addClass('icono_caja').removeClass('icono_circulolinea');
                }, 250);
            } else {
                setTimeout(function() {
                    $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                    $('#sidebar_section2').addClass('icono_caja').removeClass('icono_circulolinea');
                }, 25);
            }
        });
        inView('#section_products').on('enter', function(el) {
            $('#section_products').addClass('fadeSlideLeft');
            if ($('.navbar-brand .navbar_logo').hasClass('blanco')) {
                $('.navbar-brand .navbar_logo').removeClass('blanco');
                $('.navbar-brand .navbar_logo').addClass('negro');
                $('#video_landing').css('top', '-8vh');
                setTimeout(function() {
                    $('.navbar-brand .navbar_logo').css('background-image', 'url("images/logoNegro.png")');
                    $('.navbar-burger').find('span').css('background-color', '#1a1a1a');
                    $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                    $('.icono_circulolinea').addClass('negro');
                    $('#sidebar_section3').addClass('icono_caja').removeClass('icono_circulolinea');
                }, 25);
            } else {
                setTimeout(function() {
                    $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                    $('#sidebar_section3').addClass('icono_caja').removeClass('icono_circulolinea');
                }, 250);
            }
        });
        inView('#section_contact').on('enter', function(el) {
            $('#section_contact .container').addClass('fadeSlideRight');
            $('.navbar-brand .navbar_logo').removeClass('negro');
            $('.navbar-brand .navbar_logo').addClass('blanco');
            $('#video_landing').css('top', '-8vh');
            setTimeout(function() {
                $('.navbar-brand .navbar_logo').css('background-image', 'url("images/logoBlanco.png")');
                $('.navbar-burger').find('span').css('background-color', '#fff');
                $('.icono_caja').addClass('icono_circulolinea').removeClass('icono_caja');
                $('.icono_circulolinea').removeClass('negro');
                $('#sidebar_section4').addClass('icono_caja').removeClass('icono_circulolinea');
            }, 250);
        });

        /* OVERLAY */
        $('.navbar-burger').click(function() {
            $('.overlay_contenedor').fadeIn();
        });

        $('.close_overlay').click(function() {
            $('.overlay_contenedor').fadeOut();
        });

        $('.overlay_row').click(function() {
            $('.overlay_contenedor').fadeOut();
        });
    } else {
        /* ----------------------- FUNCIONES PRODUCTOS ----------------------- */
        $('.navbar_logo').css('position', 'absolute');

        /* FUNCION CLICK CAMBIAR IMAGEN */
        $('.productos_icono_circulolinea').click(function() {
            $('.productos_icono_circulolinea').removeClass('activo');
            $(this).addClass('activo');
        });


        /* FIN FUNCION CLICK CAMBIAR IMAGEN */

        /* FUNCION CAMBIAR PRODUCTO */
        $('.productos_product').click(function() {
            if ($('#seccion_productoespecifico').hasClass('hidden')) {
                $('#seccion_productoespecifico').removeClass('hidden');
            }
            $('.productos_product').find('h2').addClass('white');
            $('.productos_product').removeClass('product_activo');
            $(this).addClass('product_activo');
            $(this).find('.white').removeClass('white');
            $('html, body').animate({
                scrollTop: $("#productos_producto_especifico").offset().top
            }, 250);
            if ($(this).hasClass('productos_producto1')) {
                $('#productos_producto_especifico').removeClass('productos_producto2 productos_producto3 productos_producto4');

                $('#productos_producto_especifico_titulo').fadeOut(250);
                $('#productos_producto_especifico_titulo').html('Imperial Plastic').fadeIn(250);
                $('#productos_producto_especifico_nombrequote').text('Antonio Kuri');
                $('#productos_producto_especifico_puestoquote').text('Vicepresidente');
                $('#productos_producto_especifico_quote').text('Boxes and Flexo es una empresa honesta y responsable en la cual puedes confiar, tiene habilidades y destrezas mas un gran equipo de trabajo dedicado al cliente, lo cual hace que hagan un excelente trabajo.');
                $('.image_aboutus').css('background-image', 'url("images/bosque.jpg")');
            } else {
                if ($(this).hasClass('productos_producto2')) {
                    $('#productos_producto_especifico_titulo').fadeOut(250);
                    $('#productos_producto_especifico_titulo').html('Aliementos y Salsas').fadeIn(250);
                    $('.image_aboutus').css('background-image', 'url("images/foto1.jpg")');
                    $('#productos_producto_especifico_quote').text('Boxes and Flexo es una empresa organizada que cumple sus compromisos de calidad y tiempos de entrega buscando siempre la mejora continua.');
                    $('#productos_producto_especifico_nombrequote').text('Miguel de la Paz Adame');
                    $('#productos_producto_especifico_puestoquote').text('Coordinador de Costos Aliementos y Salsas de Mexico S.A. de C.V.');
                } else {
                    if ($(this).hasClass('productos_producto3')) {
                        $('#productos_producto_especifico_titulo').fadeOut(250);
                        $('#productos_producto_especifico_titulo').html('Don Fileto').fadeIn(250);
                        $('#productos_producto_especifico_quote').text('Boxes and Flexo, representa calidad y servicio en todos sus procesos, cumpliendo siempre con sus compromisos de calidad y dando certeza en lo que el cliente busca para el éxito de sus productos.');
                        $('#productos_producto_especifico_nombrequote').text('Nora Zuñiga');
                        $('#productos_producto_especifico_puestoquote').text('Dep. de Mercadotecnia e Imagen Institucional Don Fileto ');
                    } else {
                        $('#productos_producto_especifico_titulo').fadeOut(250);
                        $('#productos_producto_especifico_titulo').html('PLeatco Pure').fadeIn(250);
                        $('#productos_producto_especifico_quote').text('For us working with a company fully integrated in its design and logistics department, connected with production was very important, its professional treatment saved us a lot of time in being able to launch our line of products to the market. Working with companies like this is a great pleasure, we recommend 100% this Mexican company with state-of-the-art technology.');
                        $('#productos_producto_especifico_nombrequote').text('PLeatco Pure');
                        $('#productos_producto_especifico_puestoquote').text('');
                    }
                }
            }
        });
        /* FIN FUNCION CAMBIAR PRODUCTO */
    }

});

function imagenes() {
    if ($('#productos_producto_especifico').hasClass('productos_producto1')) {

    }
}