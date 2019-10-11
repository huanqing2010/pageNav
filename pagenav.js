$(document).ready(function(){
	
		//author: qilei
		//  date: 2014-04-15
		//  todo: 边缘需要优化
		// test for git in eclipse
		
		var domEle = "body";			// .class  or  #id  or tagname, but 

		var birdSkanHeight,birdSkanWidth;
		var maxBSHeight = 250;
		var minBSHeight = 100;
		var maxBSWidth = 250; 
		var minBSWidth = 100;

		var pageHeight = $("body").outerHeight();
		var pageWidth = $("body").outerWidth();

		var QBirdSkan = $("<div id='QBirdSkan'></div>");
		//根据页面比例确定鸟瞰图长宽
		var shape =  (pageHeight)/(pageWidth);
		if( shape > 1 || shape == 1 ){
			birdSkanHeight = maxBSHeight;
			birdSkanWidth = birdSkanHeight / shape;
			birdSkanWidth < minBSWidth ? birdSkanWidth  = minBSWidth : birdSkanWidth;//若计算出的宽度过小，用最小宽度代替
		}else{
			birdSkanWidth = maxBSWidth;
			birdSkanHeight = birdSkanWidth * shape;
			birdSkanHeight < minBSHeight ? birdSkanHeight = minBSHeight : birdSkanHeight;//同上
		}
		
		QBirdSkan.css("position","fixed");
		QBirdSkan.css("bottom","0");
		QBirdSkan.css("right","0");

		QBirdSkan.css("height",birdSkanHeight);
		QBirdSkan.css("width",birdSkanWidth);
		QBirdSkan.css("background-color","rgb(D3D3D3)");
		QBirdSkan.css("filter","alpha(opacity=20)");//IE，透明度20%
		QBirdSkan.css("-moz-opacity","0.8)");//Moz+FF,透明度20%
		QBirdSkan.css("opacity","0.2)");//支持CSS3的浏览器,透明度20%

		//设计美化
		QBirdSkan.css("border","solid 8px rgb(230,230,230) ");
		QBirdSkan.css("cursor","pointer");
		
		$("body").append(QBirdSkan);

		//添加鼠标移动相应函数
		QBirdSkan.mouseover(function(event){

			QBirdSkan.mousemove(function(event){
				//根据鸟瞰图中鼠标位置滚动页面位置
				var vRatio = event.offsetX / birdSkanWidth;
				var hRatio = event.offsetY / birdSkanHeight;

				var pageScrollTopVal = pageHeight * hRatio;
				pageScrollTopVal > pageHeight ? pageScrollTopVal = pageHeight : pageScrollTopVal;

				var pageScrollLeftVal = pageWidth * vRatio;
				pageScrollLeftVal > pageWidth ? pageScrollLeftVal = pageWidth : pageScrollLeftVal;

				$("html,body").animate({scrollTop:pageScrollTopVal,scrollLeft:pageScrollLeftVal},0);
			})
			
		});


		
	})
