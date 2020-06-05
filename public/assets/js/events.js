

loadDoc("https://aysa-ojoloo.herokuapp.com/api/events", function_events_all);
let pic_path = '../assets/img/'; 
/*var change = () => {
      document.getElementById("breadcrumbs").innerHTML = Number(document.getElementById("month").value) ? dayjs().set("month", Number(document.getElementById("month").value) - 1).format("MMMM") : "all"

      loadDoc(document.getElementById("month").value)
    }*/
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


function function_events_all(result) {
  // action goes here
  var i;
  console.log(result)  
  for(i=0;i<result.length;i++){ 
   document.getElementById("event_cards").innerHTML +=  `
    <div class="mb-4 align-items-start col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
          >
            <div class="cus_card">
              <a href="event.html?event_id=${result[i].event_id}">
                <div class="card shadow mb-5 bg-white rounded-lg">
                  <div class="view overlay">
                    <img
                      class="card-img-top"
                      src="../assets/img/${result[i].photo_address}"
                      alt="Event card photo ${result[i].event_id}"
                    />
                  </div>
                  <div class="card-body">
                    <h3 class="card-title mb-0 mt-0 text-center"> ${result[i].event_name} </h3>
                    <p class = "text-center mt-2 mb-0 short_descr"> ${result[i].event_date.split("T")[0]} </p>
                    <p class = "text-center mt-0 short_descr"> ${result[i].event_date.split("T")[1].split(".")[0]} </p>
                    <p class = "text-center short_descr"> ${result[i].event_location}</p>
                    <p class = "text-center mt-2 short_descr"> ${result[i].short_description}</p>
                    <!-- <p class="card-text"></p> -->
                  </div>
                </div>
              </a>
            </div>
             </div>
     `

console.log(result[i].event_date.split("T")[0].split("-")[0])


}




};
