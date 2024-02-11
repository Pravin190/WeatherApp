// understand some concept before building weather app...


console.log('hello jee babbar');

const API_KEY = '839d247c1a95d4f4e1aeedd733540844';


        // show in UI
         
    function renderWeatherInfo(data) {

    let newPara = document.createElement('p');

    newPara.textContent = `${data?.main?.temp} °C`

    document.body.appendChild(newPara);


    }

// async function return promise and it will execute specific time period...
async function fetchWeatherDetails() {

    try{

    let city = "goa";

    // API call fron openwather api google it copy the link and paste below

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    // json mai API ka response milega means response convert into json and API ka response humesha josn format mai hi rahega aur JS mai ise 99.99 % use kiya jata hai....
 
    const data = await response.json();

    console.log("weather data :->", data);

    
    renderWeatherInfo(data);

    }
    catch(err) {

        // handle the error here

        console.log("Error Found" + err);

    }
}


async function getCustomWeatherDetails() {


    try{

        // latitude means is a horizontal lines that measures north or south of an equator.

    let latitude = 15.2333;

    // longitude means is a vertical lines that measures east or west of an equator.

    let longitude = 74.2345;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);

    }

    catch(err) {

        console.log("Error Found" + err);

    }
    
}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
    if(clickedTab !== currentTab) {

        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;

        currentTab.classList.add("current-tab");

        // contains means check active class kya searchForm container mai active hai ya fir nhi hai..
        if(!searchForm.classList.contains("active")) {

            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {

            searchForm.classList.remove("active");
            getfromSessionStorage();

        }

        // console.log("Current Tab" , currentTab);
    }

}



 
//  get the current location fron geolocation

function getLocation() {

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else {

        console.log("No Geolocation Support");

    }

}

// find the current location of latitude and langitude position coordinate...
function showPosition(position) {

    let lat = position.coords.latitude;

    let longi = position.coords.longitude;

    console.log(lat);

    console.log(longi);

}
