class Bubble {
    constructor(x,y){
        this.body=Bodies.circle(this.x,this.y,50);
        this.radius=50;
        World.add(world,this.body);
        this.image=loadImage("sprites/wood1.png");
    }
    display(){
        var words=[bat,cat,mat,fat];
       imageMode(CENTER);
        image(this.image,0,0,50,50);
        for(i=0;i<4;i++){
            text(words[i],this.x,this.y,20,20);
        }
    }
}