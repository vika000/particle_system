class Hacker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.smallness = random(40)+5;
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-2,2);
    this.visible = false;
    this.direction = true;
  }

  display(){
    image(hackerPic, this.x, this.y, this.smallness, this.smallness);
  }

  move(){
    if(this.direction == true){
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    }else{
      this.x = this.x + -this.xSpeed;
      this.y = this.y + -this.ySpeed;

    }

    if(this.x >= width){
      this.direction = false;

    }
    if(this.x <= 0){
      this.direction = true;
    }
    if(this.y >= height){
      this.direction = false;
    }
    if(this.y <=0){
      this.direction = true;
    }
  }
}