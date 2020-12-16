class Ground {

    constructor(x,y,w,h){
    
     var option = {
     isStatic : true,
   //  restitution : 0.3,
   //  friction : 0.5,
   //  density :1.2
            
     }
    
     this.body = Bodies.rectangle(x,y,w,h,option);
        this.width = w ;
        this.height = h ;
    
      World.add(world,this.body);
    
    }
    
    display () {
        //
          push ()
          //
        translate(this.body.position.x,this.body.position.y);
        // for rotating the second box.
        rotate (this.body.angle);
        
            rectMode(CENTER);
          rect(0,0,this.width,this.height);
        
          //
         pop ();
        }
     }