
const urlParams =window.location.search.split('=');
console.log(window.location.search.split('='))
loadDoc("https://aysa-ojoloo.herokuapp.com/api/Services/"+urlParams[1], function_service);
 
var i
function loadDoc(url, cFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      cFunction(result);
      console.log(result)
      console.log(result.service_name)
    }
  };
  xhttp.open("GET", url, true)
  xhttp.send();
}

function function_service(result) {
var desc = JSON.parse(result.long_description);
var pic  = JSON.parse(result.photo_address);
console.log(desc)
  // action goes here
for(i=0;i<6;i++){
      if(urlParams[1] == i){
          document.getElementById("breadcrumb_subtitle").innerHTML =  `
          <li class="breadcrumb-item">Services</li>
          <li class="breadcrumb-item">${result.service_name}</li>
          
          `
        document.getElementById("service_content1").innerHTML = `
         <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start">
              <h1>
                ${result.service_name}
              </h1>
            </div>
            <div
              class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"
            >
              <p class="cus_present">
                <strong>${desc[0]}</strong>
                <a class="cus_link" href="#">
                  <span>
                    Anna Andreoni
                  </span>
                </a>
              </p>
              <p>
                <strong>${desc[1]}</strong>
                <a href="#">
                  <span>
                    Autumn Socializing,
                  </span>
                </a>
                <a href="#">
                  <span>
                    Milcare Celebrate,
                  </span>
                </a>
                <a href="#">
                  <span>
                    Spring
                  </span>
                </a>
              </p>
            </div>

        `
        document.getElementById("service_content2").innerHTML = `
         <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-start">
              <p class="cus_content">
                ${desc[2]}
              </p>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-start">
              <p class="cus_content">${desc[3]}</p>
              <p class="cus_content">${desc[4]}</p>
              <p class="cus_content">${desc[5]}</p>
            </div>`
        document.getElementById("gallery").innerHTML = `
           <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center">
              <img
                class="img-fluid img-thumbnail"
                src="../assets/img/${pic[0]}"
                alt=""
              />
          </div>

          <div
            class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center"
          >
              <img
                class="img-fluid img-thumbnail"
                src="../assets/img/${pic[1]}"
                alt=""
              />
          </div>

          <div
            class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center"
          >
              <img
                class="img-fluid img-thumbnail"
                src="../assets/img/${pic[2]}"
                alt=""
              />
          </div>

          <div
            class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-items-center"
          >
              <img
                class="img-fluid img-thumbnail"
                src="../assets/img/${pic[3]}"
                alt=""
              />
          </div>
        `


 }
}

};
