var x = 0;
var y = 0;
var gap = 30;
var color2 = '#7D8345';

function setup() {
	createCanvas(500,400);
	background(0);
	
}

function mousePressed() { 
	color2 = '#7D8345'; 
}

function mouseReleased() {
	color2 = 'rgb(231,183,183)'; 
}

function draw() {
	maze();
}

function maze() { 
	stroke(color2);
	strokeWeight(4);
	if (random(2) < 0.7) { 
	line(x, y, x + gap, y + gap);
	} else {
	line(x, y + gap, x + gap, y);
	}
	
	x = x+ 10;
	if (x > width) {
	x = 0;
	y = y + gap;
	}
	
}
