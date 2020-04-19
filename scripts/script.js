// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

// https://flynn.boolean.careers/exercises/api/random/int

$(document).ready(function(){

  $(".quadrato").click(function(){

    var thisBox = $(this);

    $.ajax({

      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato){
        if (thisBox.hasClass("already")){
        } else if (data.response > 5){
          thisBox.addClass("verde");
          thisBox.addClass("already");
          thisBox.html(data.response)
        } else{
          thisBox.addClass("giallo")
          thisBox.addClass("already");
          thisBox.html(data.response)
        }
      },
      error: function (richiesta, stato, errori){
        alert(richiesta, stato, errori)
      }

    })

  })

})
