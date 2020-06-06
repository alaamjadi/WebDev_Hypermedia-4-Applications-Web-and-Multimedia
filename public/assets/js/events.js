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
    for(var i = 0;i<4;i++){
      console.log(JSON.parse(data[i].photo_address))
      var pic = JSON.parse(data[i].photo_address)
      console.log(pic[0])
    
      
      document.getElementById("event_cards").innerHTML +=  `<div class="mb-4 align-items-start col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><div class="cus_card"><a href="event.html?event_id=${data[i].event_id}"><div class="card shadow mb-5 bg-white rounded-lg"><div class="view overlay"><img class="card-img-top" src="../assets/img/${pic[0]}" alt="Event card photo ${data[i].event_id}"/></div><div class="card-body"><h3 class="card-title mb-0 mt-0 text-center"> ${data[i].event_name} </h3><p class = "text-center mt-2 mb-0 short_descr"> ${data[i].event_date.split("T")[0]} </p><p class = "text-center mt-0 short_descr"> ${data[i].event_date.split("T")[1].split(".")[0]} </p><p class = "text-center short_descr"> ${data[i].event_location}</p><p class = "text-center mt-2 short_descr"> ${data[i].short_description}</p><!-- <p class="card-text"></p> --></div></div></a></div></div>`
    
    }
  })
  .catch(function (error) {
    console.log("Fetch JS failed: ", error);
  });