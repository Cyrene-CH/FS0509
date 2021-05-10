class Cutfish{
    constructor(x,y,r,imgs) {
      this.x = x
      this.y=y 
      this.r = r;
      this.fish =imgs;
      this.image = image;
    this.prevNotInsideFishState = "outside";
    this.chopvalue = 0;
    this.visible = true;
    }
    render() {
    //   fill(255, 0, 175, 100);
    //   noStroke();
      if (this.visible){
         image(this.fish, this.x, this.y, this.r, this.r);
      }
      else{
        textSize(100);
        text("🍣",this.x,this.y);
      }
    }
    






  }