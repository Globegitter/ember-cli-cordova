'use strict';

var commands   = require('./lib/commands');
var postBuild = require('./lib/tasks/post-build');

function EmberCLICordova(project) {
  this.project = project;
  this.name    = 'Ember CLI Cordova';
  this.setConfig();
}

EmberCLICordova.prototype.includedCommands = function() {
  return commands;
}

EmberCLICordova.prototype.setConfig = function(){
  var env = this.project.config('development');

  if(!this.config) {
    this.config = {};
  }

  if (env.cordova) {
    this.config = env.cordova;
  }
}

EmberCLICordova.prototype.postBuild = function() {
  return postBuild(this.project, this.config)();
}

// Compatability with < 0.0.38
EmberCLICordova.prototype.included = function() { }
EmberCLICordova.prototype.treeFor = function() { }

module.exports = EmberCLICordova;
