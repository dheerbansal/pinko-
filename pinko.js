class Pinko{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.9,
            density:0.9
        }
        
        this.radius = radius
        this.x = x
        this.y = y
       // this.image = loadImage("polygon.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       push();

       for(let i = 0; i < 15; i++){
           
       }
       
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("purple")
        ellipse(this.image,0,0,10,10);
        pop();
        
        
              }
}