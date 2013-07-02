$(document).ready(function(){
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