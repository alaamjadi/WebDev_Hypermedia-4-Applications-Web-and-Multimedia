const URL = {
    ID: "/" + window.location.search.split("=")[1],
    API: "https://mil-care.herokuapp.com/api",
    EVENTS: "/events",
    PERSON: "/person",
    SERVICES: "/services",
    YEAR: "/Y/",
    MONTH: "/M/",
};

// initializing variables
let varYear = "9999",
    varMonth = "00",
    executed1 = false,
    yearSet = new Set(),
    monthSet = new Set(),
    month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

fetchEventsbyYearMonth(varYear, varMonth, true, true, false);

function fetchEventsbyYearMonth(year, month, genCard, genButton, genMonth) {
    fetch(URL.API + URL.EVENTS + URL.YEAR + year + URL.MONTH + month)
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
                yearSet.add(DateParser(element.event_date).year);
                monthSet.add(DateParser(element.event_date).month_num + 1);
                pic = JSON.parse(element.photo_address);
                if (genCard) {
                    document.getElementById("event_cards").innerHTML += `<div class="mb-4 d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"><div class="cus_card"><a href="event.html?event_id=${element.event_id}"><div class="card shadow bg-white rounded-lg h-100"><div class="view overlay"><img class="card-img-top" src="../assets/img/${pic[0]}" alt="Event card photo ${element.event_id}"/></div><div class="card-body"><h3 class="card-title mb-0 mt-0 text-center"> ${element.event_name} </h3><p class = "card-text text-center mt-2 mb-0"> ${element.event_date.slice(0,10)} </p><p class = "card-text text-center mt-0"> ${element.event_date.slice(11,16)} </p><p class = "card-text text-center"> ${element.event_location}</p><p class = "card-text text-justify mt-1"> ${element.short_description}</p></div></div></a></div></div>`;
                }
            });
            if (genButton) {
                getButtons(genMonth)
            }
        })
        .catch(function(error) {
            console.log("Fetch JS failed: ", error);
        });
}

function filterSelection(params) {
    monthSet.clear()
    deletChild("yyBtnContainer");
    deletChild("mmBtnContainer");
    deletChild("event_cards");
    if (params.length == 4) {
        varYear = params;
        varMonth = '00'
        if (params == 9999) {
            fetchEventsbyYearMonth(varYear, varMonth, true, true, false);
        } else {
            fetchEventsbyYearMonth(varYear, varMonth, true, true, true);
        }
    } else {
        if (params.length <= 2) {
            varMonth = params;
            if (params == '00' && varYear == 9999) {
                fetchEventsbyYearMonth(varYear, '00', false, true, false);
                fetchEventsbyYearMonth(varYear, varMonth, true, false, false);
            } else {
                fetchEventsbyYearMonth(varYear, '00', false, true, true);
                fetchEventsbyYearMonth(varYear, varMonth, true, false, false);
            }
        }
    }
}


function getButtons(genMonth) {
    yearSet.add(9999)

    yearArray = Array.from(yearSet).sort().reverse(function(a, b) { return a - b })
    yearArray.forEach(element => {
        if (element == '9999') {
            document.getElementById("yyBtnContainer").innerHTML += `<button class="btn shadow rounded-lg mr-2 mb-3 button-size cus_btncolor" id="${element}" onclick="filterSelection('${element}')">All</button>`
        } else {
            document.getElementById("yyBtnContainer").innerHTML += `<button class="btn shadow rounded-lg mr-2 mb-3 button-size cus_btncolor" id="${element}" onclick="filterSelection('${element}')">${element}</button>`
        }
    })
    if (document.getElementById(varYear)) {
        document.getElementById(varYear).classList.add('active')
    }

    document.getElementById("mmBtnContainer").innerHTML += `<button class="btn shadow rounded-lg mr-2 mb-3 button-size cus_btncolor" id="00" onclick="filterSelection('00')">All</button>`

    if (genMonth) {
        monthArray = Array.from(monthSet).sort(function(a, b) { return a - b })
        monthArray.forEach(element => {
            if (element == '00') {} else {
                document.getElementById("mmBtnContainer").innerHTML += `<button class="btn shadow rounded-lg mr-2 mb-3 button-size cus_btncolor" id="${element}" onclick="filterSelection('${element}')">${month_short[element-1]}</button>`
            }
        })
    }

    if (document.getElementById(varMonth)) {
        document.getElementById(varMonth).classList.add('active')
    }
}


function DateParser(input_string_date) {
    let date = new Date(input_string_date);
    return {
        year: date.getFullYear(),
        month_num: date.getMonth(),
        month_code: month_short[date.getMonth()],
        time: date.toLocaleTimeString().slice(0, 5)
    };
}

function deletChild(id_element) {
    var e = document.querySelector("#" + id_element);
    var child = e.firstElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}