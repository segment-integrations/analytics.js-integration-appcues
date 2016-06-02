'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var Appcues = require('../lib/').Integration;

describe('Appcues', function() {
  var appcues;
  var analytics;
  var options = {
    appcuesId: '1663'
  };

  // Disable AMD for these browser tests.
  var _define = window.define;

  beforeEach(function() {
    analytics = new Analytics();
    appcues = new Appcues(options);
    analytics.use(Appcues);
    analytics.use(tester);
    analytics.add(appcues);
    window.define = undefined;
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    sandbox();
    window.define = _define;
  });

  after(function() {
    appcues.reset();
  });

  it('should have the right settings', function() {
    analytics.compare(Appcues, integration('Appcues')
      .assumesPageview()
      .global('Appcues')
      .option('appcuesId', ''));
  });

  describe('before loading', function() {
    beforeEach(function() {
      analytics.stub(appcues, 'load');
    });

    afterEach(function() {
      appcues.reset();
    });

    describe('#initialize', function() {
      it('should call #load', function() {
        analytics.initialize();
        analytics.page();
        analytics.called(appcues.load);
      });
    });
  });

  describe('loading', function() {
    it('should load', function(done) {
      analytics.load(appcues, done);
    });
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
      analytics.page();
    });

    describe('#page', function() {
      beforeEach(function() {
        analytics.stub(window.Appcues, 'start');
      });

      it('should proxy to Appcues.start()', function() {
        analytics.didNotCall(window.Appcues.start);
        analytics.page('Pricing');
        analytics.called(window.Appcues.start);
      });
    });

    describe('#identify', function() {
      beforeEach(function() {
        analytics.stub(window.Appcues, 'identify');
      });

      it('should send and id and traits', function() {
        analytics.identify('id', { trait: true });
        analytics.called(window.Appcues.identify, 'id', { id: 'id', trait: true });
      });
    });
  });
});
