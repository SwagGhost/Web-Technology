$(document).ready(function () {
  var counter = 0;
  $(document).on('keydown', function(event) {
    // When enter is clicked:
    if (event.keyCode == 13) {
      event.preventDefault();
      if (counter == 0) {
        $("#link0").focus();
        counter = 1;
      }

      else if (counter == 1) {
        $("#link1").focus();
        counter = 2;
      }

      else if (counter == 2) {
        $("#link2").focus();
        counter = 3;
      }

      else if (counter == 3) {
        $("#active").focus();
        counter = 4;
      }

      else if (counter == 4) {
        $("#link4").focus();
        counter = 5;
      }

      else if (counter == 5) {
        $("#link5").focus();
        counter = 6;
      }

      else if (counter == 6) {
        $("#link6").focus();
        counter = 7;
      }

      else if (counter == 7) {
        $("#link7").focus();
        counter = 8;
      }

      else if (counter == 8) {
        $("#link8").focus();
        counter = 9;
      }

      else if (counter == 9) {
        $("#link9").focus();
        counter = 10;
      }

      else if (counter == 10) {
        $("#link10").focus();
        counter = 11;
      }

      else if (counter == 11) {
        $("#link11").focus();
        counter = 12;
      }

      else if (counter == 12) {
        $("#link12").focus();
        counter = 13;
      }

      else if (counter == 13) {
        $("#link13").focus();
        counter = 14;
      }

      else if (counter == 14) {
        $("#link14").focus();
        counter = 15;
      }

      else if (counter == 15) {
        $("#link15").focus();
        counter = 16;
      }

      else if (counter == 16) {
        $("#link16").focus();
        counter = 17;
      }

      else if (counter == 17) {
        $("#link17").focus();
        counter = 18;
      }

      else if (counter == 18) {
        $("#link18").focus();
        counter = 19;
      }

      else if (counter == 19) {
        $("#link19").focus();
        counter = 20;
      }

      else if (counter == 20) {
        $("#link20").focus();
        counter = 21;
      }

      else if (counter == 21) {
        $("#link21").focus();
        counter = 22;
      }

      else if (counter == 22) {
        $("#link22").focus();
        counter = 23;
      }

      else if (counter == 23) {
        $("#link23").focus();
        counter = 24;
      }

      else if (counter == 24) {
        $("#link24").focus();
        counter = 25;
      }

      else if (counter == 25) {
        $("#link25").focus();
        counter = 26;
      }

      else if (counter == 26) {
        $("#link26").focus();
        counter = 27;
      }

      else if (counter == 27) {
        $("#link27").focus();
        counter = 28;
      }

      else if (counter == 28) {
        $("#link28").focus();
        counter = 0;
      }
    }
  });
});
