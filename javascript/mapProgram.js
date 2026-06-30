// Years run from 200AD to 2000AD, jumping in gaps of roughly 33
// years, landing on an exact century every third jump (e.g. 200, 233, 266, 300, 333, 366, 400 ...).
const years = [];
for (let century = 200; century <= 1900; century += 100) {
    years.push(century, century + 33, century + 66);
}
years.push(2000);
 
const select = document.getElementById('year-select');
const mapDisplay = document.getElementById('map-display');
 
years.forEach(function (year) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year + 'AD';
    select.appendChild(option);
});
 
function showMap(year) {
    mapDisplay.src = 'images/map images/Map ' + year + 'AD.png';
    mapDisplay.alt = 'Map ' + year + 'AD';
}
 
select.addEventListener('change', function () {
    showMap(select.value);
});
 
// Show the first map by default
showMap(years[0]);
 
