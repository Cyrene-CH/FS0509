class Catch {
  constructor(x, y, r1,r2) {
    this.x = x;
    this.y = y;
    this.r1 = 120;
    this.r2=50
    this.dsp = dsp;
    this.speed=random(5,15)
  }

  show() {
    let d = dist(a+120, 0, this.x, 0);
//catch fish
    if (keyIsDown(DOWN_ARROW) && d < this.r1) {
      this.dsp = true;
      fica=true
      if (fishes.length<=3) {
      let fish=random(fishpic)
    
        fishes.push(
          new Cutfish(random(80,550), random(370,550), 150,fish)
        );
      //mouseDragged()

      }
      
      rr = 200;
    } else if (d > this.r) {
      rr = 0;
    }




    if (this.dsp === false) {
      noStroke();
      fill(36, 110, 108,op);
      op=op+5
      ellipse(this.x, this.y, this.r1,this.r2);
    }
  }
  move() {
    let d = dist(a+120, 0, this.x, 0);
if(d<this.r1+10){
this.speed=25
}
    this.x += this.speed;

  }

  
}