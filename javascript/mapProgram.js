// Years run from 200AD to 2000AD, jumping in gaps of roughly 33
// years, landing on an exact century every third jump (e.g. 200, 233, 266, 300, 333, 366, 400 ...).
const years = [];
for (let century = 200; century <= 1900; century += 100) {
    years.push(century, century + 33, century + 66);
}
years.push(2000);
 
const nav = document.getElementById('year-nav');
const mapDisplay = document.getElementById('map-display');
 
function showMap(year) {
    mapDisplay.src = 'images/map images/Map ' + year + 'AD.png';
    mapDisplay.alt = 'Map ' + year + 'AD';
}
 
function selectYear(year, clickedButton) {
    showMap(year);
 
    const allButtons = nav.querySelectorAll('.year-btn');
    allButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
}
 
years.forEach(function (year) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'year-btn';
    button.textContent = year + 'AD';
 
    button.addEventListener('click', function () {
        selectYear(year, button);
    });
 
    nav.appendChild(button);
});
 
// Show the first map by default and mark its button as active
const firstButton = nav.querySelector('.year-btn');
selectYear(years[0], firstButton);
