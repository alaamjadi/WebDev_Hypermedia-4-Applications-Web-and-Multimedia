'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.servicesGET = function servicesGET (req, res, next) {
  Service.servicesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNameEventsGET = function servicesNameEventsGET (req, res, next) {
  var name = req.swagger.params['Name'].value;
  Service.servicesNameEventsGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNameGET = function servicesNameGET (req, res, next) {
  var name = req.swagger.params['Name'].value;
  Service.servicesNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNamePeopleGET = function servicesNamePeopleGET (req, res, next) {
  var name = req.swagger.params['Name'].value;
  Service.servicesNamePeopleGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
