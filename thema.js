function changeTheme() {
    const theme = document.getElementById('theme').value;
    const buttons = document.querySelectorAll('button');
    const headers = document.querySelectorAll('h1, h2');
    const overzicht = document.getElementById('overzicht'); 
    const themeSwitcher = document.getElementById('theme-switcher'); 

    switch (theme) {
        case 'blauw':
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
            break;

            

        case 'rood':
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
            break;



        default:
            document.body.style.backgroundImage = "url('afbeeldingen/background.png')";

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
    }

    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
}
