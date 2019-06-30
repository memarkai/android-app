var screenId = 0;
var map, infoWindow;
var destinationCircle;

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
