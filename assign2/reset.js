$(document).ready(function() {
  $('#resetdata').click(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'GET',
      url: 'https://wt.ops.labs.vu.nl/api18/99fff472/reset',
      success: function() {
        location.reload();
      },
    });
  });
});
