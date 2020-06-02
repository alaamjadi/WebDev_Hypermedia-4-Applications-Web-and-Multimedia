'use strict';


/**
 * Find an event with the event code
 *
 * codeEvent Long Code of the event that we want
 * returns Event
 **/
exports.eventCodeGET = function(codeEvent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of events of a month
 *
 * month Long Number of the month of the events for filtering
 * returns List
 **/
exports.eventMonthGET = function(month) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all persons of an event
 *
 * codeEvent Long Code of an event that we want the related persons
 * returns Person
 **/
exports.eventsCodePersonGET = function(codeEvent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CodePerson" : "Name-Family",
  "FName" : "Name",
  "LName" : "Family",
  "Role" : "Volunteer",
  "Description" : "Biography"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all services of an event
 *
 * codeEvent Long Code of an event that we want the related services
 * returns List
 **/
exports.eventsCodeServicesGET = function(codeEvent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service"
}, {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all the events of the association
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

