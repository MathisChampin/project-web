function Utilisateur(n, a, m) {
    this.name = n;
    this.age = a;
    this.mail = m;
}

let mathis = new Utilisateur("Mathis Champin", 30, "mathis.champin@epitech.eu");
let pierre = new Utilisateur("Pierre gardaut", 35, "pierregardau@epitech.eu");

document.getElementById("p1").innerHTML = "Nom: " + mathis.name;
document.getElementById("p2").innerHTML = "Age: " + mathis.age;
document.getElementById("p3").innerHTML = "Mail: " + mathis.mail;
