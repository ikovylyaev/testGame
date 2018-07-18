var $count = 0;
var $met1 = true;
var $met2 = true;
var $met3 = true;
var $met4 = true;
var $met5 = true;
var $met6 = true;
var $met7 = true;
var $met8 = true;
var $Math;
var $status = 1;
$(document).ready(function(){
  $("#met1").addClass("notClick");
  $("#met2").addClass("notClick");
  $("#met3").addClass("notClick");
  $("#met4").addClass("notClick");
  $("#met5").addClass("notClick");
  $("#met6").addClass("notClick");
  $("#met7").addClass("notClick");
  $("#met8").addClass("notClick");
  $(".notClick").click(function() {
	    $(this).removeClass("notClick");
	    $(this).addClass("isClick");
	    $count++;
  });
  while ($status == 1) {
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met1").delay(1500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met2").delay(4500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met3").delay(7500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met4").delay(10500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met5").delay(13500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met6").delay(16500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met7").delay(19500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  	$Math = (Math.floor(Math.random() * (5 - 95)) + 5) * (-1);
  	$("#met8").delay(22500).animate({bottom: "50px", left: $Math + "%"}, 6000);
  }
  alert("GameOver");
});