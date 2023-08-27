'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.personCodePersonEventsGET = function personCodePersonEventsGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodePersonEventsGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personCodePersonGET = function personCodePersonGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodePersonGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personCodePersonServicesGET = function personCodePersonServicesGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodePersonServicesGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personGET = function personGET (req, res, next) {
  Person.personGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};