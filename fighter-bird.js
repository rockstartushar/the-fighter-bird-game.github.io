const ground = document.getElementById("animate");
const bird = document.getElementById("bird");
const start_btn = document.getElementById("strtbtn-link");
start_btn.addEventListener("click", function () {
  audio1 = document.createElement("AUDIO");
  document.body.appendChild(audio1);
  audio1.src = "fightbg.mp3";
  audio1.play();
  audio1.loop=true;
});
function playBirdOver() {
  audio1.pause();
  audio1.remove();
  audio1 = document.createElement("AUDIO");
  document.body.appendChild(audio1);
  audio1.src = "birdover.mp3";
  audio1.play();
}
$('#up').click(function() {
  birdUp();
});
$('#down').click(function() {
  birdDown();
});
function pxToNum(px) {
  var pos = px.indexOf('p');
  var numval = Number(px.slice(0,
    pos));
  return numval;
}
function birdUp() {
  var marginval = bird.style.marginTop;
  var numval = pxToNum(marginval);
  numval -= 5;
  bird.style.marginTop = numval+"px";
}
function birdDown(checkGravity) {
  var birdMarginTopVal = bird.style.marginTop;
  var numval = pxToNum(birdMarginTopVal);
  if(checkGravity=="gravity"){
    numval += 1;
    bird.style.marginTop = numval+"px";
  } else {
    numval += 10;
    bird.style.marginTop = numval+"px";
  }
}
function keyController(event) {
  if(event.key == "ArrowUp") {
     console.log("Up");
    birdUp();
  } else {
    console.log("down");
    birdDown();
  }
}

/*$("#strtbtn-link").click(function() {
  var op = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (op == 1) {
      op = 0;
    } else {
      op += 0.2;
      ground.style.opacity = op;
    }
  }
});
*/


function gameplay() {
  $("header").hide();
  $('body').css({
    backgroundColor: 'white'
  });
  $('#strtbtn').css({
    display: 'none'
  });
  $('#sayings').css({
    display: 'none'
  });
  $('#status').css({
    display: 'block',
    height: '5%',
  });
  $("footer").hide();
  $('#scr').css({
    display: 'inline'
  });
  $('#controllerSec').css({
    display: 'grid'
  });
  var elem = document.getElementById("scr").children;
  var elem1 = document.getElementById("bird");
  var elem2 = document.getElementById("eagle");
  var elem3 = document.getElementById("evil");
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.display = "block";
  }
  var i = 1;
  var posV = 0,
  posH = screen.width,
  evilH = 150,
  min = 0,
  max = 7,
  x = 0,
  y = 0;
  var timer = setInterval(startTime, 100);
  var gravity = setInterval(gravity, 100);
  var moveEagle = setInterval(eagleframe, 30);
  var moveEvil = setInterval(evilFrame, 30);
  var evilHeight = setInterval(evilHeight, 1000);
  var eagleHeight = setInterval(eagleHeight, 600);
  var gameover = setInterval(checkOverlap, 1000);
  function gravity() {
    birdDown("gravity");
  }
  function startTime() {
    $("#time").html(i);
    i++;
  }
  function eagleframe() {
    if (posH == 0) {
      posH = screen.width;
    } else {
      elem2.style.marginLeft = posH + "px";
      posH -= 1;
    }
  }
  function evilFrame() {
    if (posH == 0) {
      posH = screen.width;
    } else {
      elem3.style.marginLeft = posH + "px";
      posH -= 1;
    }
  }
  function eagleHeight() {
    var r = Math.floor(Math.random()*(max - min) + min);
    if (r == 1) {
      elem2.style.marginTop = 10+"px";
    } else if (r == 2) {
      elem2.style.marginTop = 30+"px";
    } else if (r == 3) {
      elem2.style.marginTop = 50+"px";
    } else if (r == 4) {
      elem2.style.marginTop = 70+"px";
    } else if (r == 5) {
      elem2.style.marginTop = 90+"px";
    } else if (r == 6) {
      elem2.style.marginTop = 30+"px";
    } else {
      elem2.style.marginTop = -10+"px";
    }
  }
  function evilHeight() {
    var r = Math.floor(Math.random()*(max - min) + min);
    if (r == 1) {
      elem3.style.height = 90+"px";
      elem3.style.marginTop = 250+"px";
    } else if (r == 2) {
      elem3.style.height = 110+"px";
      elem3.style.marginTop = 230+"px";
    } else if (r == 3) {
      elem3.style.height = 130+"px";
      elem3.style.marginTop = 210+"px";
    } else if (r == 4) {
      elem3.style.height = 150+"px";
      elem3.style.marginTop = 190+"px";
    } else if (r == 5) {
      elem3.style.height = 170+"px";
      elem3.style.marginTop = 170+"px";
    } else if (r == 6) {
      elem3.style.height = 190+"px";
      elem3.style.marginTop = 150+"px";
    } else {
      elem3.style.height = 210+"px";
      elem3.style.marginTop = 130+"px";
    }
  }
  var i = 0;
  function checkOverlap() {
    var bmt = pxToNum(elem1.style.marginTop);
    var bmr = pxToNum(elem1.style.marginRight);
    var bml = pxToNum(elem1.style.marginLeft);
    var emt = pxToNum(elem2.style.marginTop);
    var emr = pxToNum(elem2.style.marginRight);
    var eml = pxToNum(elem2.style.marginLeft);
    var cmt = pxToNum(elem3.style.marginTop);
    var cmth = pxToNum(elem3.style.marginTop)+pxToNum(elem3.style.height);
    var cmb = pxToNum(elem2.style.marginBottom);
    var cmbh = pxToNum(elem3.style.marginBottom)+pxToNum(elem3.style.height);
    var cmr = pxToNum(elem3.style.marginRight);
    var cmrw = pxToNum(elem3.style.marginRight)+pxToNum(elem3.style.width);
    var cml = pxToNum(elem3.style.marginLeft);
    var cmlw = pxToNum(elem3.style.marginLeft)+pxToNum(elem3.style.width);
    var condition1 = (eml <= 195) && ((eml+75) >= 195) && (emt <= (bmt+30)) && ((emt+45) >= bmt);
    var condition2 = (cml <= 195) && ((cml+80) >= 195) && (cmt <= (bmt+30)) && ((cmth) >= bmt);
    var condition3 = (bmt <= -40);
    if (condition1 || condition2 || condition3) {
      showScore();
    }
  }
  function showScore() {
    playBirdOver();
    $("header").show();
    $('#container').css({
      opacity: '0.5',
      width: '100%',
      position: 'absolute'
    });
    $("#scoreInScr").css({
      visibility:'hidden'
    })
    $('#controllerSec').css({
      display: 'none'
    });
    $('#overscr').css({
      display: 'block'
    });
    clearInterval(startTime);
    clearInterval(gravity);
    clearInterval(moveEagle);
    clearInterval(moveEvil);
    clearInterval(eagleHeight);
    clearInterval(evilHeight);
    clearInterval(moveEagle);
    clearInterval(gameover);
    var score = document.getElementById('time').innerHTML;
    document.getElementById('score').innerHTML = score;
  }
}
