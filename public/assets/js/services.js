const URL = {
  ID: "/" + window.location.search.split("=")[1],
  API: "https://aysa-ojoloo.herokuapp.com/api",
  EVENTS: "/events",
  PERSON: "/person",
  SERVICES: "/services",
};

fetch(URL.API + URL.SERVICES)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    data.forEach((element) => {
      pic = JSON.parse(element.photo_address);
      document.getElementById("service").innerHTML += `<div class="mb-4 d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"><div class="cus_card"><a href="service.html?service_id=${element.service_id}"><div class="card shadow bg-white rounded-lg h-100"><div class="view overlay"><img class="card-img-top" src="../assets/img/services_0${element.service_id}.jpg" alt="Service"/></div><div class="card-body" id ="services_card"><h3 class="card-title mb-0 mt-0 text-center"> ${element.service_name} </h3><p class="card-text text-justify mt-2">${element.short_description}</p></div></div></a></div></div>`
    });
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });
