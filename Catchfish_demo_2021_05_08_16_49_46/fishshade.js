class Catch {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dsp = dsp;
  }

  show() {
    let d = dist(a, 0, this.x, 0);
//catch fish
    if (keyIsDown(DOWN_ARROW) && d < this.r) {
      this.dsp = true;
      fica=true
      rr = 200;
    } else if (d > this.r) {
      rr = 0;
    }
    if (this.dsp === false) {
      noStroke();
      fill(0);
      ellipse(this.x, this.y, this.r);
    }
  }
  move() {
    this.x += noise(-0.5);
  }
}