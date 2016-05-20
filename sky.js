function Sky( img ,x){
      this.img=img;
      this.x=x;
      this.speed=-0.01;
    };
Sky.prototype.update=function(dt){
      if(this.x < -800){
        this.x = 1600+this.x;
      }
      this.x=this.x+this.speed*dt;
    };
Sky.prototype.draw=function(){
      ctx.drawImage(this.img,this.x,0  )
    }