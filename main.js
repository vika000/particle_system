// main.js
let hackerPic;
let humans = [];
let repeatedHacks = 1000;
let whichHacker = 0;


function setup(){
	createCanvas(1000,1000);
	hackerPic = loadImage('assets/hacker.jpeg')
	
	for(let i = 0; i < repeatedHacks; i++){
		humans[i] = new Hacker();
	}
}
function draw() {
	background(150);
	for (let i = 0; i < repeatedHacks; i++){
    if(humans[i].visible){
      haumans[i].display();
      humans[i].move();
    }
  }
  // Displays the image at point (0, height/2) at half size
}
	
class Hacker{
	constructor(){
	this.x = random(width);
	this.y = random(height);
	this.smallness = random(40)+5;
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-2,2);
    this.visible = false;

}
  display(){
    image(hackerPic, this.x, this.y, this.smallness, this.smallness);
  }

  move(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
