'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventCodeGET = function eventCodeGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventCodeGET(codeEvent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventMonthGET = function eventMonthGET (req, res, next) {
  var month = req.swagger.params['Month'].value;
  Event.eventMonthGET(month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsCodePersonGET = function eventsCodePersonGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventsCodePersonGET(codeEvent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsCodeServicesGET = function eventsCodeServicesGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventsCodeServicesGET(codeEvent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  Event.eventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
