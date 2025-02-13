"use strict";
{
	globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Exps =
	{
		getSupportedApis() {
			if (typeof this.igInst !== 'undefined') {
				let getSupApi = FBInstant.getSupportedAPIs();
				if ((getSupApi !== undefined) && (getSupApi !== null)) {
						return getSupApi;
				} else {
					return "";
				}
			} else {return "";}
		},
		getCanMatchAsync() {
			return this.canMatchAsync;
		},
		Double(number)
		{
			return number * 2;
		}
	};
}