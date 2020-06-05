
const urlParams =window.location.search.split('=');

loadDoc("https://aysa-ojoloo.herokuapp.com/api/Events/"+urlParams[1], function_event);

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

function function_event(result) {
  // action goes here
  console.log(result)  
  var desc = JSON.parse(result.long_description);
  console.log(desc)

    for(i=0;i<4;i++){
      if(urlParams[1] == i){
        document.title = ` ${result.event_name}`;
          document.getElementById("breadcrumb_title").innerHTML =  `
          <li class="breadcrumb-item">Events</li>
          <li class="breadcrumb-item">${result.event_name}</li>`
        document.getElementById("event_content1").innerHTML = `
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start">
              <h1>
                ${result.event_name}
              </h1>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start">
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
                    Listening Center
                  </span>
                </a>
              </p>
            </div>
        `
        document.getElementById("event_content2").innerHTML = `
         <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start">
          <p><strong>  Date : ${result.event_date.split("T")[0]} , Time: ${result.event_date.split("T")[1].split(".")[0]}</strong></p>
          <p> ${desc[2]}</p>
          <p> ${desc[3]}</p>
          <p>${desc[4]}</p>
        </div>
        `
}
}



};
