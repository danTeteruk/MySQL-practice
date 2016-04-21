'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('user creation page', function () {
  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      // this.model.User.destroy({ truncate: true })
    ]);
  });

});
