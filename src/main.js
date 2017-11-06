
window.addEventListener('DOMContentLoaded', () => {
    const x = document.getElementById('demo');
    x.innerHTML = "Cargando";
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition,
                function(error){
                     alert(error.message);
                }, {
                     enableHighAccuracy: true
                          ,timeout : 5000
                }
            );
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude +
        "<br>Accuracy: " + position.coords.accuracy; 
    }

    getLocation();

    // navigator.serviceWorker
    // .register('./sw.js')
    // .then(function() { console.log('Service Worker Registered'); });
});

