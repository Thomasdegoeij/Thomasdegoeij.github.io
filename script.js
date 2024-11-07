class CookieClicker {
    constructor() {
        this.score = 0;
        this.upgrades1 = 0;
        this.upgrades2 = 0;
        this.upgrades3 = 0;
        this.upgrades4 = 0;
        this.upgrades5 = 0;
        this.upgrades6 = 0;
        this.upgrade1Cost = 15;
        this.upgrade2Cost = 500;
        this.upgrade3Cost = 100;
        this.upgrade4Cost = 1100;
        this.upgrade5Cost = 12000;
        this.upgrade6Cost = 130000;
        this.pointsPerClick = 1;

         // Laad opgeslagen gegevens als ze beschikbaar zijn
         this.loadProgress();
    }

    saveProgress() {
        const data = {
            score: this.score,
            upgrades1: this.upgrades1,
            upgrades2: this.upgrades2,
            upgrades3: this.upgrades3,
            upgrades4: this.upgrades4,
            upgrades5: this.upgrades5,
            upgrades6: this.upgrades6,
            upgrade1Cost: this.upgrade1Cost,
            upgrade2Cost: this.upgrade2Cost,
            upgrade3Cost: this.upgrade3Cost,
            upgrade4Cost: this.upgrade4Cost,
            upgrade5Cost: this.upgrade5Cost,
            upgrade6Cost: this.upgrade6Cost,
            pointsPerClick: this.pointsPerClick
        };
        localStorage.setItem('cookieClickerData', JSON.stringify(data));
    }

    loadProgress() {
        const savedData = JSON.parse(localStorage.getItem('cookieClickerData'));
        if (savedData) {
            this.score = savedData.score;
            this.upgrades1 = savedData.upgrades1;
            this.upgrades2 = savedData.upgrades2;
            this.upgrades3 = savedData.upgrades3;
            this.upgrades4 = savedData.upgrades4;
            this.upgrades5 = savedData.upgrades5;
            this.upgrades6 = savedData.upgrades6;
            this.upgrade1Cost = savedData.upgrade1Cost;
            this.upgrade2Cost = savedData.upgrade2Cost;
            this.upgrade3Cost = savedData.upgrade3Cost;
            this.upgrade4Cost = savedData.upgrade4Cost;
            this.upgrade5Cost = savedData.upgrade5Cost;
            this.upgrade6Cost = savedData.upgrade6Cost;
            this.pointsPerClick = savedData.pointsPerClick;
            this.updateScore();
            this.updateUpgrades();
        }
    }

    formatNumber(num) {
        if (num >= 1e12) {
            return (num / 1e12).toFixed(3) + " biljoen";
        } else if (num >= 1e9) {
            return (num / 1e9).toFixed(3) + " miljard";
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(3) + " miljoen";
        } else if (num >= 1e3) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Punt als scheidingsteken
        } else {
            return num.toString(); // Voor waarden lager dan 1000
        }
    }

    clickCookie() {
        this.score += this.pointsPerClick;
        this.updateScore();
        this.checkUpgradeButtons(); // Controleer knoppen bij elke klik

        this.saveProgress(); // Sla de voortgang op na een klik

    }

    koopUpgrade1() {
        if (this.score >= this.upgrade1Cost) {
            this.score -= this.upgrade1Cost;
            this.upgrades1++;
            this.upgrade1Cost = Math.floor(this.upgrade1Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    koopUpgrade2() {
        if (this.score >= this.upgrade2Cost) {
            this.score -= this.upgrade2Cost;
            this.upgrades2++;
            this.pointsPerClick = Math.floor(this.pointsPerClick * 2);
            this.upgrade2Cost = Math.floor(this.upgrade2Cost * 8);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    koopUpgrade3() {
        if (this.score >= this.upgrade3Cost) {
            this.score -= this.upgrade3Cost;
            this.upgrades3++;
            this.upgrade3Cost = Math.floor(this.upgrade3Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    koopUpgrade4() {
        if (this.score >= this.upgrade4Cost) {
            this.score -= this.upgrade4Cost;
            this.upgrades4++;
            this.upgrade4Cost = Math.floor(this.upgrade4Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    koopUpgrade5() {
        if (this.score >= this.upgrade5Cost) {
            this.score -= this.upgrade5Cost;
            this.upgrades5++;
            this.upgrade5Cost = Math.floor(this.upgrade5Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    koopUpgrade6() {
        if (this.score >= this.upgrade6Cost) {
            this.score -= this.upgrade6Cost;
            this.upgrades6++;
            this.upgrade6Cost = Math.floor(this.upgrade6Cost * 1.2);
            this.updateScore();
            this.updateUpgrades();

            this.saveProgress(); // Sla de voortgang op na aankoop
        }
    }

    getCookiesPerSeconde() {
        const cps = (this.upgrades1 * 1) + (this.upgrades3 * 6) + (this.upgrades4 * 32) + (this.upgrades5 * 94) + (this.upgrades6 * 956);
        return cps;
    }

    updateScore() {
        document.getElementById("score").textContent = this.formatNumber(this.score);
    }

    updateUpgrades() {
        document.getElementById("upgrades1").textContent = this.upgrades1;
        document.getElementById("upgrades2").textContent = this.upgrades2;
        document.getElementById("upgrades3").textContent = this.upgrades3;
        document.getElementById("upgrades4").textContent = this.upgrades4;
        document.getElementById("upgrades5").textContent = this.upgrades5;
        document.getElementById("upgrades6").textContent = this.upgrades6;

        document.getElementById("koopUpgrade1").innerHTML = `Auto Clicker <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade1Cost)}`;
        document.getElementById("koopUpgrade2").innerHTML = `Clicker x2 <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade2Cost)}`;
        document.getElementById("koopUpgrade3").innerHTML = `Koekjes Oven <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade3Cost)}`;
        document.getElementById("koopUpgrade4").innerHTML = `Koekjes bakkerij <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade4Cost)}`;
        document.getElementById("koopUpgrade5").innerHTML = `Koekjes Fabriek <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade5Cost)}`;
        document.getElementById("koopUpgrade6").innerHTML = `Koekjes Mijn <br> <img id="icon" src="afbeeldingen/cookie.png" draggable="false">${this.formatNumber(this.upgrade6Cost)}`;

        document.getElementById("cps").textContent = `Cookies per seconde: ${this.formatNumber(this.getCookiesPerSeconde())}`;

        this.checkUpgradeButtons(); // Controleer knoppen na elke upgrade
    }

    checkUpgradeButtons() {
        document.getElementById("koopUpgrade1").disabled = this.score < this.upgrade1Cost;
        document.getElementById("koopUpgrade2").disabled = this.score < this.upgrade2Cost;
        document.getElementById("koopUpgrade3").disabled = this.score < this.upgrade3Cost;
        document.getElementById("koopUpgrade4").disabled = this.score < this.upgrade4Cost;
        document.getElementById("koopUpgrade5").disabled = this.score < this.upgrade5Cost;
        document.getElementById("koopUpgrade6").disabled = this.score < this.upgrade6Cost;
    }

    autoClick() {
        this.score += this.upgrades1 * 1;
        this.score += this.upgrades3 * 6;
        this.score += this.upgrades4 * 32;
        this.score += this.upgrades5 * 94;
        this.score += this.upgrades6 * 956;
        this.updateScore();
        this.checkUpgradeButtons(); // Controleer knoppen bij elke auto-click

        this.saveProgress(); // Sla de voortgang op na elke auto-click
    }
}

const cookieClicker = new CookieClicker();

document.getElementById("cookie").addEventListener("click", () => {
    cookieClicker.clickCookie();
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const upgradeNumber = button.id.slice(-1);
        cookieClicker[`koopUpgrade${upgradeNumber}`]();
    });
});

setInterval(() => {
    cookieClicker.autoClick();
}, 1000);

function resetProgress() {
    localStorage.removeItem('cookieClickerData');
    location.reload(); // Herlaad de pagina om met een schone lei te beginnen
}