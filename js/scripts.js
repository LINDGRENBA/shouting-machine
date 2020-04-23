$(document).ready(function() {
  $("#shout-form").submit(function(event) {

    let shoutInput = $("#shout").val().toUpperCase();

    $(".shout").append(shoutInput + "<br>");

    $("#sentence-returned").show();
    $("body").addClass("shout-styling");
    $("button").removeClass();
    $("button").addClass("btn btn-warning");
    event.preventDefault();
  });

});