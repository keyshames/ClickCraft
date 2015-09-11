$(document).ready(function(){
	
	var ore = {
		total: 0,
		unit: 1,
		rate: 1,
		add : function() {
			gain = ore.unit * ore.rate;
			ore.total += gain;
		}
	};
	
	var diamond = {
		total: 0,
		unit: 1,
		rate: 1,
		exchange : function() {
			gain = diamond.unit * diamond.rate;
			if(ore.total>=gain) {
				ore.total -= gain;
				diamond.total += gain;
			} else {
				diamond.total += ore.total;
				ore.total = 0;
			}	
		}
	};
	
	
	
	
	var player = {
		dig : function() {
			ore.add();
			$("#ore").html(ore.total);
		},
		smelt : function() {
			if(ore.total>0) {
				diamond.exchange();
				$("#ore").html(ore.total);
				$("#diamonds").html(diamond.total);
			}
		},
		buy : function(i) {
			if(diamond.total >= item[i].cost){
				diamond.total -= item[i].cost;
				switch(item[i].type) {
					case dig:
						ore.rate += item[i].rate;
						break;
					case smelt:
						diamond.rate += item[i].rate;
						break;
					case boost:
						upgrade.rate += item[i].rate;
						break;
				}
			$("#diamonds").html(diamond.total);
			} else {
				alert("Not enough money");
			}
		},
		sell : function(i) {
			diamond.total += item[i].value;
			switch(item[i].type) {
				case dig:
					ore.rate -= item[i].rate;
					break;
				case smelt:
					diamond.rate -= item[i].rate;
					break;
				case boost:
					upgrade.rate -= item[i].rate;
					break;
			}
		}
	};
	
	
	
	
	var item = {};
	item['picaxe'] = {cost: 2, rate: 0.5, value: 20, type: dig};





	$("#dig").on("click", function(){
		player.dig();
	});
	$("#smelt").on("click", function(){
		player.smelt();
	});
	$(".buy").on("click", function(){
		player.buy($(this).attr("value"));
	});
	$(".sell").on("click", function(){
		player.sell($(this).attr("value"));
	});
	
















});


