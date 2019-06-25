$(function(){
    criaBotao();
});
var i = 1;
var soma  = 0;

function criaBotao(){
    $('<button>', {
        id: 'adicionar',
        value: 'Adicionar',
        text: 'Adicionar Notas',
        onclick: 'criaInputNota()'
    }).appendTo('#notas');

    $('<button>', {
        id: 'cal',
        value: 'Calcular',
        text: 'Calcular',
        onclick: 'calculaMedia()'
    }).appendTo('#notas');
}

function criaInputNota(){
    $("<input>",{
        type: 'text',
        id: 'nota' + i,
        placeholder: 'Digite uma Nota'
    }).appendTo("#notas");
    $("<input>",{
        type: 'text',
        id: 'peso' + i,
        placeholder: 'Digite o peso da nota'
    }).appendTo("#notas");
    i++;
}


function calculaMedia(){
    var aux = 0;
    var iNota = 0;
    var iPeso = 0;
    $("#notas input[id *= 'peso']").each(function(){
       iPeso += parseFloat($(this).val().replace(',','.'));
     });
     $("#notas input[id *= 'nota']").each(function(){
        iNota += parseFloat($(this).val().replace(',','.'));
      });
    $('<input>',{
        id:'media'
   }).appendTo("#notas");
    var resultado = iNota/iPeso;
    $("#media").val(resultado);
}