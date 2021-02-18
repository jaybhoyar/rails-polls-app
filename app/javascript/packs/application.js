// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "../stylesheets/application.scss";
import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
var componentRequireContext = require.context("src", true);
var ReactRailsUJS = require("react_ujs");
import "channels";

Rails.start();
ActiveStorage.start();
ReactRailsUJS.useContext(componentRequireContext);
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
