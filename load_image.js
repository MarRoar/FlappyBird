// 加载图片等的一系列操作

	var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
	var imgObjects = [];
	var loadCount=0;
	 function listener(){
	    loadCount++;
	    if(loadCount >= imgs.length){
	    	//当图片都加载完后执行的操作
	    	main();
	    }
	 };
	imgs.forEach(function(imgUrl){
	   var img=new Image();
	   img.addEventListener('load',listener);
	   img.src = 'image/'+ imgUrl;
	   imgObjects.push(img);
	});