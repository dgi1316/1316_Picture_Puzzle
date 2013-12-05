( function( $, undefined ) {
$.widget( "magic.card", $.mobile.widget, 
	{
	
	options: 
	{
	},
	member:
	{
		_row : 2,
	 	_column : 6,
		_totalCard:0,
	  	_imgSource : "assets/images/",
	 	_imgArray : ["cat.png","Cock.png","Dog.png","Parrot.png","Penguin.png","Rabbit.png"],
	 	_imgData : new Object(),
		 _heading : " Contrary to popular belief, Lorem Ipsum is not simply random text.",

		_instruction:" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.randomised words which don't look even slightly"
	},
	_create: function()
	{
		
	},
	_init: function()
	{
		objThis = this;
		$("#btnRefresh").unbind("click").bind("click", function(e){
			objThis.onBtnRefreshClick(e);
		 	});
		objThis.setCardGameData();	
		objThis.setCardinContainer();
		objThis.fillRandomImage();
		objThis.setCountContainer();
	},
	setCardinContainer:function()
	{
		var objThis = this;
		var cardContainer = $(".cardContainer");
			for(var i=0; i <= objThis.member._row; i++)
			{
				var rowHTML = $("<div class='row' id='"+"row"+""+(i+1)+"'></div>");
				var className = "column";
				if(i == objThis.member._row)
				{
					className = "columnResult";
				}
				for (var j = 0; j < this.member._column; j++)
				{
					var columnHTML = "<div class='"+className+"' id='"+"column"+""+(j+1)+"'></div>";
					rowHTML.append(columnHTML);
				}
				$(rowHTML).appendTo(".cardContainer");
			}
	},
	fillRandomImage:function()
	{
			totalCard = this.member._row * this.member._column;
			var cardContainer = $(".cardContainer");
			$($(".cardContainer")).find('img').remove();
			for(var i=0; i < totalCard; i++)
			{
				var data = this.member._imgArray[Math.floor(Math.random() * this.member._imgArray.length)]; 
			    var imgPath = this.member._imgSource+ data;
				$($(".cardContainer").find('.column')[i]).append("<img class='card-image' src='"+imgPath+"' id='"+(i+1)+"'/>");
			}
	},	
	setCountContainer:function()
  	{
		totalCard = this.member._row * this.member._column;
		var count;
		var nImgLen = $($(".cardContainer")).find('img').length;
		var imgDataArray ; 
	 	var result;
		$($(".cardContainer").find('.columnResult')).html("");
		for (var i = 0; i < this.member._imgArray.length; i++)
		{
			 count = 0;
			 for (var j = 0; j < nImgLen; j++)
			 {
			 	var data = $($(".cardContainer").find('img')[j]).attr("src");
				data = data.split("assets/images/")[1];
			 	if (this.member._imgArray[i] == data) {
			 		count++;
			 	}
			 }
			 result = this.member._imgArray[i] + "-" + count;
			 $($(".cardContainer").find('.columnResult')[i]).html(result);
   		} 
	},
	onBtnRefreshClick:function(event)
  	{
			var objThis = this;
			objThis.fillRandomImage();
			objThis.setCountContainer();
	},
	setCardGameData:function()
	{
		console.log("____________________",$(".heading"))
		$(".heading").html(this.member._heading);
		$(".instruction").html(this.member._instruction);
	},
	})
})( jQuery );
	
	