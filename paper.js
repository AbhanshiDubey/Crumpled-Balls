class Paper {

    constructor(x,y){

        var option = {
            
          static:false,
             restitution : 0.3 ,
             friction : 0.5 ,
             density : 0.2 
         }
 
         this.body = Bodies.circle(x,y,20,option);
// this.width = 50;
 //this.height = 50;
 
 
         World.add(world,this.body);
     }
 
     display () {
         //
           push ()
           //
         translate(this.body.position.x,this.body.position.y);
         // for rotating the second box.
         rotate (this.body.angle);
         
             ellipseMode(RADIUS);
           //ellipse(0,0,20,20);
           ellipse(0,0,20,20); 
           //
          pop ();
         }

}