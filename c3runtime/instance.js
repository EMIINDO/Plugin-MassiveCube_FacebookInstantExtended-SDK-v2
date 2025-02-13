"use strict";

{
    globalThis.C3.Plugins.MassiveCube_FacebookInstantExtended.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            // Initialise object properties
            this._testProperty = 0;

            if (properties)		// note properties may be null in some cases
            {
                this._testProperty = properties[0];
            }

            this.igPlugin = undefined;
            this.igInst = undefined;
            this.canMatchAsync = 0;
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}
