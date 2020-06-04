loadDoc("https://aysa-ojoloo.herokuapp.com/api/person", function_person_all);
let pic_path = '../assets/img/'; 
var i
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const result = JSON.parse(this.responseText);
      cFunction(result);
    }
  };
  xhttp.open("GET", url, true)
  xhttp.send();
}

function function_person_all(result) {
  // action goes here
  console.log(result)
for(i = 0; i<result.length; i++){
  result.map(item => {
    document.getElementById("person"+i).innerHTML =  `
                  <a href="member1.html?person_id=${result[i].person_id}">
                <div class="card hadow mb-5 bg-white rounded-lg"  >
                <div class="view overlay" >
                    <img
                      class="card-img-top"
                      src="../assets/img/${result[i].photo_address}"
                      alt="Staff1"
                      
                    />
                  </div>
                  <div class="card-body" >
                    <h3 class="card-title mb-0 mt-0 text-center">
                        ${result[i].person_name}
                      </h3>
                      <h3 class="card-title mb-0 mt-0 text-center">
                        ${result[i].person_role}

                    </h3>
                    <!-- <p class="card-text"></p> -->
                  </div>
                    </div>
              </a>

     `
  });

};
};
