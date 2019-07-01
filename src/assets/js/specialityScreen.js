var screens = [];
var selectedSpeciality = "";
var searchResults;

function searchSpeciality() {
    if (specialities == null) return;
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
    if (query.length > 1) query = query.filter(function(a){return (!(a=="e") && (a.length>0));});
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
        innerHTML += "<div class=\"specialityButton\" onclick=\"javascript:selectSpeciality('"+speList[i].name+"')\"><img class=\"icon\" src=\"" + speList[i].icon + "\"/>" + speList[i].name + "<div class=\"selector\"></div></div>";
      }
      document.getElementById("specialityConfirm").classList.remove("disabled");
      // everything is alright from here
      
      // until here
    } else innerHTML = "<h3>Não achamos a especialidade. Verifique a escrita e tente novamente. :/</h3>";
    document.getElementById("searchResults").innerHTML = innerHTML;
    document.getElementById("specialityEstetoscopio").style.visibility = "hidden";
    document.getElementById("specialityTip").style.visibility = "hidden";
    
  }
  function selectSpeciality(spe) {
    selectedSpeciality = spe;
    nextScreen();
  }