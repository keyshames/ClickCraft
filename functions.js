$(document).ready(function(){
	
	var diamond = {
		total: 0,
		unit: 1,
		rate: 1,
        idle: 0,
        boost: 0,
		add : function() {
			diamond.total += (diamond.unit * diamond.rate);
            stats();
		},
		timer : function() {
           setInterval(function() {
               diamond.total += (diamond.unit * diamond.idle);
               stats();
           }, 1400);
		}
	};
    diamond.timer();
	
    
    

	var player = {
		dig : function() {
			diamond.add();
		},
		buy : function(i) {
			if(item[i].cost <= diamond.total){
				diamond.total -= item[i].cost;
				item[i].inventory++;
				switch(item[i].type) {
					case "mining":
						diamond.rate += item[i].rate;
						break;
					case "crafting":
						diamond.idle += item[i].idle;
						break;
					case "upgrade":
						diamond.boost += item[i].boost;
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
					case "mining":
						diamond.rate -= item[i].rate;
						break;
					case "crafting":
						diamond.idle -= item[i].idle;
						break;
					case "upgrade":
						diamond.boost -= item[i].boost;
						break;
				}
				stats();
			}
		}
	};
	
    
    
	var item = {};
	item["picaxe"]          = {type: "mining", inventory: 0, cost: 2, rate: 0.5, resale: 0.5};
    item["torch"]           = {type: "mining", inventory: 0, cost: 2, rate: 0.5, resale: 0.5};
    item["minecart"]        = {type: "mining", inventory: 0, cost: 2, rate: 0.5, resale: 0.5};
    item["rail"]            = {type: "mining", inventory: 0, cost: 2, rate: 0.5, resale: 0.5};
    item["tnt"]             = {type: "mining", inventory: 0, cost: 2, rate: 0.5, resale: 0.5};
    item["table"]           = {type: "crafting", inventory: 0, cost: 2, idle: 0.5, resale: 0.5};
    item["bucket"]          = {type: "crafting", inventory: 0, cost: 2, idle: 0.5, resale: 0.5};
    item["anvil"]           = {type: "crafting", inventory: 0, cost: 2, idle: 0.5, resale: 0.5};
    item["hopper"]          = {type: "crafting", inventory: 0, cost: 2, idle: 0.5, resale: 0.5};
    item["furnace"]         = {type: "crafting", inventory: 0, cost: 2, idle: 0.5, resale: 0.5};
    item["chest"]           = {type: "upgrade", inventory: 0, cost: 2, boost: 0.5, resale: 0.5};
    item["bed"]             = {type: "upgrade", inventory: 0, cost: 2, boost: 0.5, resale: 0.5};
    item["boots"]           = {type: "upgrade", inventory: 0, cost: 2, boost: 0.5, resale: 0.5};
    item["speed potion"]    = {type: "upgrade", inventory: 0, cost: 2, boost: 0.5, resale: 0.5};
    item["fire charge"]     = {type: "upgrade", inventory: 0, cost: 2, boost: 0.5, resale: 0.5};
    
    
    
    
    
    
    

	function stats() {
		$("#total").html(diamond.total);
		$("#rate").html(diamond.rate);
        $("#idle").html(diamond.idle);
		$("#inventory").html(item["picaxe"].inventory);
	}

    
    
    
    
    
	$("#big-diamond").on("click", function() {
		player.dig();
	});
	$(".buy").on("click", function() {
		player.buy($(this).attr("value"));
	});
	$(".sell").on("click", function() {
		player.sell($(this).attr("value"));
	});
	
















});


