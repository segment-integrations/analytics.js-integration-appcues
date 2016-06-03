'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');
var load = require('@segment/load-script');

/**
 * Expose `Appcues` integration.
 */

var Appcues = integration('Appcues')
  .assumesPageview()
  .global('Appcues')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * http://appcues.com/docs/
 *
 * @api public
 */

Appcues.prototype.initialize = function() {
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Appcues.prototype.loaded = function() {
  return isObject(window.Appcues);
};

/**
 * Load the Appcues library.
 *
 * @api private
 * @param {Function} callback
 */

Appcues.prototype.load = function(callback) {
  var id = this.options.apiKey || 'appcues';
  load('//fast.appcues.com/' + id + '.js', callback);
};

/**
 * Page.
 *
 * http://appcues.com/docs#start
 *
 * @api public
 */

Appcues.prototype.page = function() {
  window.Appcues.start();
};

/**
 * Identify.
 *
 * http://appcues.com/docs#identify
 *
 * @api public
 * @param {Identify} identify
 */

Appcues.prototype.identify = function(identify) {
  window.Appcues.identify(identify.userId(), identify.traits());
};

/**
 * Expose plugin.
 */

// FIXME(ndhoule): Is this still necessary? I believe this API was deprecated
module.exports = exports = function(analytics) {
  analytics.addIntegration(Appcues);
};

exports.Integration = Appcues;
