       function Land(img,x){
         this.img=img;
         this.x=x;
         this.speed=-0.03;
       };
       Land.prototype.update=function(dt){
        if(this.x<-336){
          this.x=336*4+this.x;
        }
        this.x=this.x+this.speed*dt;
       };
       Land.prototype.draw=function(){
        ctx.drawImage(this.img,this.x,488);
       };