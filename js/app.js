

$(document).ready(function(){
  //ocultar main
  $("main").slideUp(4000);

  //Ocultar y mostrar sing
  $("#sing").click(function() {
    $("#welcome").slideUp(1000);
  })
  //Mostrat pagina anterior
  $("#btnLeft").click(function(){
    $("#welcome").slideDown(1000);
  })
//Insertando lada a input
  $("#option").click(function() {
    if ($(this)===($(".mexico"))){
      $("#contryPhone").html("<b>52</b>");
    }
    else if ($(this)===($(".usa"))){
      $("#contryPhone").html("01");
    }
    else if ($(this)===($(".peru"))){
      $("#contryPhone").html("51");
    }
  })

  });
