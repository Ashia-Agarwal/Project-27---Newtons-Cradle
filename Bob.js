class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
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