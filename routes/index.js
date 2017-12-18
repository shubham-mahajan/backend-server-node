/*
	***************************************************************************************************
	*
	*		Module for exporting the routes from multiple files so that they can be accessed by app.js
	*
	***************************************************************************************************
*/

const login = require("./login");
const createThumbnail = require("./createThumbnail");
const jsonPatch = require("./jsonPatch");
module.exports = [login,createThumbnail,jsonPatch];