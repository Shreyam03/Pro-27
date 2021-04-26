class Chain{
    constructor(BodyA,BodyB,OffsetX,OffsetY){
        this.offsetX=OffsetX;
        this.offsetY=OffsetY
        var options={

            bodyA:BodyA,
            bodyB:BodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Chain= Constraint.create(options);
        World.add(world,this.Chain);
         }
    display(){
        var pointA=this.Chain.bodyA.position;
        var pointB=this.Chain.bodyB.position;
        strokeWeight(5);
        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;
        var anchor2X=pointB.x+this.offsetX;
        var anchor2Y=pointB.y+this.offsetY;

        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
}