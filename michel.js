function getResult() {
    return this.rayon * 2 * Math.PI * this.hauteur;
}

function Cylindre(r, h) {
    this.rayon = r;
    this.hauteur = h;
    this.resultat = getResult;
}

var machin = new Cylindre(32,76);
alert(machin.resultat());
