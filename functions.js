$(document).ready(function(){
	
	var diamond = {
		total: 0,
		unit: 1,
		rate: 1,
		add : function() {
			diamond.total += (diamond.unit * diamond.rate);
		}
		timer : function() {
			idle
		}
	};
	

	var player = {
		dig : function() {
			diamond.add();
			stats();
		},
		craft : function() {
			diamond.timer();
			stats();
		},
		buy : function(i) {
			if(item[i].cost <= diamond.total){
				diamond.total -= item[i].cost;
				item[i].inventory++;
				switch(item[i].type) {
					case dig:
						diamond.rate += item[i].rate;
						break;
					case craft:
						diamond.rate += item[i].rate;
						break;
					case boost:
						upgrade.rate += item[i].rate;
						break;
				}
				stats();
			}
		},
		sell : function(i) {
			if(item[i].inventory > 0) {
				diamond.total += item[i].resale;
				item[i].inventory--;
				switch(item[i].type) {
					case dig:
						diamond.rate -= item[i].rate;
						break;
					case craft:
						diamond.rate -= item[i].rate;
						break;
					case boost:
						upgrade.rate -= item[i].rate;
						break;
				}
				stats();
			}
		}
	};
	
	var item = {};
	item['picaxe'] = {type: dig, inventory: 0, cost: 2, rate: 0.5, resale: 0.5};

	function stats() {
		$("#diamond").html(diamond.total);
		$("#rate").html(diamond.rate);
		$("#inventory").html(item['picaxe'].inventory);
	}

	$("#dig").on("click", function() {
		player.dig();
	});
	$(".buy").on("click", function() {
		player.buy($(this).attr("value"));
	});
	$(".sell").on("click", function() {
		player.sell($(this).attr("value"));
	});
	
















});


