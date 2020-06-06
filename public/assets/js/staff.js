const URL = {
  ID: "/" + window.location.search.split("=")[1],
  API: "https://aysa-ojoloo.herokuapp.com/api",
  EVENTS: "/events",
  PERSON: "/person",
  SERVICES: "/services",
};

fetch(URL.API + URL.PERSON)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    for (i = 0; i < data.length; i++) {
      data.map((item) => {document.getElementById("person" + i).innerHTML = `<a href="member.html?person_id=${data[i].person_id}"><div class="card hadow mb-5 bg-white rounded-lg"><div class="view overlay"><img class="card-img-top" src="../assets/img/${data[i].photo_address}" alt="Staff1"/></div><div class="card-body" ><h3 class="card-title mb-0 mt-0 text-center">${data[i].person_name}</h3><h3 class="card-title mb-0 mt-0 text-center">${data[i].person_role}</h3><!-- <p class="card-text"></p> --></div></div></a>`;
      });
    }
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });
