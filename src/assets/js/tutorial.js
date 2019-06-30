 
    var screens = [];
    var specialities = [];
    var selectedSpecialities = [false, true];
    var screenId = 0;
  var searchResults;
  
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
  
  function searchSpeciality() {
    var biggerQuery = document.getElementById("specialityField").value.toLowerCase();
    document.getElementById("specialityConfirm").classList.add("disabled");
    if (biggerQuery.length == 0) {
      document.getElementById("searchResults").innerHTML = "";
      document.getElementById("specialityEstetoscopio").style.visibility = "inherit";
      document.getElementById("specialityTip").style.visibility = "inherit";
      return;
    }
    var query = biggerQuery.split(" ");
    // cleaning up "e" when trying to find more than one speciality
    if (query.length > 2) query = query.filter(function(a){return (!(a=="e") && (a.length>0));});
    var speList = [];
    for (var i = 0; i < specialities.length; i++) {
      var found = false;
      // Search occurence of query on name
      var name = specialities[i].name.toLowerCase();
      for (var j = 0; j < query.length; j++){
        var ii = name.indexOf(query[j]);
        if (ii > -1) found = true;
      }
      // Search occurence of query on keywords
      for (var j = 0; j < specialities[i].keywords.length; j++) {
        var keyword = specialities[i].keywords[j].toLowerCase();
        for (var y = 0; y < query.length; y++) {
            var jj = keyword.indexOf(query[y]);
            if (jj > -1) found = true;
        }
      }
      if (found) {
        speList.push(specialities[i]);
      }
    }
    var innerHTML = "";
    if (speList.length) {
      for(var i=0;i<speList.length;i++) {
        innerHTML += "<div class=\"specialityButton\"><img class=\"icon\" src=\"" + speList[i].icon + "\"/>" + speList[i].name + "<div class=\"selector\"></div></div>";
      }
      document.getElementById("specialityConfirm").classList.remove("disabled");
      // everything is alright from here
      
      // until here
    } else innerHTML = "<h3>Não achamos a especialidade. Verifique a escrita e tente novamente. :/</h3>";
    document.getElementById("searchResults").innerHTML = innerHTML;
    document.getElementById("specialityEstetoscopio").style.visibility = "hidden";
    document.getElementById("specialityTip").style.visibility = "hidden";
    
  }
  