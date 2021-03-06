$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://wt.ops.labs.vu.nl/api18/99fff472',
    dataType: "json",
  });

  // Reference: https://www.youtube.com/watch?v=AOfSuajwY-I
	$.getJSON("https://wt.ops.labs.vu.nl/api18/99fff472", function(data) {
  	var phone_data = '';
    $.each(data, function(key, value) {
    	phone_data += '<tr class="item">';
      phone_data += '<td>' + value.brand + '</td>';
      phone_data += '<td>' + value.model + '</td>';
      phone_data += '<td>' + value.os + '</td>';
      phone_data += '<td>' + value.screensize + '</td>';
      phone_data += '<td>' + '<figure>' + '<img class="phoneimg" src = ' + value.image + '>' +
      '<figcaption class="figcaption">' + value.brand + ' ' + value.model + '<figcaption>' + '</figure>' + '</td>';
      phone_data += '</tr>';
    });
    $('#maintable').append(phone_data);
  });
});
