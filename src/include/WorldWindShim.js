/**
 * This shim is used to switch between the individual WorldWind source files and the minified single file library for
 * the WorldWind module. Switching allows locally developed examples to run from the individual WorldWind source files
 * and hosted examples to use the faster to download minified library. A shim is not required for the use of WorldWind.
 * The minified library (worldwind.min.js) is recommended for use in deployed applications.
 */
define(['./WebWorldWind/WorldWind'], function (WorldWind) {
	"use strict";

	// Override baseUrl for examples... so images will be pulled properly.
	WorldWind.configuration.baseUrl = "/include/WebWorldWind/";
 
	return WorldWind;
 });