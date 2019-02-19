// main.js
let human;
function preload(){
	human = loadImage('assets/hacker.jpeg')
}

function setup() {
	createCanvas(1000,1000);
	human = new Hacker
}
function draw() {
	background(150);
	human.move();
	human.display();
	this.speed = 1++;
	

}

class Hacker{
	constructor(){
	this.x = random(width);
	this.y = random(height);

}
display(){
	image(hacker(hackerPic));
}