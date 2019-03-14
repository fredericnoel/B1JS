function Etudiant(first, name, age) {
    this.prenom = first;
    this.nom = name;
    this.age = age;
}

var etudiant1 = new Etudiant("Auchecorne", "Michel", 47);

var etudiant2 = etudiant1;

etudiant2.prenom = "Gerard";

alert(etudiant2.prenom);
alert(etudiant1.prenom);
