// u is shorthand for  UNOCCUPIED 
// o is shorthand for OCCUPIED

//whenever array present we have this structure
// 0 1 2
// 3 4 5
// 6 7 8 

$(document).ready(function() {
  var tieCount = 0;
  var lostCount = 0;
  var countss = 0;
  var clicked = true;
  var Counts = 0;
  var player1 = '';
  var player2 = '';
  var number = 0;
  var occupation = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
  var MarkYourPosition = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
  var MarkOpponentPosition = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
  var clickStatus = ["off", "off", "off", "off", "off", "off", "off", "off", "off"];
  var finished = false;
  var done = false;
  var initialComp = '';
  var YourFirstMoveDone = false;
  var YourFirstMove = '';

  $(".loseCount").text(lostCount);
  $(".tieCount").text(tieCount);

  function gameover() {

    setTimeout(function() {
      if (finished === true) {
        clickStatus = ["off", "off", "off", "off", "off", "off", "off", "off", "off"];
        $("#box1").text("");
        $("#box2").text("");
        $("#box3").text("");
        $("#box4").text("");
        $("#box5").text("");
        $("#box6").text("");
        $("#box7").text("");
        $("#box8").text("");
        $("#box9").text("");
        initialComp = '';
        done = false
        finished = false;
        YourFirstMoveDone = false;
        YourFirstMove = '';
        occupation = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
        MarkYourPosition = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
        MarkOpponentPosition = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];

        computerFirstResponse();
      }

    }, 2200);

  }

  function computerFirstResponse() {
    number = Math.floor((Math.random() * 9) + 0);

    if (number === 0 || number === 2 || number === 6 || number === 8) {
      initialComp = "corner";
    }
    if (number === 1 || number === 3 || number === 5 || number === 7) {
      initialComp = "edge";
    }
    if (number === 4) {

      initialComp = "center";
    }
    opponent_check_location();

  }

  $("button").on("click", function() {

    if ($(this).text() === "x") {
      player1 = "x";
      player2 = "o";
    } else if ($(this).text() === "o") {
      player1 = "o";
      player2 = "x";
    }
    modalGoAway();
    computerFirstResponse()
  });

  $(".first").on("click", function() {
    if (clickStatus[0] === "off") {
      $("#box1").text(player1);

      MarkYourPosition[0] = "o";
      occupation[0] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "corner";

      }
      opponentResponse();
      line();
      clickStatus[0] = "on";
    }
  });
  $(".second").on("click", function() {
    if (clickStatus[1] === "off") {
      $("#box2").text(player1);
      MarkYourPosition[1] = "o";
      occupation[1] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "edge";

      }

      opponentResponse();
      line();
      clickStatus[1] = "on";
    }
  });
  $(".third").on("click", function() {
    if (clickStatus[2] === "off") {
      $("#box3").text(player1);
      MarkYourPosition[2] = "o";
      occupation[2] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "corner";

      }
      opponentResponse();
      line();
      clickStatus[2] = "on";
    }
  });
  $(".fourth").on("click", function() {
    if (clickStatus[3] === "off") {
      $("#box4").text(player1);
      MarkYourPosition[3] = "o";
      occupation[3] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "edge";

      }
      opponentResponse();
      line();
      clickStatus[3] = "on";
    }
  });
  $(".fifth").on("click", function() {
    if (clickStatus[4] === "off") {
      $("#box5").text(player1);
      MarkYourPosition[4] = "o";
      occupation[4] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "center";

      }
      opponentResponse();
      line();
      clickStatus[4] = "on";
    }
  });
  $(".sixth").on("click", function() {
    if (clickStatus[5] === "off") {
      $("#box6").text(player1);
      MarkYourPosition[5] = "o";
      occupation[5] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "edge";

      }
      opponentResponse();
      line();
      clickStatus[5] = "on";
    }
  });
  $(".seventh").on("click", function() {
    if (clickStatus[6] === "off") {
      $("#box7").text(player1);
      MarkYourPosition[6] = "o";
      occupation[6] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "corner";

      }
      opponentResponse();
      line();
      clickStatus[6] = "on";
    }
  });
  $(".eigth").on("click", function() {
    if (clickStatus[7] === "off") {
      $("#box8").text(player1);
      MarkYourPosition[7] = "o";
      occupation[7] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "edge";

      }
      opponentResponse();
      line();
      clickStatus[7] = "on";
    }
  });
  $(".ninth").on("click", function() {
    if (clickStatus[8] === "off") {
      $("#box9").text(player1);

      occupation[8] = "o";
      MarkYourPosition[8] = "o";
      if (YourFirstMoveDone === false) {
        YourFirstMoveDone = true;
        YourFirstMove = "corner";

      }
      opponentResponse();
      line();
      clickStatus[8] = "on";
    }
  });

  function opponentResponse() {
    if (initialComp === "center") {

      if (YourFirstMove === "edge") {
        opponentResponseCorner();
        YourFirstMove = "done";

      } else {
        YourFirstMove = "done";
        SearchForConnect();

      }
    } else if (initialComp === "corner") {
      if (YourFirstMove === "corner" || YourFirstMove === "edge") {

        $("#box5").text(player2);
        occupation[4] = "o";
        MarkOpponentPosition[4] = "o";
        YourFirstMove = "done";
        clickStatus[4] = "on";

      } else if (YourFirstMove === "center") {
        if (occupation[0] === "o" || occupation[2] === "o") {
          while (!done) {
            number = Math.floor((Math.random() * 9) + 0);
            if (number === 6) {
              $("#box7").text(player2);
              occupation[number] = "o";
              MarkOpponentPosition[number] = "o";
              clickStatus[number] = "on";
              done = true;
            }
            if (number === 8) {
              $("#box9").text(player2);
              occupation[number] = "o";
              MarkOpponentPosition[number] = "o";
              done = true;
              clickStatus[number] = "on";
            }

          }
        }

        if (occupation[6] === "o" || occupation[8] === "o") {
          while (!done) {
            number = Math.floor((Math.random() * 9) + 0);
            if (number === 0) {
              $("#box1").text(player2);
              occupation[number] = "o";
              MarkOpponentPosition[number] = "o";
              done = true;
              clickStatus[0] = "on";
            }
            if (number === 2) {
              $("#box3").text(player2);
              occupation[number] = "o";
              MarkOpponentPosition[number] = "o";
              clickStatus[2] = "on";
              done = true;
            }

          }

        }
        YourFirstMove = "done";

      } else if (YourFirstMove === "done") {
        SearchForConnect();
        opponent_check_location();
      }
    } else if (initialComp === "edge") {
      if (YourFirstMove === "dones") {

        SearchForConnect();

      }
      if (YourFirstMove === "edge" || YourFirstMove === "corner") {
        $("#box5").text(player2);
        occupation[4] = "o";
        MarkOpponentPosition[4] = "o";
        YourFirstMove = "dones";
        clickStatus[4] = "on";

      } else if (YourFirstMove === "center") {
        opponentResponseCorner();

        YourFirstMove = "done";

      }
      if (YourFirstMove === "done") {

        SearchForConnect();

      }

    }
    done = false;

  }

  function opponent_check_location() {
    if (number === 0) {
      $("#box1").text(player2);
      occupation[0] = "o";
      MarkOpponentPosition[0] = "o";
      clickStatus[0] = "on";
    }
    if (number === 1) {
      $("#box2").text(player2);
      occupation[1] = "o";
      MarkOpponentPosition[1] = "o";
      clickStatus[1] = "on";
    }
    if (number === 2) {
      $("#box3").text(player2);
      occupation[2] = "o";
      MarkOpponentPosition[2] = "o";
      clickStatus[2] = "on";
    }
    if (number === 3) {
      $("#box4").text(player2);
      occupation[3] = "o";
      MarkOpponentPosition[3] = "o";
      clickStatus[3] = "on";
    }
    if (number === 4) {
      $("#box5").text(player2);
      occupation[4] = "o";
      MarkOpponentPosition[4] = "o";
      clickStatus[4] = "on";
    }
    if (number === 5) {
      $("#box6").text(player2);
      occupation[5] = "o";
      MarkOpponentPosition[5] = "o";
      clickStatus[5] = "on";
    }
    if (number === 6) {
      $("#box7").text(player2);
      occupation[6] = "o";
      MarkOpponentPosition[6] = "o";
      clickStatus[6] = "on";
    }
    if (number === 7) {
      $("#box8").text(player2);

      MarkOpponentPosition[7] = "o";
      occupation[7] = "o";
      clickStatus[7] = "on";
    }
    if (number === 8) {
      $("#box9").text(player2);
      MarkOpponentPosition[8] = "o";

      occupation[8] = "o";
      clickStatus[8] = "on";
    }

  }

  function SearchForConnect() {
    if (((MarkYourPosition[0] === "o" && MarkYourPosition[3] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[3] === "o")) && occupation[6] === "u") {

      $("#box7").text(player2);
      MarkOpponentPosition[6] = "o";
      occupation[6] = "o";
      clickStatus[6] = "on";
    } else if (((MarkYourPosition[3] === "o" && MarkYourPosition[6] === "o") || (MarkOpponentPosition[3] === "o" && MarkOpponentPosition[6] === "o")) && occupation[0] === "u") {

      $("#box1").text(player2);
      MarkOpponentPosition[0] = "o";
      occupation[0] = "o";
      clickStatus[0] = "on";
    } else if (((MarkYourPosition[1] === "o" && MarkYourPosition[4] === "o") || (MarkOpponentPosition[1] === "o" && MarkOpponentPosition[4] === "o")) && occupation[7] === "u") {

      $("#box8").text(player2);
      MarkOpponentPosition[7] = "o";
      occupation[7] = "o";
      clickStatus[7] = "on";
    } else if (((MarkYourPosition[4] === "o" && MarkYourPosition[7] === "o") || (MarkOpponentPosition[4] === "o" && MarkOpponentPosition[7] === "o")) && occupation[1] === "u") {

      $("#box2").text(player2);
      MarkOpponentPosition[1] = "o";
      occupation[1] = "o";
      clickStatus[1] = "on";
    } else if (((MarkYourPosition[2] === "o" && MarkYourPosition[5] === "o") || (MarkOpponentPosition[2] === "o" && MarkOpponentPosition[5] === "o")) && occupation[8] === "u") {

      $("#box9").text(player2);
      MarkOpponentPosition[8] = "o";
      occupation[8] = "o";
      clickStatus[8] = "on";
    } else if (((MarkYourPosition[5] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[5] === "o" && MarkOpponentPosition[8] === "o")) && occupation[2] === "u") {

      $("#box3").text(player2);
      MarkOpponentPosition[2] = "o";
      occupation[2] = "o";
      clickStatus[2] = "on";
    } else if (((MarkYourPosition[0] === "o" && MarkYourPosition[1] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[1] === "o")) && occupation[2] === "u") {

      $("#box3").text(player2);
      MarkOpponentPosition[2] = "o";
      occupation[2] = "o";
      clickStatus[2] = "on";
    } else if (((MarkYourPosition[1] === "o" && MarkYourPosition[2] === "o") || (MarkOpponentPosition[1] === "o" && MarkOpponentPosition[2] === "o")) && occupation[0] === "u") {

      $("#box1").text(player2);
      MarkOpponentPosition[0] = "o";
      occupation[0] = "o";
      clickStatus[0] = "on";
    } else if (((MarkYourPosition[3] === "o" && MarkYourPosition[4] === "o") || (MarkOpponentPosition[3] === "o" && MarkOpponentPosition[4] === "o")) && occupation[5] === "u") {

      $("#box6").text(player2);
      MarkOpponentPosition[5] = "o";
      occupation[5] = "o";
      clickStatus[5] = "on";
    } else if (((MarkYourPosition[4] === "o" && MarkYourPosition[5] === "o") || (MarkOpponentPosition[4] === "o" && MarkOpponentPosition[5] === "o")) && occupation[3] === "u") {

      $("#box4").text(player2);
      MarkOpponentPosition[3] = "o";
      occupation[3] = "o";
      clickStatus[3] = "on";
    } else if (((MarkYourPosition[6] === "o" && MarkYourPosition[7] === "o") || (MarkOpponentPosition[6] === "o" && MarkOpponentPosition[7] === "o")) && occupation[8] === "u") {

      $("#box9").text(player2);
      MarkOpponentPosition[8] = "o";
      occupation[8] = "o";
      clickStatus[8] = "on";
    } else if (((MarkYourPosition[7] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[7] === "o" && MarkOpponentPosition[8] === "o")) && occupation[6] === "u") {

      $("#box7").text(player2);
      MarkOpponentPosition[6] = "o";
      occupation[6] = "o";
      clickStatus[6] = "on";
    } else if (((MarkYourPosition[0] === "o" && MarkYourPosition[4] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[4] === "o")) && occupation[8] === "u") {

      $("#box9").text(player2);
      MarkOpponentPosition[8] = "o";
      occupation[8] = "o";
      clickStatus[8] = "on";
    } else if (((MarkYourPosition[4] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[4] === "o" && MarkOpponentPosition[8] === "o")) && occupation[0] === "u") {

      $("#box1").text(player2);
      MarkOpponentPosition[0] = "o";
      occupation[0] = "o";
      clickStatus[0] = "on";
    } else if (((MarkYourPosition[2] === "o" && MarkYourPosition[4] === "o") || (MarkOpponentPosition[2] === "o" && MarkOpponentPosition[4] === "o")) && occupation[6] === "u") {

      $("#box7").text(player2);
      MarkOpponentPosition[6] = "o";
      occupation[6] = "o";
      clickStatus[6] = "on";
    } else if (((MarkYourPosition[4] === "o" && MarkYourPosition[6] === "o") || (MarkOpponentPosition[4] === "o" && MarkOpponentPosition[6] === "o")) && occupation[2] === "u") {

      $("#box3").text(player2);
      MarkOpponentPosition[2] = "o";
      occupation[2] = "o";
      clickStatus[2] = "on";
    } else if (((MarkYourPosition[0] === "o" && MarkYourPosition[2] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[2] === "o")) && occupation[1] === "u") {

      $("#box2").text(player2);
      MarkOpponentPosition[1] = "o";
      occupation[1] = "o";
      clickStatus[1] = "on";
    } else if (((MarkYourPosition[0] === "o" && MarkYourPosition[6] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[6] === "o")) && occupation[3] === "u") {

      $("#box4").text(player2);
      MarkOpponentPosition[3] = "o";
      occupation[3] = "o";
      clickStatus[3] = "on";
    } else if (((MarkYourPosition[2] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[2] === "o" && MarkOpponentPosition[8] === "o")) && occupation[5] === "u") {

      $("#box6").text(player2);
      MarkOpponentPosition[5] = "o";
      occupation[5] = "o";
      clickStatus[5] = "on";
    } else if (((MarkYourPosition[6] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[6] === "o" && MarkOpponentPosition[8] === "o")) && occupation[7] === "u") {

      $("#box8").text(player2);
      MarkOpponentPosition[7] = "o";
      occupation[7] = "o";
      clickStatus[7] = "on";
    } else if (((MarkYourPosition[1] === "o" && MarkYourPosition[7] === "o") || (MarkOpponentPosition[1] === "o" && MarkOpponentPosition[7] === "o")) && occupation[4] === "u") {

      $("#box5").text(player2);
      MarkOpponentPosition[4] = "o";
      occupation[4] = "o";
      clickStatus[4] = "on";
    } else if (((MarkYourPosition[3] === "o" && MarkYourPosition[5] === "o") || (MarkOpponentPosition[3] === "o" && MarkOpponentPosition[5] === "o")) && occupation[4] === "u") {

      $("#box5").text(player2);
      MarkOpponentPosition[4] = "o";
      occupation[4] = "o";
      clickStatus[4] = "on";
    } else {

      while (!done) {
        number = Math.floor((Math.random() * 9) + 0);
        if (occupation[number] === "u") {
          done = true;
          clickStatus[number] = "on";
        }
      }
      done = false;

      opponent_check_location();

    }

  }

  function opponentResponseCorner() {

    if (occupation[3] === "o") {
      while (!done) {
        number = Math.floor((Math.random() * 9) + 0);
        if (number === 2) {
          $("#box3").text(player2);
          occupation[2] = "o";
          MarkOpponentPosition[2] = "o";
          clickStatus[2] = "on";
          done = true;
        }
        if (number === 8) {
          $("#box9").text(player2);
          occupation[8] = "o";
          MarkOpponentPosition[8] = "o";
          clickStatus[8] = "on";
          done = true;
        }

      }

    }

    if (occupation[1] === "o") {
      while (!done) {
        number = Math.floor((Math.random() * 9) + 0);
        if (number === 6) {
          $("#box7").text(player2);
          occupation[6] = "o";
          MarkOpponentPosition[6] = "o";
          clickStatus[6] = "on";
          done = true;
        }
        if (number === 8) {
          $("#box9").text(player2);
          occupation[8] = "o";
          MarkOpponentPosition[8] = "o";
          clickStatus[8] = "on";
          done = true;
        }

      }
    }
    if (occupation[7] === "o") {
      while (!done) {
        number = Math.floor((Math.random() * 9) + 0);
        if (number === 0) {
          $("#box1").text(player2);
          occupation[0] = "o";
          MarkOpponentPosition[0] = "o";
          clickStatus[0] = "on";
          done = true;
        }
        if (number === 2) {
          $("#box3").text(player2);
          occupation[2] = "o";
          MarkOpponentPosition[2] = "o";
          clickStatus[2] = "on";
          done = true;
        }

      }
    }
    if (occupation[5] === "o") {
      while (!done) {
        number = Math.floor((Math.random() * 9) + 0);
        if (number === 0) {
          $("#box1").text(player2);
          occupation[0] = "o";
          MarkOpponentPosition[0] = "o";
          done = true;
          clickStatus[0] = "on";
        }
        if (number === 6) {
          $("#box7").text(player2);
          occupation[6] = "o";
          MarkOpponentPosition[6] = "o";
          done = true;
          clickStatus[6] = "on";
        }

      }

    }

  }

  function line() {
    if ((MarkYourPosition[0] === "o" && MarkYourPosition[1] === "o" && MarkYourPosition[2] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[1] === "o" && MarkOpponentPosition[2] === "o") && !finished) {

      setTimeout(function() {
        $("#gameOverText").text("");

        document.getElementById("row1").style.visibility = "hidden";
      }, 2200);

      $("#gameOverText").text("You Lose!");
      document.getElementById("row1").style.visibility = "visible";
      lostCount++;
      finished = true;
      gameover();

    }

    if (((MarkYourPosition[3] === "o" && MarkYourPosition[4] === "o" && MarkYourPosition[5] === "o") || (MarkOpponentPosition[3] === "o" && MarkOpponentPosition[4] === "o" && MarkOpponentPosition[5] === "o")) && !finished) {

      $("#gameOverText").text("You Lose!");
      setTimeout(function() {
        $("#gameOverText").text("");
        document.getElementById("row2").style.visibility = "hidden";
      }, 2200);

      $("#gameOverText").text("You lost!");
      document.getElementById("row2").style.visibility = "visible";
      lostCount++;
      gameover();
      finished = true;
    }
    if (((MarkYourPosition[6] === "o" && MarkYourPosition[7] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[6] === "o" && MarkOpponentPosition[7] === "o" && MarkOpponentPosition[8] === "o")) && !finished) {
      setTimeout(function() {
        $("#gameOverText").text("");
        document.getElementById("row3").style.visibility = "hidden";
      }, 2200);

      $("#gameOverText").text("You Lost!");
      document.getElementById("row3").style.visibility = "visible";
      lostCount++;
      finished = true;
      gameover();
    }
    if (((MarkYourPosition[0] === "o" && MarkYourPosition[3] === "o" && MarkYourPosition[6] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[3] === "o" && MarkOpponentPosition[6] === "o")) && !finished) {
      setTimeout(function() {
        document.getElementById("vertical1").style.visibility = "hidden";
        $("#gameOverText").text("");

      }, 2200);
      $("#gameOverText").text("You lost!");
      lostCount++;
      document.getElementById("vertical1").style.visibility = "visible";
      finished = true;

      gameover();
    }
    if (((MarkYourPosition[1] === "o" && MarkYourPosition[4] === "o" && MarkYourPosition[7] === "o") || (MarkOpponentPosition[1] === "o" && MarkOpponentPosition[4] === "o" && MarkOpponentPosition[7] === "o")) && !finished) {

      setTimeout(function() {
        document.getElementById("vertical2").style.visibility = "hidden";
        $("#gameOverText").text("");
      }, 2200);
      $("#gameOverText").text("You lost!");
      document.getElementById("vertical2").style.visibility = "visible";
      lostCount++;
      finished = true;
      gameover();

    }
    if (((MarkYourPosition[2] === "o" && MarkYourPosition[5] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[2] === "o" && MarkOpponentPosition[5] === "o" && MarkOpponentPosition[8] === "o")) && !finished) {
      setTimeout(function() {

        $("#gameOverText").text("");
        document.getElementById("vertical3").style.visibility = "hidden";
      }, 2200);
      $("#gameOverText").text("You just lost!");
      finished = true;
      document.getElementById("vertical3").style.visibility = "visible";
      lostCount++;
      gameover();
    }
    if (((MarkYourPosition[0] === "o" && MarkYourPosition[4] === "o" && MarkYourPosition[8] === "o") || (MarkOpponentPosition[0] === "o" && MarkOpponentPosition[4] === "o" && MarkOpponentPosition[8] === "o") && !finished)) {
      setTimeout(function() {
        $("#gameOverText").text("");
        document.getElementById("diagonal1").style.visibility = "hidden";
      }, 2200);
      $("#gameOverText").text("You Lost!!");
      document.getElementById("diagonal1").style.visibility = "visible";
      lostCount++;
      finished = true;
      gameover();
    }
    if (((MarkYourPosition[2] === "o" && MarkYourPosition[4] === "o" && MarkYourPosition[6] === "o") || (MarkOpponentPosition[2] === "o" && MarkOpponentPosition[4] === "o" && MarkOpponentPosition[6] === "o") && !finished)) {
      setTimeout(function() {
        document.getElementById("diagonal2").style.visibility = "hidden";
        $("#gameOverText").text("");
      }, 2200);
      $("#gameOverText").text("You lost!");
      document.getElementById("diagonal2").style.visibility = "visible";
      lostCount++;
      finished = true;
      gameover();

    }
    if ((occupation[0] === "o" && occupation[1] === "o" && occupation[2] === "o" && occupation[3] === "o" && occupation[4] === "o" && occupation[5] === "o" && occupation[6] === "o" && occupation[7] === "o" && occupation[8] === "o") && !finished) {
      setTimeout(function() {
        $("#gameOverText").text("");

      }, 2200);
      $("#gameOverText").text("you tied!");
      finished = true;
      tieCount++;
      gameover();
    }
    $(".loseCount").text(lostCount);
    $(".tieCount").text(tieCount);
  }

  function modalGoAway() {
    $("#modal").fadeOut(200);

  }
});