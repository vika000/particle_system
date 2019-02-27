let hackerPic;
let hackers = [];
let numberOfHackers = 1000;
let whichHacker = 0;

function setup(){
  createCanvas(800,800);
  hackerPic = loadImage('assets/hacker.jpeg'); // Load the image
  for (let i = 0; i < numberOfHackers; i++){
    hackers[i] = new Hacker();
  }
}

function draw() {
  background(0);
  // Displays the image at its actual size at point (0,0)
  for (let i = 0; i < numberOfHackers; i++){
    if(hackers[i].visible){
      hackers[i].display();
      hackers[i].move();
    }
  }
  // Displays the image at point (0, height/2) at half size
}

function keyPressed(){
  hackers[whichHacker].visible = true;
  whichHacker++;
}

