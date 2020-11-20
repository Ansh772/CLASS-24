class Bird{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(mouseX, mouseY);
        rotate(angle);
        // IT IS USED TO GIVE THICKNESS
        strokeWeight(4);
        stroke("red");
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      };
};