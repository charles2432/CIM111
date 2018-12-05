console.log("testing");

$(document).ready(function() {

$("h1").css("background-color", "green");

$(".step").hide(); //this is going to hide all the steps.


  // Here we use jQuery to select the header with "click-me" as its ID.
  // Whenever it is clicked...
  $(".button1").on("click", function() {
$(".step").hide(); //this is going to hide all the steps.

    $(".one").show();
  }); //closes button1

  $(".button2").on("click", function() {
$(".step").hide(); //this is going to hide all the steps.
    $(".two").show();
  });

  $(".button3").on("click", function() {
$(".step").hide(); //this is going to hide all the steps.
    $(".three").show();
  });

  $(".button4").on("click", function() {
$(".step").hide(); //this is going to hide all the steps.
    $(".four").show();
  });

  $(".button5").on("click", function() {
$(".step").hide(); //this is going to hide all the steps.
    $(".five").show();
  });

  $("p").mouseover(function(){
      $("p").css("background-color", "silver");
  });

  $("p").mouseout(function(){
      $("p").css("background-color", "white");
  });



  $(".button6").on("click", function() {
      $(".p1").html("Hello <b> smile for the FBI agent </b>!");
  });




}); //this closes .ready
