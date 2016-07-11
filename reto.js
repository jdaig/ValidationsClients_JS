$(document).ready(function(){
  // var struct = /\w+\@+\w+\.+\w/
  // var passw = /\w{8}/
  // document.getElementsByTagName("input")[0];
  // document.getElementsByTagName("input")[1];
  // document.getElementsByTagName("input")[2];

  $("#sign_up").submit(function( event ) {
    event.preventDefault();

    // console.log("hola");
    password = $("#pass").val();
    email = $("#email").val();
    console.log(password);
    // console.log(email);
    CheckPassword(password);
    CheckEmail(email);

  });


});

var CheckPassword = function(pass) {
  console.log("si entra")
  var passreg = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
   if (passreg.test(pass)){
     alert("Hola");
   }else {
    $("#bad_pass1").html("El password debe de tener al menos un caracter numerico (0-9)");
    $("#bad_pass2").html("El password debe de tener al menos una mayuscula");
    $("#bad_pass3").html("El password debe de tener al menos 8 caracteres");

   }

}


var CheckEmail = function(email){
  console.log("si entra mail")
  var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
  console.log(reg)
  if (reg.test(email)) {
    console.log("entra")
  }else {
    $("#bad_mail").html("Debes escribir una direccion web valida");
  }
}