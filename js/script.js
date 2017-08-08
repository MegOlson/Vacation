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
});
