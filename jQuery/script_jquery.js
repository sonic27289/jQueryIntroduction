$(function(){
    $('#vermelho').click(function(){
        $('p').css('color', 'red');
        $('p').fadeOut(3000);
        $('p').fadeIn(4000);
    });

    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('#mensagem')
        .text("Cor Alterada com Sucesso !")
        .css({color: 'blue', border: '1px solid red', backgroundColor: 'yellow'})
        .fadeIn(2000)
        .fadeOut(2000);
    }); 
});

$(function(){
    $('#l1').click(function(){
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i1').show();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i2').show();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i4').hide();
        $('#i3').show();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});
