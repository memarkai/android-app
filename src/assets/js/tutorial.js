var screenId = 0;
var map, infoWindow;
var destinationCircle;
var initial = Date.now();

function nextScreen() {
    console.log("nextScreen");
    if (screenId + 1 < screens.length) {
        screens[screenId].classList.remove("stayVisible");
        screens[screenId].classList.add("stayHidden");
        screenId++;
        console.log("nextScreen inner " + screenId + " of " + screens.length);
        screens[screenId].classList.remove("stayHidden");
        screens[screenId].classList.add("stayVisible");
    }
    document.getElementsByClassName("backButton")[0].style.visibility = "visible";
}

function previousScreen() {
    console.log("previousScreen");
    if (screenId > 0) {
        screens[screenId].classList.remove("stayVisible");
        screens[screenId].classList.add("stayHidden");
        screenId--;
        console.log("previousScreen inner " + screenId + " of " + screens.length);
        screens[screenId].classList.remove("stayHidden");
        screens[screenId].classList.add("stayVisible");
    }
    if (screenId == 0) {
        document.getElementsByClassName("backButton")[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName("backButton")[0].style.visibility = "visible";
    }
}

function setScreens() {
    console.log("setScreens");
    screens = document.getElementsByClassName("tutorial")[0].getElementsByClassName("screen");
    previousScreen();
}

function scriptLoader(srcURL) {
    var loaderScript = document.createElement("script");
    loaderScript.src = srcURL;
    document.body.append(loaderScript);
}

function initializeMaps() {
    var srcURL = "https://maps.googleapis.com/maps/api/js?key="+THE_GOOGLE_MAPS_API_KEY+"&callback=initMap";
    scriptLoader(srcURL);
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      //center: {lat: -8.0646842, lng: -34.8955189},
      center: {lat:-8.0606528,lng:-34.8721819},
      zoom : 12
    });
   destinationCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: map.center,
      draggable: false,
      editable: false,
      radius: 2000 // 2km
    });
    // map.onclick = function() {
    //   console.log(destinationCircle.map);
    //   if (destinationCircle.map == null) {
    //     destinationCircle.setCenter(map.getCenter());
    //     destinationCircle.setMap(map);
    //   }
    // }
    map.bounds_changed = function(){
      var bNE = map.getBounds().getNorthEast();
      var bSW = map.getBounds().getSouthWest();
      var bArr = [{lat:bNE.lat, lng:bNE.lng},
                  {lat:bNE.lat, lng:bSW.lng},
                  {lat:bSW.lat, lng:bSW.lng},
                  {lat:bSW.lat, lng:bNE.lng}];
      var area = google.maps.geometry.spherical.computeArea(bArr);
      var cArea = Math.PI*destinationCircle.radius*destinationCircle.radius;
      destinationCircle.setCenter(map.getCenter());
      // console.log(cArea/area);
      /*if (cArea/area < 0.3) {
        destinationCircle.
      }*/
    }
    // infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }
  }
