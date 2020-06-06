const URL = {
  ID: "/" + window.location.search.split("=")[1],
  API: "https://aysa-ojoloo.herokuapp.com/api",
  EVENTS: "/events",
  PERSON: "/person",
  SERVICES: "/services",
};

/* var change = () => {
      document.getElementById("breadcrumbs").innerHTML = Number(document.getElementById("month").value) ? dayjs().set("month", Number(document.getElementById("month").value) - 1).format("MMMM") : "all"
      loadDoc(document.getElementById("month").value)
    }
*/

fetch(URL.API + URL.EVENTS)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Fetch response failed. Status Code: " + response.status);
      return Promise.reject(response);
    } else {
      return response.json();
    }
  })
  .then(function (data) {
    data.forEach(element => {
      document.getElementById("event_cards").innerHTML +=  `<div class="mb-4 align-items-start col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><div class="cus_card"><a href="event.html?event_id=${element.event_id}"><div class="card shadow mb-5 bg-white rounded-lg"><div class="view overlay"><img class="card-img-top" src="../assets/img/${element.photo_address}" alt="Event card photo ${element.event_id}"/></div><div class="card-body"><h3 class="card-title mb-0 mt-0 text-center"> ${element.event_name} </h3><p class = "text-center mt-2 mb-0 short_descr"> ${element.event_date.split("T")[0]} </p><p class = "text-center mt-0 short_descr"> ${element.event_date.split("T")[1].split(".")[0]} </p><p class = "text-center short_descr"> ${element.event_location}</p><p class = "text-center mt-2 short_descr"> ${element.short_description}</p><!-- <p class="card-text"></p> --></div></div></a></div></div>`
    });
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });