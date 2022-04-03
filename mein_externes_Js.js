//externes js für holland website


//alert("hallo")

//tabelle aus pdf einfügen und darunter oder darüber der preisrechner -> datum zeigt an welche saison man wählen muss


//var saison = "Sommerferien";
//var intern_extern = "intern";
//var anzahl_Urlaubstage= 1;
//var anzahl_Arbeitstage = 1;

var csv_preismodell = {
	
saison:["Sommerferien", "Silvester","Osterferien", "Herbstferien", "Offseason"],

intern:[100,70,70,70,50 ],
	
extern:[110,80,80,80,60],
	
arbeitstarif:[70,40,40,40,20]
	
}

window.onload=function(){
  
var saison = document.getElementById("saison");
var intern_extern = document.getElementById("intern_extern");
var anzahl_urlaubstage = document.getElementById("anzahl_urlaubstage");
var anzahl_arbeitstage = document.getElementById("anzahl_arbeitstage");
var anzahl_bonuspunkte = document.getElementById("anzahl_bonuspunkte");
var result = document.getElementById("result")


saison.addEventListener("change",berechne_preis);
intern_extern.addEventListener("change",berechne_preis);
anzahl_arbeitstage.addEventListener("input", berechne_preis);
anzahl_urlaubstage.addEventListener("input", berechne_preis);
anzahl_bonuspunkte.addEventListener("input", berechne_preis);

}




function berechne_preis(){
	
var tmp_index=csv_preismodell.saison.indexOf(saison.value)

var preis_urlaubstage = (csv_preismodell[intern_extern.value][tmp_index] )*anzahl_urlaubstage.value

var preis_arbeitstage = (csv_preismodell.arbeitstarif[tmp_index] )*anzahl_arbeitstage.value


var add = preis_arbeitstage + preis_urlaubstage - 20*anzahl_bonuspunkte.value

if(add>0){
result.innerHTML = "Die Summe aus Arbeits- und Urlaubstagen beträgt " + add + " euro";

	
}else{
    result.innerHTML = "Die Summe aus Arbeits- und Urlaubstagen beträgt " + 0 + " euro";

}
}



