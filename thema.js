function changeTheme() {
    const theme = document.getElementById('theme').value;
    const buttons = document.querySelectorAll('button');
    const headers = document.querySelectorAll('h1, h2');
    const overzicht = document.getElementById('overzicht'); 
    const themeSwitcher = document.getElementById('theme-switcher'); 
    const cookieImage = document.getElementById('cookie'); // Grote cookie-afbeelding
    const buttonIcons = document.querySelectorAll('.button-wrapper img'); // Selecteer alle kleine cookie-afbeeldingen in de knoppen

    switch (theme) {
        case 'blauw':
            cookieImage.src = 'afbeeldingen/cookie.png';
            document.body.style.backgroundImage = "url('afbeeldingen/background_blue.png')";
            buttons.forEach(button => {
                button.style.backgroundColor = '#6abcbc'; 
                button.style.borderColor = '#487878'; 
                button.style.color = '#487878'; 
            });
            headers.forEach(header => {
                header.style.color = '#487878'; 
            });
            overzicht.style.color = '#487878'; 
            themeSwitcher.style.backgroundColor = '#6abcbc'; 
            themeSwitcher.style.borderColor = '#487878'; 
            themeSwitcher.style.color = '#487878'; 
            
            // Stel de iconen in de knoppen terug naar standaard cookie-afbeelding
            buttonIcons.forEach(icon => {
                icon.src = 'afbeeldingen/cookie.png';
            });
            break;

        case 'rood':
            cookieImage.src = 'afbeeldingen/cookie.png';
            document.body.style.backgroundImage = "url('afbeeldingen/background_red.png')";
            buttons.forEach(button => {
                button.style.backgroundColor = '#b46865'; 
                button.style.borderColor = '#623e3c'; 
                button.style.color = '#623e3c';
            });
            headers.forEach(header => {
                header.style.color = '#623e3c'; 
            });
            overzicht.style.color = '#623e3c'; 
            themeSwitcher.style.backgroundColor = '#b46865'; 
            themeSwitcher.style.borderColor = '#623e3c'; 
            themeSwitcher.style.color = '#623e3c'; 
            
            // Stel de iconen in de knoppen terug naar standaard cookie-afbeelding
            buttonIcons.forEach(icon => {
                icon.src = 'afbeeldingen/cookie.png';
            });
            break;

        case 'voetbal':
            document.body.style.backgroundImage = "url('afbeeldingen/background_voetbal.png')";
            document.body.style.backgroundSize = "cover"; 
            document.body.style.backgroundRepeat = "no-repeat"; 
            document.body.style.backgroundAttachment = "fixed"; 
            
            cookieImage.src = 'afbeeldingen/voetbal.png'; // Verander de grote cookie-afbeelding naar voetbal

            buttons.forEach(button => {
                button.style.backgroundColor = 'transparent'; // Transparante achtergrond
                button.style.borderColor = '#ffffff';        // Witte rand
                button.style.color = '#ffffff';              // Witte tekst
            });
        
            headers.forEach(header => {
                header.style.color = '#ffffff';              // Witte kleur voor de koppen
            });
        
            overzicht.style.color = '#ffffff';               // Witte kleur voor het overzicht
        
            themeSwitcher.style.backgroundColor = '#045c00'; // Groene achtergrondkleur voor de themakiezer
            themeSwitcher.style.borderColor = '#ffffff';     // Witte rand voor de themakiezer
            themeSwitcher.style.color = '#ffffff';           // Witte tekst voor de themakiezer

            // Verander de kleine cookie-afbeeldingen in de knoppen naar voetbal.png
            buttonIcons.forEach(icon => {
                icon.src = 'afbeeldingen/voetbal.png';       // Verander de kleine iconen naar voetbal
            });
            break;

        default:
            document.body.style.backgroundImage = "url('afbeeldingen/background.png')";
            cookieImage.src = 'afbeeldingen/cookie.png'; // Standaard grote cookie-afbeelding

            buttons.forEach(button => {
                button.style.backgroundColor = '#f1a843';
                button.style.borderColor = '#a36424'; 
                button.style.color = '#653f19'; 
            });

            headers.forEach(header => {
                header.style.color = '#653f19'; 
            });

            overzicht.style.color = '#653f19'; 

            themeSwitcher.style.backgroundColor = '#f1a843'; 
            themeSwitcher.style.borderColor = '#a36424';
            themeSwitcher.style.color = '#653f19'; 

            // Stel de iconen in de knoppen terug naar standaard cookie-afbeelding
            buttonIcons.forEach(icon => {
                icon.src = 'afbeeldingen/cookie.png';
            });
    }

    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
}
