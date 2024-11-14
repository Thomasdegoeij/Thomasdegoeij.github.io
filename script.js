class CookieClicker {
    constructor() {
        // Stel de  waarden in voor het spel
        this.score = 0; // Score start op 0
        this.upgrades1 = 0; // Aantal upgrades van type 1 (auto-clicker)
        this.upgrades2 = 0; // Aantal upgrades van type 2 (x2 clicker)
        this.upgrades3 = 0; // Aantal upgrades van type 3 (koekjes oven)
        this.upgrades4 = 0; // Aantal upgrades van type 4 (koekjes bakkerij)
        this.upgrades5 = 0; // Aantal upgrades van type 5 (koekjes fabriek)
        this.upgrades6 = 0; // Aantal upgrades van type 6 (koekjes mijn)
        this.upgrade1Cost = 15; // Kost van de eerste upgrade
        this.upgrade2Cost = 500; // Kost van de tweede upgrade
        this.upgrade3Cost = 100; // Kost van de derde upgrade
        this.upgrade4Cost = 1100; // Kost van de vierde upgrade
        this.upgrade5Cost = 12000; // Kost van de vijfde upgrade
        this.upgrade6Cost = 130000; // Kost van de zesde upgrade
        this.pointsPerClick = 1; // Aantal punten per klik op de cookie

        // Laad opgeslagen gegevens (indien beschikbaar) van een eerdere sessie
        this.loadProgress();
    }

    // Sla de voortgang van het spel op in de lokale opslag van de browser
    saveProgress() {
        const data = {
            score: this.score, // Score opslaan
            upgrades1: this.upgrades1, // Aantal upgrades1 opslaan
            upgrades2: this.upgrades2, // Aantal upgrades2 opslaan
            upgrades3: this.upgrades3, // Aantal upgrades3 opslaan
            upgrades4: this.upgrades4, // Aantal upgrades4 opslaan
            upgrades5: this.upgrades5, // Aantal upgrades5 opslaan
            upgrades6: this.upgrades6, // Aantal upgrades6 opslaan
            upgrade1Cost: this.upgrade1Cost, // Kost upgrade1 opslaan
            upgrade2Cost: this.upgrade2Cost, // Kost upgrade2 opslaan
            upgrade3Cost: this.upgrade3Cost, // Kost upgrade3 opslaan
            upgrade4Cost: this.upgrade4Cost, // Kost upgrade4 opslaan
            upgrade5Cost: this.upgrade5Cost, // Kost upgrade5 opslaan
            upgrade6Cost: this.upgrade6Cost, // Kost upgrade6 opslaan
            pointsPerClick: this.pointsPerClick // Opslaan hoeveel punten per klik
        };
        localStorage.setItem('cookieClickerData', JSON.stringify(data)); // Opslaan als JSON in localStorage
    }

    // Laad de voortgang van het spel (indien opgeslagen) uit de lokale opslag
    loadProgress() {
        const savedData = JSON.parse(localStorage.getItem('cookieClickerData')); // Haal de opgeslagen gegevens op
        if (savedData) { // Als er opgeslagen gegevens zijn
            this.score = savedData.score; // Herstel de score
            this.upgrades1 = savedData.upgrades1; // Herstel upgrades1
            this.upgrades2 = savedData.upgrades2; // Herstel upgrades2
            this.upgrades3 = savedData.upgrades3; // Herstel upgrades3
            this.upgrades4 = savedData.upgrades4; // Herstel upgrades4
            this.upgrades5 = savedData.upgrades5; // Herstel upgrades5
            this.upgrades6 = savedData.upgrades6; // Herstel upgrades6
            this.upgrade1Cost = savedData.upgrade1Cost; // Herstel kosten upgrade1
            this.upgrade2Cost = savedData.upgrade2Cost; // Herstel kosten upgrade2
            this.upgrade3Cost = savedData.upgrade3Cost; // Herstel kosten upgrade3
            this.upgrade4Cost = savedData.upgrade4Cost; // Herstel kosten upgrade4
            this.upgrade5Cost = savedData.upgrade5Cost; // Herstel kosten upgrade5
            this.upgrade6Cost = savedData.upgrade6Cost; // Herstel kosten upgrade6
            this.pointsPerClick = savedData.pointsPerClick; // Herstel punten per klik
            this.updateScore(); // Werk de score bij op het scherm
            this.updateUpgrades(); // Werk de upgrades bij op het scherm
        }
    }

    // Formatteer nummers met een prettige leesbaarheid (bijv. 1.000 als 1.000,00)
    formatNumber(num) {
        if (num >= 1e12) { // Als het nummer groter is dan een biljoen
            return (num / 1e12).toFixed(3) + " biljoen"; // Deel door 1 biljoen en geef drie decimalen
        } else if (num >= 1e9) { // Als het nummer groter is dan een miljard
            return (num / 1e9).toFixed(3) + " miljard"; // Deel door 1 miljard en geef drie decimalen
        } else if (num >= 1e6) { // Als het nummer groter is dan een miljoen
            return (num / 1e6).toFixed(3) + " miljoen"; // Deel door 1 miljoen en geef drie decimalen
        } else if (num >= 1e3) { // Als het nummer groter is dan duizend
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Voeg punt als duizendtallen scheiding
        } else {
            return num.toString(); // Voor waarden lager dan 1000, toon zoals het is
        }
    }

    // Verhoog de score wanneer op de cookie wordt geklikt
    clickCookie() {
        this.score += this.pointsPerClick; // Verhoog de score met de punten per klik
        this.updateScore(); // Werk de score op het scherm bij
        this.checkUpgradeButtons(); // Controleer of upgrades kunnen worden gekocht

        this.saveProgress(); // Sla de voortgang op na elke klik
    }

    // Koop de eerste upgrade (auto-clicker)
    koopUpgrade1() { // Functie om "Upgrade 1" te kopen. Deze upgrade verhoogt de kosten voor de volgende keer met 20%.
        if (this.score >= this.upgrade1Cost) { // Controleer of je genoeg score hebt.
            this.score -= this.upgrade1Cost; // Verlaag de score met de kosten van de upgrade.
            this.upgrades1++; // Verhoog het aantal keren dat deze upgrade is gekocht met 1.
            this.upgrade1Cost = Math.floor(this.upgrade1Cost * 1.2); // Verhoog de kosten van de volgende upgrade met 20%.
            this.updateScore(); // Werk de score op het scherm bij.
            this.updateUpgrades(); // Werk het aantal upgrades op het scherm bij.
            this.saveProgress(); // Sla de voortgang van de speler op na de aankoop.
        }
    }
    

    // Herhaal hetzelfde proces voor de andere upgrades
    koopUpgrade2() { // Functie om "Upgrade 2" te kopen. Deze upgrade verdubbelt punten per klik en verhoogt de kosten van de volgende upgrade.
        if (this.score >= this.upgrade2Cost) { // Controleer of de speler genoeg punten heeft om de upgrade te kopen.
            this.score -= this.upgrade2Cost; // Trek de kosten van de upgrade af van de huidige score van de speler.
            this.upgrades2++; // Verhoog de teller voor het aantal keer dat deze upgrade is gekocht met 1.
            this.pointsPerClick = Math.floor(this.pointsPerClick * 2); // Verdubbel het aantal punten per klik. Math.floor() zorgt dat het een geheel getal blijft.
            this.upgrade2Cost = Math.floor(this.upgrade2Cost * 8); // Verhoog de kosten van de upgrade voor de volgende keer met een factor 8.
            this.updateScore(); // Roep een functie aan om de score op het scherm te updaten.
            this.updateUpgrades(); // Roep een functie aan om het aantal upgrades op het scherm te updaten.
            this.saveProgress(); // Roep een functie aan om de voortgang van de speler op te slaan.
        }
    }
    

    koopUpgrade3() {
        if (this.score >= this.upgrade3Cost) {
            this.score -= this.upgrade3Cost;
            this.upgrades3++;
            this.upgrade3Cost = Math.floor(this.upgrade3Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress();
        }
    }

    koopUpgrade4() {
        if (this.score >= this.upgrade4Cost) {
            this.score -= this.upgrade4Cost;
            this.upgrades4++;
            this.upgrade4Cost = Math.floor(this.upgrade4Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress();
        }
    }

    koopUpgrade5() {
        if (this.score >= this.upgrade5Cost) {
            this.score -= this.upgrade5Cost;
            this.upgrades5++;
            this.upgrade5Cost = Math.floor(this.upgrade5Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress();
        }
    }

    koopUpgrade6() {
        if (this.score >= this.upgrade6Cost) {
            this.score -= this.upgrade6Cost;
            this.upgrades6++;
            this.upgrade6Cost = Math.floor(this.upgrade6Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress();
        }
    }

    // Bereken het aantal cookies dat per seconde wordt verdiend
    getCookiesPerSeconde() {
        const cps = (this.upgrades1 * 1) + (this.upgrades3 * 6) + (this.upgrades4 * 32) + (this.upgrades5 * 94) + (this.upgrades6 * 956);
        return cps; // Retourneer het totaal aantal cookies per seconde
    }

    // Werk de score weer op het scherm bij
    updateScore() {
        document.getElementById("score").textContent = this.formatNumber(this.score); // Weergave van de score op het scherm
    }

    // Werk de upgradeknoppen en de waarden weer op het scherm bij
    updateUpgrades() {
        document.getElementById("upgrades1").textContent = this.upgrades1;
        document.getElementById("upgrades2").textContent = this.upgrades2;
        document.getElementById("upgrades3").textContent = this.upgrades3;
        document.getElementById("upgrades4").textContent = this.upgrades4;
        document.getElementById("upgrades5").textContent = this.upgrades5;
        document.getElementById("upgrades6").textContent = this.upgrades6;

        // Werk de knoppen voor upgrades bij met de juiste tekst en kosten
        document.getElementById("koopUpgrade1").innerHTML = `Auto Clicker <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade1Cost)}`;
        document.getElementById("koopUpgrade2").innerHTML = `Clicker x2 <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade2Cost)}`;
        document.getElementById("koopUpgrade3").innerHTML = `Koekjes Oven <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade3Cost)}`;
        document.getElementById("koopUpgrade4").innerHTML = `Koekjes bakkerij <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade4Cost)}`;
        document.getElementById("koopUpgrade5").innerHTML = `Koekjes Fabriek <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade5Cost)}`;
        document.getElementById("koopUpgrade6").innerHTML = `Koekjes Mijn <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade6Cost)}`;

        document.getElementById("cps").textContent = `Cookies per seconde: ${this.formatNumber(this.getCookiesPerSeconde())}`;

        this.checkUpgradeButtons(); // Controleer de status van de upgradeknoppen
    }

    // Controleer of upgrades kunnen worden gekocht (knoppen in- of uitschakelen)
    checkUpgradeButtons() {
        document.getElementById("koopUpgrade1").disabled = this.score < this.upgrade1Cost;
        document.getElementById("koopUpgrade2").disabled = this.score < this.upgrade2Cost;
        document.getElementById("koopUpgrade3").disabled = this.score < this.upgrade3Cost;
        document.getElementById("koopUpgrade4").disabled = this.score < this.upgrade4Cost;
        document.getElementById("koopUpgrade5").disabled = this.score < this.upgrade5Cost;
        document.getElementById("koopUpgrade6").disabled = this.score < this.upgrade6Cost;
    }

    // Voer automatische klikken uit elke seconde
    autoClick() {
        this.score += this.upgrades1 * 1;
        this.score += this.upgrades3 * 6;
        this.score += this.upgrades4 * 32;
        this.score += this.upgrades5 * 94;
        this.score += this.upgrades6 * 956;
        this.updateScore();
        this.checkUpgradeButtons(); // Controleer of upgrades gekocht kunnen worden

        this.saveProgress(); // Sla de voortgang op na de automatische klik
    }
}

// Maak een nieuw CookieClicker-object
const cookieClicker = new CookieClicker();

// Voeg een klik-gebeurtenis toe aan de cookie afbeelding
document.getElementById("cookie").addEventListener("click", () => {
    cookieClicker.clickCookie();
});

// Voeg klik-gebeurtenissen toe aan de knoppen voor upgrades
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const upgradeNumber = button.id.slice(-1); // Haal het nummer van de upgradeknop op
        cookieClicker[`koopUpgrade${upgradeNumber}`](); // Roep de juiste functie aan voor de geselecteerde upgrade
    });
});

// Stel een interval in om elke seconde automatisch cookies te klikken
setInterval(() => {
    cookieClicker.autoClick();
}, 1000);

// Functie om de voortgang van het spel te resetten
function resetProgress() {
    localStorage.removeItem('cookieClickerData'); // Verwijder opgeslagen voortgang
    location.reload(); // Herlaad de pagina om het spel opnieuw te starten met een schone lei
}
