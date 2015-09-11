$(document).ready(function(){
	//global
	var diamonds=120;
	var ore=0;
	var digRate=1;
	var smeltRate=1;
	
	var player = {
		dig : function() {
			ore=ore+digRate;
			$("#ore").html(ore);
		},
		smelt : function() {
			if(ore>0) {
				ore=ore-smeltRate;
				diamonds=diamonds+smeltRate;
				$("#ore").html(ore);
				$("#diamonds").html(diamonds);
			}
		},
		buy : function(x){
			if(item[x].cost<=diamonds){
				diamonds=diamonds-item[x].cost;
				digRate=digRate+item[x].rate;
				$("#diamonds").html(diamonds);
			}
		}
		
	};
	
	
	
	
	var item = {};
	item['picaxe'] = {cost: 60, ret:20, rate: 0.2, type:mining};





	$("#dig").on("click", function(){
		player.dig();
	});
	$("#smelt").on("click", function(){
		player.smelt();
	});
	$(".buy").on("click", function(){
		player.buy($(this).attr("value"));
		//alert(arr.picaxe.cost);
	});
	
















});


