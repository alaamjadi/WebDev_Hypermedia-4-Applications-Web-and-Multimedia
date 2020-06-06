const URL = {
  ID: "/" + window.location.search.split("=")[1],
  API: "https://aysa-ojoloo.herokuapp.com/api",
  EVENTS: "/events",
  PERSON: "/person",
  SERVICES: "/services",
};

fetch(URL.API + URL.EVENTS + URL.ID)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    document.title = `${data.event_name}`;
    var L_description = JSON.parse(data.long_description);
    var pic = JSON.parse(data.photo_address);

    document.getElementById("breadcrumb_title").innerHTML =  `<li class="breadcrumb-item">Events</li><li class="breadcrumb-item">${data.event_name}</li>`

    document.getElementById("event_content1").innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><h1>${data.event_name}</h1></div><div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><p class="cus_present"><strong>${L_description[0]}</strong><div id="getPersonFromAPI"></div></p><p><strong>${L_description[1]}</strong><div id="getServiceFromAPI"></div></p></div>`
      
    document.getElementById("event_content2").innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><p><strong>  Date : ${data.event_date.split("T")[0]} , Time: ${data.event_date.split("T")[1].split(".")[0]}</strong></p><p> ${L_description[2]}</p><p> ${L_description[3]}</p><p>${L_description[4]}</p></div>`

    pic.forEach((element) => {
      document.getElementById("gallery").innerHTML += `<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center"><img class="img-fluid img-thumbnail" src="../assets/img/${element}" alt="${data.event_name}"/></div>`;
    });
    return fetch(URL.API + URL.EVENTS + URL.ID + URL.PERSON);
  })
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    if (data.length != 0) {
      data.forEach((element) => {
        document.getElementById(
          "getPersonFromAPI"
        ).innerHTML += `<a class="cus_link" href="member.html?person_id=${element.person_id}"><span>${element.person_name}, </span></a>`;
      });
    } else {
      document.getElementById(
        "getPersonFromAPI"
      ).innerHTML += `<p><span>No organizer involved</span></p>`;
    }
    return fetch(URL.API + URL.EVENTS + URL.ID + URL.SERVICES);
  })
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    if (data.length != 0) {
      data.forEach((element) => {
        document.getElementById(
          "getServiceFromAPI"
        ).innerHTML += `<a class="cus_link" href="service.html?service_id=${element.service_id}"><span>${element.service_name}, </span></a>`;
      });
    } else {
      document.getElementById(
        "getServiceFromAPI"
      ).innerHTML += `<p><span>No services presented</span></p>`;
    }
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });
