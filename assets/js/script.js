// NAVBAR

let content= document.querySelector('#menu-content');
let sidebarBody= document.querySelector("#menu-side-body");
let button= document.querySelector("#menu-button");
let overlay= document.querySelector("#menu-overlay");
let activateclass= 'menu-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener("click", function(e){
    e.preventDefault();

    this.parentNode.classList.add(activateclass);
});

button.addEventListener('keydown', function(e){
    if(this.parentNode.classList.contains(activateclass)){
        if(e.repeat === false && e.which===27){
            this.parentNode.classList.remove(activateclass);
        }
    }
});


overlay.addEventListener("click", function(e){
    e.preventDefault();
    this.parentNode.classList.remove(activateclass);
});

// MAPS AMI

const getData = async (url) => {
    const RESPONSE = await fetch(url);
    const DATA = await RESPONSE.json();

    document.getElementById("userconnected").textContent= DATA[0].firstname + " " +  DATA[0].lastname;
    document.getElementById("connectedadress").textContent= DATA[0].localisation;
    document.getElementById("connectedphone").textContent= DATA[0].phonenumber;
    document.getElementById("emailconnected").textContent= DATA[0].email;
}

getData("../ressources/users.json")




     const ISSCHART = document.getElementById("mapsinprog");
     const LAT = "50.0479266"; 
     const LON = "4.3173338"; 
     const API_URL = "https://api.wheretheiss.at/v1/satellites/25544/"; 
     const MAP = L.map('mapid').setView([0, 0], 2); 
     const ATTRIBUTION = 'Map data © OpenStreetMap contributors, CC-BY-SA, Imagery © Mapbox'; 
     const ICON = L.icon({ iconUrl: 'ISS.svg', iconSize: [50, 32], iconAnchor: [25, 16], }); 
     const MARKER = L.marker([0, 0], {icon: ICON}).addTo(MAP); 
     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution: ATTRIBUTION, 
          maxZoom: 18, 
          id: 'mapbox/streets-v11', 
          accessToken: "pk.eyJ1IjoiaG9seXNoaWl0IiwiYSI6ImNrNmI1b29sejB1ZmYzbm8zbHoxc3IyNncifQ.VYhYZ7NPfq0cJJ3s5ENjLA", 
          noWrap: true 
        }).addTo(MAP); 

    const getPosition = async () => { 
        const RESPONSE = await fetch(API_URL); 
        const VALUES = await RESPONSE.json(); 
        const POSITION = [VALUES.latitude, VALUES.longitude, VALUES.altitude]; 
        MAP.setView([VALUES.latitude, VALUES.longitude], 3); 
        MARKER.setLatLng([VALUES.latitude, VALUES.longitude]); 
        LAT.textContent = POSITION[0]; 
        LON.textContent = POSITION[1]; 
        ALT.textContent = POSITION[2]; 

    }; setInterval(() => { getPosition(); }, 2000);