const urlParams =window.location.search.split('=');

loadDoc("https://aysa-ojoloo.herokuapp.com/api/person/"+urlParams[1], function_person_member);
var i
function loadDoc(url, cFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      document.title = ` ${result.person_name}`;
      console.log(urlParams[1])
      cFunction(result);
    }
  };
  xhttp.open("GET", url, true)
  xhttp.send();

}

function function_person_member(result) {
  // action goes here
  console.log(result)
  var desc = JSON.parse(result.long_description);
  console.log(desc)
  for(i=0;i<6;i++){
      if(urlParams[1] == i){
        
      document.getElementById("person_name1").innerHTML =  `
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
                <a class="cus_link" href="#">
                  <span>
                    Spring event
                  </span>
                </a>
              </p>
              <p>
                <strong>${desc[1]}</strong>
                <a href="#">
                  <span>
                    Hospice service
                  </span>
                </a>
              </p>
              
            </div>
            <div
              class="col-12 col-sm-6 col-md-6 col-lg-8 col-xl-8 align-items-start"
            >
              <p class="cus_title_justified">${result.person_role}</p>
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
 
          `
      }
    }

};
