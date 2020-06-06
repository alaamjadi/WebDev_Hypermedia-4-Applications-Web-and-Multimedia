const URL = {
  ID:       '/' + window.location.search.split("=")[1],
  API:      "https://aysa-ojoloo.herokuapp.com/api",
  EVENTS:   "/events",
  PERSON:   "/person",
  SERVICES: "/services"
};

fetch(URL.API + URL.PERSON + URL.ID)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    document.title = `${data.person_name}`;
    var L_description = JSON.parse(data.long_description);

    document.getElementById("breadcrumb_title").innerHTML =  `<li class="breadcrumb-item">Staff</li><li class="breadcrumb-item">Member: ${data.person_name}</li>`

    document.getElementById(
      "person_name1"
    ).innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><h1>${data.person_name}</h1></div><div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-items-start" id = "person_pic1"> <img src="../assets/img/${data.photo_address}" class="img-fluid" alt="staffpics"/><p class="cus_present mt-3"><strong>${L_description[0]} </strong><div id="getEventsFromAPI"></div></p><p><strong>${L_description[1]}</strong><div id="getServicesFromAPI"></div></p></div><div class="col-12 col-sm-6 col-md-6 col-lg-8 col-xl-8 align-items-start"><p class="cus_title_justified">Role: ${data.person_role}</p><p class="cus_content">${L_description[2]}</p><p class="mb-1 mt-4 cus_title_justified">${L_description[3]}</p><p class="cus_content">${L_description[4]}</p><p class="mb-0 mt-4 cus_title_justified">${L_description[5]}</p><p class="cus_content">${L_description[6]}</p><p class="mb-1 mt-4 cus_title_justified">${L_description[7]}</p><p class="cus_content">${L_description[8]}</p></div>`;
    return fetch(URL.API + URL.PERSON + URL.ID + URL.EVENTS);
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
          "getEventsFromAPI"
        ).innerHTML += `<a class="cus_link" href="event.html?event_id=${element.event_id}"><span>${element.event_name}</span></a>`;
      });
    } else {
      document.getElementById(
        "getEventsFromAPI"
      ).innerHTML += `<p><span>Not involved in any events</span></p>`;
    }
    return fetch(URL.API + URL.PERSON + URL.ID + URL.SERVICES);
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
          "getServicesFromAPI"
        ).innerHTML += `<a class="cus_link" href="service.html?service_id=${element.service_id}"><span>${element.service_name}</span></a>`;
      });
    } else {
      document.getElementById(
        "getServicesFromAPI"
      ).innerHTML += `<p><span>Not involved in any services</span></p>`;
    }
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });