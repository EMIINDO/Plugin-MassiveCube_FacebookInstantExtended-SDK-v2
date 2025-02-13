"use strict";

{
	globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds =
	{
		conCanMatchAsync() {
			return true;
		},
		conCanNotMatchAsync() {
			return true;
		},
		joinedMatchGame() {
			return true;
		},
		chooseAsyncSuc() {
			return true;
		},
		IsLargeNumber(number)
		{
			return number > 100;
		}
	};
}