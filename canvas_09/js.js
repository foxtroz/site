var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
// ctx.fillStyle="red";
// ctx.strokeStyle="green";
// ctx.moveTo(200, 50);
// ctx.quadraticCurveTo(150, 0, 100, 50);

// ctx.quadraticCurveTo(50,150,200,180);
// ctx.quadraticCurveTo(350,150,300,50);
// ctx.quadraticCurveTo(250,0,200,50);
// ctx.stroke();
// ctx.fill();




canvas.onmousemove = function(event){
	var x = event.offsetX;
	var y = event.offsetY;
	ctx.clearRect(0,0, 400, 200);
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.quadraticCurveTo(x,y,50,150);
	ctx.stroke();
	ctx.closePath();
	
}