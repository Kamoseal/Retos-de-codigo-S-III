

$(document).ready(function(){
  //ocultar main
  $("main").slideUp(4000);

  //Ocultar y mostrar sing
  $("#sing").click(function() {
    $("#welcome").slideUp(1000);
  });
  //Mostrat pagina anterior
  $(".btnLeft").click(function(){
    $("#welcome").slideDown(1000);
  });
//Insertando lada a input
  $("#optionS").change(function() {

    if ($(this).val()===("1")){
      $("#contryPhone").val("52");
    }
    else if ($(this).val()===("2")){
      $("#contryPhone").val("01");
    }
    else if ($(this).val()===("3")){
      $("#contryPhone").val("51");
    }
  });

  $("#getCode, #resendCode").click(function (event){
    event.preventDefault();
    function generateCode() {
      var code = (Math.floor((Math.random() * 1000)));
      return code;
    }
    var generatedCode = parseInt(generateCode());
    alert("Tu código: LAB-" + generatedCode);
    $("input[name=verify]").attr({
      "data-code": generatedCode,
    });
    $("#getPhone").slideUp(1000);
  });

  $("#contryPhone").keyUp(function() {
    if ($(this).val().length!==12){
        $("#getCode").attr({
          disabled
          });
    }else{

    }
  })

})
  $("#btnLeft").click(function(){
    $("#getPhone").slideDown(1000);

  $("input[name=verify]").click(function(){
  var data= $("input[data-code]").attr();
  console.log(data);
});
  // $("verifyNums").keypress(function(event){
  //   event.preventDefault();
  //   if ($(this).attr("data"))===($(this).val()){
  //     return true;
  //   }
  //   else{
  //     alert ("¡Intentalo de nuevo!")
  //   }
  // })
  // $("#getPhone").slideUp(1000);



  });
