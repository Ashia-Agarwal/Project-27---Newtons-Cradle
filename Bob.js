class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        };
        this.body = Matter.Bodies.circle(x, y, 50, options);
        Matter.World.add(world, this.body);
    }

    display() {
        ellipseMode(CENTER);
        fill(0, 255, 255);
        ellipse(this.body.position.x, this.body.position.y, 100);
    }
}