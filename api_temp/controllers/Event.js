'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsCodeEventGET = function eventsCodeEventGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventsCodeEventGET(codeEvent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsCodeEventPeopleGET = function eventsCodeEventPeopleGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventsCodeEventPeopleGET(codeEvent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsCodeEventServicesGET = function eventsCodeEventServicesGET (req, res, next) {
  var codeEvent = req.swagger.params['CodeEvent'].value;
  Event.eventsCodeEventServicesGET(codeEvent)
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

module.exports.eventsMonthGET = function eventsMonthGET (req, res, next) {
  var month = req.swagger.params['Month'].value;
  Event.eventsMonthGET(month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
