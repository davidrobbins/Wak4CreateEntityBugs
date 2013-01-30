
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		//Save Entity.
		waf.sources.car.save({
			onSuccess: function(event) {
				//Did we create the entity with our custom server method.
				if (waf.sources.car.getPosition() == -1) {
					waf.sources.car.addEntity(event.dataSource.getCurrentElement());
				}
			}
		});
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		//Create Entity - Use Server Class Method to run Init Code on Server.
		waf.sources.car.newCar({
			onSuccess: function(event) {
				waf.sources.car.setCurrentEntity(event.result);
			}
		});
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//Create Entity - Use Server Refresh to run Init Code on Server.
		waf.sources.car.addNewElement();
		waf.sources.car.serverRefresh();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
