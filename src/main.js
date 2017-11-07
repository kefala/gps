
window.addEventListener('DOMContentLoaded', () => {
    const x = document.getElementById('demo');
    x.innerHTML = "";
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition,
                function(error){
                    showError(error.message);
                }
            );
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        const e = document.createElement('p');
        e.textContent = "Latitude: " + position.coords.latitude + 
        " Longitude: " + position.coords.longitude +
        " Accuracy: " + position.coords.accuracy;
        x.appendChild(e);
    }
    function showError(error) {
        const e = document.createElement('p');
        e.textContent = error;
        x.appendChild(e);
    }
    setInterval(() => {
        getLocation();        
    }, 2000);

    navigator.serviceWorker
    .register('./sw.js')
    .then(function() { console.log('Service Worker Registered'); });
});

