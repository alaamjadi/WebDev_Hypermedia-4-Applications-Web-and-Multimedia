'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personCodeEventsGET = function personCodeEventsGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodeEventsGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personCodeGET = function personCodeGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodeGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personCodeServicesGET = function personCodeServicesGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.personCodeServicesGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
