// ! ICI SE TROUVE LE JS CREANT  LES DONNEE DE LA PROGRESS BAR
let colors = [
    ['#F8F9B6', '#F2D558']
],
circles = [];

for (let i = 1; i <= 5; i++) {
let child = document.getElementById('circles-' + i),
    percentage = 31.42 + (i * 9.84),
    
    circle = Circles.create({
        id:         child.id,
        value:      percentage,
        radius:     getWidth(),
        width:      10,
        colors:     colors[i - 1]
    });

circles.push(circle);
}

window.onresize = function(e) {
for (var i = 0; i < circles.length; i++) {
    circles[i].updateRadius(getWidth());
}
};

function getWidth() {
return window.innerWidth / 20;
}
getWidth()



var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});
map.addOverlay(overlay);

closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};