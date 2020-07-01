const URL = {
    ID: "/" + window.location.search.split("=")[1],
    API: "https://mil-care.herokuapp.com/api",
    EVENTS: "/events",
    PERSON: "/person",
    SERVICES: "/services",
};

fetch(URL.API + URL.SERVICES + URL.ID)
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        document.title = `${data.service_name}`;
        var L_description = JSON.parse(data.long_description);
        var pic = JSON.parse(data.photo_address);

        document.getElementById("breadcrumb_subtitle").innerHTML = `<li class="breadcrumb-item">Services</li><li class="breadcrumb-item">${data.service_name}</li>`;

        document.getElementById("service_content1").innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><h1>${data.service_name}</h1></div><div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><p class="cus_present mt-3"><strong>${L_description[0]} </strong><div id="getPersonFromAPI"></div></p><p><strong>${L_description[1]}</strong><div id="getEventsFromAPI"></div></p></div>`;

        document.getElementById("service_content2").innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-start"><p class="cus_content">${L_description[2]}</p><p class="cus_content">${L_description[3]}</p></div><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-start"><p class="cus_content">${L_description[4]}</p><p class="cus_content">${L_description[5]}</p></div>`;


        pic.forEach((element) => {
            document.getElementById("gallery").innerHTML += `<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center"><img class="img-fluid img-thumbnail" src="../assets/img/${element}" alt="${data.service_name}"/></div>`;
        });

        return fetch(URL.API + URL.SERVICES + URL.ID + URL.EVENTS);

    })
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        if (data.length != 0) {
            data.forEach((element) => {
                document.getElementById(
                    "getEventsFromAPI"
                ).innerHTML += `<a class="cus_link" href="event.html?event_id=${element.event_id}"><span>${element.event_name}, </span></a>`;
            });
        } else {
            document.getElementById(
                "getEventsFromAPI"
            ).innerHTML += `<p><span>Not presented in events</span></p>`;
        }
        return fetch(URL.API + URL.SERVICES + URL.ID + URL.PERSON);
    })
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        if (data.length != 0) {
            data.forEach((element) => {
                document.getElementById(
                    "getPersonFromAPI"
                ).innerHTML += `<a class="cus_link" href="member.html?person_id=${element.person_id}"><span>${element.person_name}, </span></a>`;
            });
        } else {
            document.getElementById(
                "getPersonFromAPI"
            ).innerHTML += `<p><span>No person involved</span></p>`;
        }
    })
    .catch(function(error) {
        console.log("Fetch JS failed: ", error);
    });