var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var R=200;
var r=140;
var d=120;
var teta = 0;
var timer;

function spiro(){
	var x = (R-r)*Math.cos(teta) + d*Math.cos( (R-r)*teta/r );
	var y = (R-r)*Math.sin(teta) - d*Math.sin( (R-r)*teta/r );
	teta = teta+0.1;
	ctx.fillRect(300+x, 300+y, 4, 4);
	timer = setTimeout(spiro, 50);
}

spiro();
