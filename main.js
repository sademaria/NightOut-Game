const vaihtoehdot = [
    "Teksti on nyt vaihdettu!",
    "Tämä on uusi satunnainen teksti.",
    "Kolmas vaihtoehto tässä.",
    "Yllätyksiä löytyy aina!",
    "Viides vaihtoehto, ole hyvä!"
];

// Hae HTML-elementit
const next = document.getElementById("nextplayer");
const Text = document.getElementById("cardText");

// Lisää tapahtumakuuntelija napille
next.addEventListener("click", () => {
    // Valitse satunnainen teksti vaihtoehdoista
    const satunnainenIndeksi = Math.floor(Math.random() * vaihtoehdot.length);
    teksti.textContent = vaihtoehdot[satunnainenIndeksi];
});