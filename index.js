

$(document).ready(function () {
  $("#design-icon").click(function () {
    $("#design-icon").toggle();
    $("#design").toggle();
    $("#design").click(function () {
      $("#design").toggle();
      $("#design-icon").toggle();
    });
});
   
  $("#development-icon").click(function () {
    $("#development-icon").toggle();
    $("#development").toggle();
     
  $("#development").click(function () {
    $("#development").toggle();
    $("#development-icon").toggle();
  });
  });

  $("#product-icon").click(function () {
    $("#product-icon").toggle();
    $("#product").toggle();
  });
   $("#product").click(function () {
    $("#product").toggle();
    $("#product-icon").toggle();
  });
});

$(document).ready(function () {
  $("form#input-form").submit(function (event) {
    event.preventDefault();
    var name = $("input#input1").val();
    var email = $("input#input2").val();
    var message = $("textarea#textarea1").val();

    if ($("input#input1").val() && $("input#input2").val()) {
      alert(name + " We have received your feedback!");
    } else {
      alert("Please enter valid email or name");
    }
  });
});
