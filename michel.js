var tab = new Array();

tab.push("Michel");
tab.push("Bob");
tab.unshift("Brigite");
tab.sort();


var resultat = "<ul>";
for(var i = 0 ; i < tab.length ; i++) {
    resultat += "<li>";
    resultat += tab[i];
    resultat += "</li>";
}
resultat += "</ul>";
document.write(resultat);
