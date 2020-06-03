'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.serviceNameGET = function serviceNameGET (req, res, next) {
  var name = req.swagger.params['Name'].value;
  Service.serviceNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesGET = function servicesGET (req, res, next) {
  Service.servicesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNameEventGET = function servicesNameEventGET (req, res, next) {
  var name = req.swagger.params['Name'].value;
  Service.servicesNameEventGET(name)
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
