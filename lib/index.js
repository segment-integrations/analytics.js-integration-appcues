
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
var is = require('is');

/**
 * Expose `Appcues` integration.
 */

var Appcues = module.exports = integration('Appcues')
  .assumesPageview()
  .global('Appcues')
  .option('appcuesId', '')
  .tag('<script src="//fast.appcues.com//{{ appcuesId }}.js">');

/**
 * Initialize.
 *
 * http://appcues.com/docs/
 *
 * @api public
 */

Appcues.prototype.initialize = function() {
  var self = this;
  this.load(function(){ 
    window.appcues.start();
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Appcues.prototype.loaded = function() {
  return is.object(window.Appcues);
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
