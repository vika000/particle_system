class Hacker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
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

}
