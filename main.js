$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

    const addtarefa = $('#addInput').val();
    const novoItem = $('#addLista');
    $(`<li>${addTarefa}</li>`).appendTo(novoItem);

    $(novoItem).fadeIn('slow')
    $('#addInput').val('');
    });

    $('addLista').on('click', 'li',function(e){
        $(e.target).toggleClass('completed');
    });

    $('#button-cancelar').click(function(){
        $('#addLista').empty();
    })

})
