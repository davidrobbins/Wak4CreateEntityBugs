
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button4 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//Server Class method - Create new entity.
		//Create Task on Server (it will run init code).
		waf.sources.car.createNewCar({
			onSuccess: function(event) {
				waf.sources.car.setCurrentEntity(event.result);
				//$$('textField2').focus();
			}
		});
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//Server Refresh - Create new entity.
		//Create New Car Entity. Run init on server.
		waf.sources.task.addNewElement();
		waf.sources.task.serverRefresh();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		//Save Button
		waf.sources.car.save({
			onSuccess: function(event) {
				//Did we create the entity with our custom server method.
				if (waf.sources.car.getPosition() == -1) {
					waf.sources.car.addEntity(event.dataSource.getCurrentElement());
				}
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock
