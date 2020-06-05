loadDoc("https://aysa-ojoloo.herokuapp.com/api/services", function_services_all);
let pic_path = '../assets/img/'; 
var i
function loadDoc(url, cFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      cFunction(result);
    }
  };
  xhttp.open("GET", url, true)
  xhttp.send();
}

function function_services_all(result) {
  // action goes here
  console.log(result)  
  for(i=0;i<result.length;i++){ 
   document.getElementById("service").innerHTML +=  `
    <div class="mb-4 align-items-start col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
          >
            <div class="cus_card">
              <a href="service.html?service_id=${result[i].service_id}">
                <div class="card shadow mb-5 bg-white rounded-lg">
                  <div class="view overlay">
                    <img
                      class="card-img-top"
                      src="../assets/img/services_0${result[i].service_id}.jpg"
                      alt="Service"
                    />
                  </div>
                  <div class="card-body">
                    <h3 class="card-title mb-0 mt-0 text-center"> ${result[i].service_name} </h3>
                    <p class = "text-center mt-2 short_descr"> ${result[i].short_description}</p>
                    <!-- <p class="card-text"></p> -->
                  </div>
                </div>
              </a>
            </div>
             </div>
     `
 }



};
