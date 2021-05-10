class Circ {
  constructor(x, y, r, img) {
    this.pos = createVector(x, y);
    this.r = r;
    this.fishes = img;
  }

  render() {
    
      image(this.fishes, this.pos.x, this.pos.y);
   
  }
}
