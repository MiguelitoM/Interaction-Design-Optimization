// Target class (position and width)
class Target
{
  constructor(x, y, w, h, l, id, l2)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.height = h;
    this.label  = l;
    this.id     = id;
    this.color  = color(155,155,155);
    this.label2 = l2;
  }
  
  setColor(color)
  {
    this.color = color;
  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    if (dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2) {
      this.width *= 1.2;  // Expande ligeiramente
      setTimeout(() => this.width /= 1.2, 100); // Volta ao normal em 100ms
      return true;
    }
  }

  draw()
  {
    // Draw target
    //noStroke();
    fill(this.color);                 
    //circle(this.x, this.y, this.width);
    rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);

    // Draw label
    textFont("Arial", 28);
    fill(color(255,255,255));
    textAlign(CENTER);
    textStyle(BOLD);
    //text(this.label.substring(0, 3).toUpperCase(), this.x, this.y - 15);
    text(this.label2, this.x, this.y - 30);

    // Draw city name
    textFont("Arial", 18);
    fill(color(255,255,255));
    textAlign(CENTER);

    if (this.label.length > 14 && this.label.includes(" ")) {
      let words = this.label.split(" ");
      let half = Math.ceil(words.length / 2);
      let line1 = words.slice(0, half).join(" ");
      let line2 = words.slice(half).join(" ");
      text(line1, this.x, this.y);
      text(line2, this.x, this.y + 20);
    } else {
      text(this.label, this.x, this.y + 10);
    }
  }
}