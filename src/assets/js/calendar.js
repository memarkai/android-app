function addEventHeaderBtnClick() {
    if (document.getElementById("addEventPopup").style.opacity == "1") {
        document.getElementById("addEventPopup").style.animationName = "hide";
        document.getElementById("addEventPopup").style.animationDuration = "0.3s";
        document.getElementById("addEventPopup").style.visibility = "hidden";
        document.getElementById("addEventPopup").style.opacity = "0";
        setTimeout(function(){
        document.getElementById("addEventPopup").style.animationName = "";
        document.getElementById("addEventPopup").style.animationDuration = "";
        },300);

        // document.getElementsByTagName("ion-content")[0].style.visibility = "visible";
        document.getElementsByClassName("addEvent_header_btn")[0].style = "transform:rotate(0deg);";
    } else {
        document.getElementById("addEventPopup").style.animationName = "show";
        document.getElementById("addEventPopup").style.animationDuration = "0.3s";
        document.getElementById("addEventPopup").style.visibility = "visible";
        document.getElementById("addEventPopup").style.opacity = "1";

        setTimeout(function(){
        document.getElementById("addEventPopup").style.animationName = "";
        document.getElementById("addEventPopup").style.animationDuration = "";
        },300);
        // document.getElementsByTagName("ion-content")[0].style.visibility = "hidden";
        document.getElementsByClassName("addEvent_header_btn")[0].style = "transform:rotate(45deg);";
    }
}

function initCalendarJS() {
    document.getElementsByClassName("addEvent_header_btn")[0].onclick = this.addEventHeaderBtnClick;
}