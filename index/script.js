const scrollIndicator = document.querySelector('.scroll-indicator');
const image = scrollIndicator.querySelector('img');
const viewportHeight = window.innerHeight;

let targetTop = 0;
let currentTop = 0;
let isAnimating = false;

function animate() {
    if (isAnimating) {
        requestAnimationFrame(animate);
    }

    const diff = targetTop - currentTop;
    const step = diff * 0.05;

    if (Math.abs(diff) < 1) {
        currentTop = targetTop;
        isAnimating = false;
    } else {
        currentTop += step;
        scrollIndicator.style.transform = `translateY(${currentTop}px)`;
    }
}

window.addEventListener('scroll', () => {
    const bodyHeight = document.body.offsetHeight;
    const scrollPosition = window.scrollY;
    const scrolledPercentage = (scrollPosition / (bodyHeight - viewportHeight)) * 100;
    targetTop = (scrolledPercentage / 100) * (viewportHeight - scrollIndicator.offsetHeight);

    if (!isAnimating) {
        isAnimating = true;
        animate();
    }
});
var map = L.map('map').setView([59.276112, 11.165020], 15);
    
    var marker = L.marker([59.276112, 11.165020]).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

var map1 = L.map('map1').setView([59.12743, 11.38613], 11);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map1);

// Legg til flere markører
var marker1 = L.marker([59.14861, 11.37454]).addTo(map1); // Marker for Oslo sentrum
var marker2 = L.marker([59.13932, 11.44286]).addTo(map1); // Marker for Slottsparken
var marker3 = L.marker([59.13557, 11.34373]).addTo(map1);
var marker4 = L.marker([59.11262, 11.40289]).addTo(map1);
var marker5 = L.marker([59.11465, 11.42698]).addTo(map1);
        