
// Puts placeholder text as a value of an input field.
//
jQuery.fn.placeholder = function() {

  this.each(function() {
    var hint = $(this).attr("placeholder");

    if ($(this).val() === "") {
      $(this).val(hint);
    }

    $(this).focus(function() {
      if ($(this).val() === hint) {
        $(this).val("");
      }
    }).blur(function() {
      if ($(this).val() === "") {
        $(this).val(hint);
      }
    });
  });
};

// The function to use. Call from a form element that contains
// the input fields. It will pull the hint text from the 'placeholder'
// HTML5 attribute, and hook into the submit event to prevent submission
// of placeholder text.
//
// Example:
//
//   $("#new_post").placeholders(["#title", "#body"]);
//
jQuery.fn.placeholders = function(fields) {

  this.each(function() {
    var size = fields.length;
    var i;

    for (i = 0; i < size; ++i) {
      var input = fields[i];
      $(input).placeholder();
    }

    $(this).submit(function() {

      var i;
      for (i = 0; i < size; ++i) {
        var input = fields[i];
        var hint = $(input).attr("placeholder");

        if ($(input).val() === hint) {
          $(input).val('');
        }
      }
    });
  });
};
