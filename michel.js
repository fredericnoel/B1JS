var etudiant = {
    nom : "Auchecorne",
    prenom : "Michel",
    age : 47,
    getInfo : function() {
        return "Je m'appelle " + this.prenom;
    }
};

alert(etudiant.getInfo());
