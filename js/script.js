window.onload = () => {
    let darkMode = localStorage.getItem("darkmode");
    
    if(darkMode === undefined || darkMode === "true") {
        darkMode = true;
        document.querySelector('.app').classList.add('dark');
    } else {
        darkMode = false;
        document.querySelector('.app').classList.remove('dark');
    }

    document.querySelector('#nightmode').addEventListener('change', (e) => {
        if (e.target.checked) {
            document.querySelector('.app').classList.add('dark');
            localStorage.setItem("darkmode", "true");
        } else {
            document.querySelector('.app').classList.remove('dark');
            localStorage.setItem("darkmode", "false");
        }
    });

    document.querySelector('#nightmode').checked = darkMode;
}