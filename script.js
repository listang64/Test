
function lancerDes() {
    const de1 = Math.floor(Math.random() * 6) + 1;
    const de2 = Math.floor(Math.random() * 6) + 1;
    const total = de1 + de2;
    document.getElementById('resultat').innerHTML = 
        "Dé 1 : " + de1 + "<br>Dé 2 : " + de2 + "<br>Total : " + total;
}
