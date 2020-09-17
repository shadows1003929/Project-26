class ropeClass {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.b = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {

        var pointA = this.rope.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.b.x, this.b.y)

    }

}