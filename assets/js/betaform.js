var $form = $('form#registration'),
    url = 'https://script.google.com/macros/s/AKfycbxKaurrEbgGyxCGDbPbEW306eys6eZZS0mjNP_x-70ZNDE12U7av4jkg3w1-INdYd3T/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})