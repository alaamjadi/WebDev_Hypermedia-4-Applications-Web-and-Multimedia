'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.peopleCodePersonEventsGET = function peopleCodePersonEventsGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.peopleCodePersonEventsGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleCodePersonGET = function peopleCodePersonGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.peopleCodePersonGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleCodePersonServicesGET = function peopleCodePersonServicesGET (req, res, next) {
  var codePerson = req.swagger.params['CodePerson'].value;
  Person.peopleCodePersonServicesGET(codePerson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
