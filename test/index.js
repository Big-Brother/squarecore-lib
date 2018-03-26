'use strict';

var should = require('chai').should();
var sinon = require('sinon');
var squarecore = require('../');

describe('#versionGuard', function() {
  it('global._squarecore should be defined', function() {
    should.equal(global._squarecore, squarecore.version);
  });

  it('throw a warning if version is already defined', function() {
      sinon.stub(console, 'warn');
      squarecore.versionGuard('version');
      should.equal(console.warn.calledOnce,true);
      should.equal(console.warn.calledWith('More than one instance of squarecore-lib found. Please make sure that you are not mixing instances of classes of the different versions of squarecore.'),true)
  });
});
