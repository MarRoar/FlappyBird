        function Pipe(img1,img2,x){
           this.pipeY=(Math.random())*150+50;
           this.img1=img1;  //shang
           this.img2=img2;
           this.x=x;
           this.speed=-0.3;
           this.count=0;
       }
       Pipe.prototype.update=function(dt){
           if(this.x<-52){
            this.x=1000+this.x;
            this.pipeY=(Math.random())*150+50;
           }
           this.x=this.x+this.speed*dt;
       };
       Pipe.prototype.draw=function(){
            ctx.drawImage(this.img1,this.x,this.pipeY-420);
            ctx.drawImage(this.img2,this.x,this.pipeY+150);

            ctx.rect(this.x, this.pipeY-420, 52,420);
            ctx.rect(this.x, this.pipeY+150, 52,420);
       }
