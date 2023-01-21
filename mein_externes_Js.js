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
	
//arbeitstarif:[70,40,40,40,20]
	
}

window.onload=function(){
  


    var vonDate = document.getElementById("Von");
    var bisDate = document.getElementById("Bis");

var saison = document.getElementById("saison");
var intern_extern = document.getElementById("intern_extern");
var anzahl_urlaubstage = document.getElementById("anzahl_urlaubstage");
//var anzahl_arbeitstage = document.getElementById("anzahl_arbeitstage");
var anzahl_bonuspunkte = document.getElementById("anzahl_bonuspunkte");



//result var for output
var result = document.getElementById("result")
var result_sum_anz_utage= document.getElementById("sum_anz_utage");
//var result_anzahl_arbeitstage = document.getElementById("sum_anz_atage");
var result_anzahl_bonuspunkte = document.getElementById("sum_anz_bpkt");
var result_sum_days = document.getElementById("sum_days");
var result_sum_price = document.getElementById("sum_price");
console.log(result);
console.log(result_sum_days);


//add eventlistener
saison.addEventListener("change",berechne_preis);
intern_extern.addEventListener("change",berechne_preis);
//anzahl_arbeitstage.addEventListener("input", berechne_preis);
anzahl_urlaubstage.addEventListener("input", berechne_preis);
anzahl_bonuspunkte.addEventListener("input", berechne_preis);

vonDate.addEventListener("input", add_Bis);
bisDate.addEventListener("input", berechne_Tage);


function add_Bis(){

    

    if(!isNaN(new Date(document.getElementById("Von").value))){

        console.log("test kat feature")
        document.getElementById("Bis").value =  document.getElementById("Von").value
      
        document.getElementById("res_tage").innerHTML = "Deine Anzahl an Übernachtungen beträgt: 0" 


    }
 

}



}


function berechne_Tage(){

    /*
    function isValidDate(d) {
  return d instanceof Date && !isNaN(d);

werden nicht erkannt waurm??
  console.log(vonDate.value);
console.log(bisDate.value);
} */




    console.log(new Date(document.getElementById("Von").value));
    console.log(new Date(document.getElementById("Bis").value));
    console.log("von " + !isNaN(new Date(document.getElementById("Von").value)));
    console.log( "bis " + !isNaN(new Date(document.getElementById("Bis").value)));


    console.log("vor if")
if(!isNaN(new Date(document.getElementById("Von").value)) && !isNaN(new Date(document.getElementById("Bis").value))){

    var anreise = new Date(document.getElementById("Von").value);
    var abreise = new Date(document.getElementById("Bis").value);

    console.log("rechne");
    console.log( (abreise - anreise)/1000/60/60/24) ;
var res_tage = (abreise - anreise)/1000/60/60/24;

document.getElementById("anzahl_urlaubstage").value = res_tage;
document.getElementById("res_tage").innerHTML = "Deine Anzahl an Übernachtungen beträgt: " + res_tage;
berechne_preis();
}



}




function berechne_preis(){
	
var tmp_index=csv_preismodell.saison.indexOf(saison.value)

var preis_urlaubstage = (csv_preismodell[intern_extern.value][tmp_index] )*anzahl_urlaubstage.value

//var preis_arbeitstage = (csv_preismodell.arbeitstarif[tmp_index] )*anzahl_arbeitstage.value
//var add = preis_arbeitstage + preis_urlaubstage - 20*anzahl_bonuspunkte.value


var add =  preis_urlaubstage - 20*anzahl_bonuspunkte.value



if(add>0){

    document.getElementById("sum_anz_utage").innerHTML = preis_urlaubstage;
   // document.getElementById("sum_anz_atage").innerHTML = preis_arbeitstage;
    document.getElementById("sum_anz_bpkt").innerHTML = (-1)*20*anzahl_bonuspunkte.value;
    //document.getElementById("sum_days").innerHTML =  (parseInt(anzahl_urlaubstage.value)+parseInt(anzahl_arbeitstage.value));
    document.getElementById("sum_days").innerHTML =  (parseInt(anzahl_urlaubstage.value));
    document.getElementById("sum_price").value = add;
    console.log(document.getElementById("sum_price").value)

result.innerHTML = "Die Summe aus Übernachtungen und Bonuspunkten beträgt " + add + " €" ;


	
}else{
    result.innerHTML = "Die Summe aus Übernachtungen- und Bonuspunkten beträgt " + 0 + " €";

    document.getElementById("sum_anz_bpkt").innerHTML = (-1)*20*anzahl_bonuspunkte.value;
    document.getElementById("sum_price").innerHTML = 0;
    document.getElementById("sum_anz_utage").innerHTML = 0;
   // document.getElementById("sum_anz_atage").innerHTML = 0;
    document.getElementById("sum_days").innerHTML = 0;


}
}



