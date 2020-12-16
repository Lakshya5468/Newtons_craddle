class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA.body,
            pointB: pointB,
            length: 400,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    display(){
        push();
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        imageMode(CENTER);
        strokeWeight(10);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }