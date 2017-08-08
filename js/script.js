$(document).ready(function(){
  $("button#make-dark").click(function() {
    $("button#make-light").toggle();
    $("button#make-dark").toggle();
    $("body").addClass("dark");
  });

  $("button#make-light").click(function() {
    $("button#make-light").toggle();
    $("button#make-dark").toggle();
    $("body").removeClass();
  });
  $("button#make-warm").click(function() {
    $("button#make-light").toggle();
    $("button#make-warm").toggle();
    $("body").removeClass();
    $("body").addClass("warm");
  });

  $("button#make-cool").click(function() {
    $("button#make-light").toggle();
    $("button#make-cool").toggle();
    $("body").removeClass();
    $("body").addClass("cool");
  });
});
