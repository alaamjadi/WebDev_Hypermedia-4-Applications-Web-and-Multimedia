const URL = {
    ID: "/" + window.location.search.split("=")[1],
    API: "https://mil-care.herokuapp.com/api",
    EVENTS: "/events",
    PERSON: "/person",
    SERVICES: "/services",
};

fetch(URL.API + URL.PERSON)
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        data.forEach((element) => {
            document.getElementById("staff").innerHTML += `<div class="mb-4 d-flex justify-content-center col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"><div class="cus_card"><a href="member.html?person_id=${element.person_id}"><div class="card shadow bg-white rounded-lg h-100"><div class="view overlay"><img class="card-img-top" src="../assets/img/${element.photo_address}" alt="${element.person_name}"/></div><div class="card-body""><h3 class="card-title mb-0 mt-0 text-center"> ${element.person_name}</h3><h3 class="card-title mb-0 mt-0 text-center"> ${element.person_role}</h3></div></div></a>`
        });
    })
    .catch(function(error) {
        console.log("Fetch JS failed: ", error);
    });