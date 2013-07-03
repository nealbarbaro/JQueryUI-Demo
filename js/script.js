$(document).ready(function(){

  // AJAX!!!!

  var response_area = $("#response");
  var headCount = 0;
  var tailCount = 0;

  var ajax_form_submit = function(event) {
    $.ajax({
      type: "POST",
      url: "http://sumeetjain.com",
      data: $('#my_form').serialize(),
      beforeSend: function(){
        console.log("beforeSend");
      },
      complete: function(){
        console.log("complete");
      }
    });

    event.preventDefault();
  }

  $("#form_button").on("click", ajax_form_submit);



  var do_this_after = function() {
    response_area.text("Received response.");
  }

  var change_background = function(response) {
    var $body = $("body");
    if (response.responseText == "heads") {
      tailCount = 0;
      headCount++;
      $body.removeClass();
      $body.addClass("heads");
      if (headCount > 2){
        response_area.html("<h1>HEADS STREAK!!!!</h1>");
      }
      else {
        response_area.html("<h1>" + response.responseText.toUpperCase() + "</h1>");
      };
    }
    if (response.responseText == "tails") {
      tailCount++;
      headCount = 0;
      $body.removeClass();
      $body.addClass("tails");
      if (tailCount > 2){
        response_area.html("<h1>TAILS STREAK!!!!</h1>");
      }
      else {
        response_area.html("<h1>" + response.responseText.toUpperCase() + "</h1>");
      }
    }
  }


  var my_amazing_ajax_button = function() {
    $.ajax({
      type: "POST", // METHOD like "get"
      url: "http://examples.webscript.io/coinflip",
      // data: {
      //   name: "Sumeet",
      //   age: 27,
      //   height: "tall"
      // },
      beforeSend: function() {
        response_area.text("Loading...");
      },
      complete: function(response, status_text){
        change_background(response);
      }
    });
  };

  $("#ajax_button").on("click", my_amazing_ajax_button);





  // Drag Picard around.
  $("#picard" ).draggable();
  // Make accordion
  $('#accordion').accordion();
  // Make age a slider
  var age_header = $("#age");
  var hidden_age_field = $("<input type='hidden' id='hidden_age_field' val='' />");
  hidden_age_field.insertAfter(age_header);

  // This variable contain the slider.
  var age_slider = $("<div id='slider'></div>").insertAfter(age_header);

  age_slider.slider({
    min: 1,
    max: 6,
    value: 1, // Initial Value
    slide: function(event, slider_element) {
      hidden_age_field.val(slider_element.value);
    }
  });

  // Animate!

  var animate_bio = function() {
    $("#bio").animate({
      backgroundColor: 'red',
      width: 500
    }, 1000);
  }

  $("#animate").on("click", animate_bio);

 // Show

 var do_a_callback = function(){
  alert("Nice moves, Picard");
 }


 var show_picard_bouncer = function() {
  $("#picard_bouncer").show('bounce', {}, 4000, do_a_callback);
 };

 $("#show").on("click", show_picard_bouncer);


});