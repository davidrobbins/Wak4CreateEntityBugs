
guidedModel =// @startlock
{
	Car :
	{
		methods :
		{// @endlock
			newCar:function()
			{// @lock
				return new ds.Car();
			}// @startlock
		},
		events :
		{
			onInit:function()
			{// @endlock
				this.doors = 2;
				this.wheels = 4;
			}// @startlock
		}
	}
};// @endlock
