const URL = {
  PERSON: {
    DEFAULT: "https://aysa-ojoloo.herokuapp.com/api/person/",
    EVENTS: "/events",
    SERVICES: "/services",
  },
};

const urlParams = window.location.search.split("=")
loadDoc(URL.PERSON.DEFAULT + urlParams[1], function_person_member)

loadDoc(URL.PERSON.DEFAULT + urlParams[1] + URL.PERSON.EVENTS, function_member_events);

loadDoc(URL.PERSON.DEFAULT + urlParams[1] + URL.PERSON.SERVICES, function_member_services);

function function_member_events(result) {
  if (result.length!=0) {
    result.forEach(element => {
      document.getElementById("getEventsFromAPI").innerHTML += `<a class="cus_link" href="event.html?event_id=${element.event_id}"><span>${element.event_name}</span></a>`;
    });
  } else {
    document.getElementById("getEventsFromAPI").innerHTML += `<p><span>Not involved in any events</span></p>`;
  }
}

function function_member_services(result) {
  if (result.length!=0) {
    result.forEach(element => {
      document.getElementById("getServicesFromAPI").innerHTML += `<a class="cus_link" href="service.html?service_id=${element.service_id}"><span>${element.service_name}</span></a>`;
    });
  } else {
    document.getElementById("getServicesFromAPI").innerHTML += `<p><span>Not involved in any services</span></p>`;
  }
}

var i;
function loadDoc(url, cFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      /* console.log(urlParams[1]) */
      cFunction(result);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function function_person_member(result) {
  // action goes here
  /* console.log(result) */
  document.title = ` ${result.person_name}`;
  var desc = JSON.parse(result.long_description);
  /* console.log(desc) */
  for (i = 0; i < 6; i++) {
    if (urlParams[1] == i) {
      document.getElementById("person_name1").innerHTML = `
            <div
              class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"
            >
              <h1>
                ${result.person_name}
              </h1>
            </div>
          <div
              class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-items-start"
            id = "person_pic1">
              <img
                src="../assets/img/${result.photo_address}"
                class="img-fluid"
                alt="staffpics"
              />
              <p class="cus_present mt-3">
                <strong>${desc[0]} </strong>
                <div id="getEventsFromAPI"></div>
              </p>
              <p>
                <strong>${desc[1]}</strong>
                <div id="getServicesFromAPI"></div>
              </p>
              
            </div>
            <div
              class="col-12 col-sm-6 col-md-6 col-lg-8 col-xl-8 align-items-start"
            >
              <p class="cus_title_justified">Role: ${result.person_role}</p>
              <p class="cus_content">
                ${desc[2]}
              </p>

              <p class="mb-1 mt-4 cus_title_justified">${desc[3]}</p>
              <p class="cus_content">
                ${desc[4]}
              </p>

              <p class="mb-0 mt-4 cus_title_justified">${desc[5]}</p>
              <p class="cus_content">
               ${desc[6]}
              </p>

              <p class="mb-1 mt-4 cus_title_justified">
                ${desc[7]}
              </p>
              <p class="cus_content">
              ${desc[8]}
              </p>
            </div>
 
          `;
    }
  }
}
