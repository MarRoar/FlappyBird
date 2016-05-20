        function Bird(img,ctx){
            this.img=img;
        	this.x=200;
        	this.y=100;
        	this.frameIndex=1;
        	this.speed=0;
        	this.accelerate=0.0005;
        	this.waitTime=0;

           var _this=this;

           ctx.addEventListener('click',function(){
              _this.fly();
           });
           
        }
        Bird.prototype.update=function(dt){
        	this.waitTime +=dt;
        	if(this.waitTime > 100){
        		this.frameIndex =(this.frameIndex+1)%3;
        		this.waitTime =this.waitTime - 100;
        	}
            
            this.speed=this.speed+this.accelerate*dt;
            this.y=this.y+this.speed*dt;
        }
        Bird.prototype.draw=function(){
          ctx.save();
             ctx.translate(this.x,this.y);
            
             var speed = this.speed>0.3?0.3:this.speed;
             var angle=speed/0.3*45;

             ctx.rotate(angle/180 * Math.PI);

             ctx.drawImage(this.img,
             52*this.frameIndex,0,52,45, //原图
             -26,-22.5,52,45             // 画布中的
             	);
          ctx.restore();
        };
        Bird.prototype.fly=function(){
        	this.speed=-0.2;
        }