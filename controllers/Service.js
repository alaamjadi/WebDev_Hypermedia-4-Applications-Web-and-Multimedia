'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.servicesCodeServiceEventsGET = function servicesCodeServiceEventsGET (req, res, next) {
  var codeService = req.swagger.params['CodeService'].value;
  Service.servicesCodeServiceEventsGET(codeService)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesCodeServiceGET = function servicesCodeServiceGET (req, res, next) {
  var codeService = req.swagger.params['CodeService'].value;
  Service.servicesCodeServiceGET(codeService)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesCodeServicePersonGET = function servicesCodeServicePersonGET (req, res, next) {
  var codeService = req.swagger.params['CodeService'].value;
  Service.servicesCodeServicePersonGET(codeService)
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
