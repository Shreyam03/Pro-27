class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,100,800,50,options);
        this.width=800;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}