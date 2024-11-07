document.getElementById("cookie").addEventListener("click", (event) => {
    const smallCookie = document.createElement("img");
    smallCookie.src = "afbeeldingen/cookie.png"; // Path naar je kleine cookie-afbeelding
    smallCookie.classList.add("small-cookie");

    // Bereken willekeurige offset en centreren rond de cursor
    const offsetX = (Math.random() - 0.5) * 30; // Willekeurige X-offset tussen -15 en +15 pixels
    const offsetY = (Math.random() - 0.5) * 30; // Willekeurige Y-offset tussen -15 en +15 pixels

    // Voeg het koekje toe aan de DOM zodat we de grootte kunnen berekenen
    document.body.appendChild(smallCookie);

    // Gebruik offsetWidth en offsetHeight om het koekje te centreren rond de cursor
    const cookieWidth = smallCookie.offsetWidth;
    const cookieHeight = smallCookie.offsetHeight;

    // Pas positie aan door de helft van de breedte en hoogte af te trekken
    smallCookie.style.left = `${event.pageX + offsetX - cookieWidth / 2}px`;
    smallCookie.style.top = `${event.pageY + offsetY - cookieHeight / 2}px`;

    // Voeg animatie en verwijdering toe na afloop
    setTimeout(() => {
        smallCookie.classList.add("fade-out");
    }, 10);

    // Verwijder het koekje na de animatie
    smallCookie.addEventListener("transitionend", () => {
        smallCookie.remove();
    });
});
