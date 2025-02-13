"use strict";

function trueFalse(tf){
	if (tf === 1){
		return true;
	}
	return false;
}

function checkInitInstGame(rth) {
	// Must check plugin used in project
	if (globalThis.C3.Plugins.InstantGames)
	{
		if (typeof rth.igPlugin == 'undefined') {
			rth.igPlugin = rth._runtime.GetPluginManager().GetPluginByConstructorFunction(globalThis.C3.Plugins.InstantGames);
			rth.igInst = rth.igPlugin.GetSingleGlobalInstance().GetSdkInstance();

			//igInst.SetContextId("...");
			//igInst.SetContextType("...");

			//console.log(rth.igPlugin);
			//console.log(rth.igInst);

		} else {
			//console.log("Plugin already init");
		}
		return true;
	} else {
		console.error("No Instant-Games-Plugin found! Please add the Instant-Games-Plugin to your project!");
	}
	return false;
}

{
	globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Acts =
	{
		init() {
			checkInitInstGame(this);
		},

		updateAsync(b64, data, action, notification, strategy, cta, template, text) {
			if(checkInitInstGame(this)) {
				FBInstant["updateAsync"]({
					"action": action,
					"cta": cta,
					"image": b64,
					"text": text,
					"notification": notification,
					"strategy" : strategy,
					"template": template,
					"data": { "data": data }
				});
			}
		},

		chooseAsync() {
			if(checkInitInstGame(this)) {
				FBInstant.context.chooseAsync().then(function() {
					let conId = FBInstant.context.getID();
				    this.igInst.SetContextId(conId);

				    let contextType = FBInstant.context.getType();
				    this.igInst.SetContextType(contextType);

				    this._trigger(globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds.chooseAsyncSuc);
				});
			}
		},

		switchGameAsync(gameid) {
			if(checkInitInstGame(this)) {
				FBInstant.switchGameAsync(gameid).catch(function (e) {
			  		console.log("Facebook (Error): Can not switch the game");
				});
			}
		},

		matchAsyncPlayer(str,switchauto) {
			if(checkInitInstGame(this)) {
				if(str=="") {
					FBInstant.matchPlayerAsync(null,trueFalse(switchauto)).then(function() {
						this.igInst.SetContextId(FBInstant.context.getID());

						let contextType = FBInstant.context.getType();
				    	this.igInst.SetContextType(contextType);
				    	
				    	this._trigger(globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds.joinedMatchGame);
					});
				} else {
					FBInstant.matchPlayerAsync(str,trueFalse(switchauto)).then(function() {
						this.igInst.SetContextId(FBInstant.context.getID());

						let contextType = FBInstant.context.getType();
				    	this.igInst.SetContextType(contextType);

				    	this._trigger(globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds.joinedMatchGame);
					});
				}
			}
		},

		checkCanMatchAsync() {
			if(checkInitInstGame(this)) {
				FBInstant.checkCanPlayerMatchAsync().then(canMatch => {
					this.canMatchAsync = canMatch;
					if(canMatch == true) {
						this._trigger(globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds.conCanMatchAsync);
					} else {
						this._trigger(globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Cnds.conCanNotMatchAsync);
					}
				});
			}
		},

		quit() {
			if(checkInitInstGame(this)) {
				FBInstant.quit();
			}
		}

	};
}