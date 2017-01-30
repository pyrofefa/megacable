function Crane(id) {
    var top = 131; //private
    var left = 100;
	var hspd = 5;
	var vspd = 4;
	var state = false;
	var handleHeight = 83;
	var frames = {
		normal: {'background-position': '-36px -34px',left:11},
		half: {'background-position': '-36px -148px',left:6},
		open: {'background-position': '-28px -270px',left:-2},
	};
	
	//public methods------------------------
	
	/*this.Move = function (t_dir) {			
		
    };
	
	this.Stop = function (t_dir) {

	};*/
	
	this.GetState = function() {return state};
	this.GetLeft = function() {return left};
	this.GetTop = function() {return top};
	
	var Grab = function () {
		top += (state == 'down')?vspd:-vspd; 
		handleHeight += (state == 'down')?vspd:-vspd;

		if(top > 300 && state == 'down') { //when going down

			top = 300;
			//handleHeight = ;
			state = 'up';
			$('#'+id+' #crane-claw').css(frames['half']); 
		} else if(top < 131 && state == 'up') { //when going up
			top = 131;
			handleHeight = 83;
			state = 'drop';
			
		} else if(state == 'drop') { //when up and dropping
			left -= hspd;
			top = 131;
			handleHeight = 83;
			if(left < 30) {
				left = 30;
				$('#'+id+' #crane-claw').css(frames['open']);
				setTimeout(function(){$('#'+id+' #crane-claw').css(frames['normal']);
					state = false;
					objeto.velocidad=hspd;
				},500);
				
			}
		}
    };
	
	this.CheckBoundaries = function () {

		if(left <= 30 || left >= 778)
			{
				this.velocidad = this.velocidad*-1;
				//console.log(this.velocidad);
			}	
	};	

		
	this.velocidad = -hspd;

	var objeto = this;
	window.setTimeout(function(){
		$('#foreground').click(function(event){

			state = 'down';
			objeto.velocidad = 0;
			$('#'+id+' #crane-claw').css(frames['open']);
		})

	},2000);
	

	

	this.Update = function () {
		//console.log(left);
		/*if(keys[37] && !state) //left
			left -= hspd;
			
		if(keys[39] && !state) //right
			left += hspd;*/
		left+=this.velocidad;

		/*var objeto = this;
		$('#foreground').click(function(event){
			
			//console.log("ok");
			state = 'down';
			objeto.velocidad = 0;
			$('#'+id+' #crane-claw').css(frames['open']);
		})*/
		
		if(state) {

			Grab();

		}
		
		this.CheckBoundaries();
	};

	
	this.Repaint = function () {
        $('#'+id).css({'top':top, 'left':left});
		$('#'+id+' #crane-handle-top').css({height: handleHeight});
    };

	
	//private methods----------------------------------
	//var privateMethod = function() {
		
	//};
	
	//'constructor'
	//privateMethod(); //calls private method
	//this.GetUp(); //calls public
}