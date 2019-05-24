$(document).ready(function(){
    /* COMIENZA METODOS PARA OVERLAY EN CORREOS */
    $('.correo_vis_overlay').hide();
    
    $('.contenedor_correo').mouseover(function(){
        $(this).find('.correo_vis_overlay').fadeIn();
    });

    $('.contenedor_correo').mouseleave(function(){
        $(this).find('.correo_vis_overlay').fadeOut();
    });
    /* FIN METODOS PARA OVERLAY EN CORREOS */

    /* COMIENZA METODO PARA CAMBIAR SECCION EN NAVBAR */
    $('.header_contenedor_link').click(function(){
        $('.header_contenedor_link').find('.active').removeClass('active');
        $('.header_contenedor_link').find('.subrayado_link').addClass('hidden');
        $(this).find('.subrayado_link').removeClass('hidden');
        $(this).find('a').addClass('active');
    });
    /* FIN METODO PARA CAMBIAR SECCION EN NAVBAR */
});
