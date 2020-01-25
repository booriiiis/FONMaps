//ubaciti sta ako se rotira
var goFwd = 2;

var p = {
    "type": "equirectangular",
    "panorama": "img/2.jpg",
    "autoLoad": true,
    "haov": 360,
    "vaov": 70,
    "minPitch": -27.905,
    "maxPitch": 30.245,
    "showZoomCtrl": true,
    "mouseZoom": false,
    "keyboardZoom": false,
    "hfov": 105,
    "orientationOnByDefault": true,
    "yaw": -169.5,
};

function provera() {
    if (p.panorama == "img/4.jpg") {
        document.getElementById('left').style.color = 'black';
        document.getElementById('left').disabled = false;

        document.getElementById('right').style.color = 'black';
        document.getElementById('right').disabled = false;
    } else {
        document.getElementById('left').removeAttribute("style");
        document.getElementById('left').disabled = true;

        document.getElementById('right').removeAttribute("style");
        document.getElementById('right').disabled = true;
    }
}


pannellum.viewer('panorama', p);

function changeDirectory() {
    return `img/${Math.abs(goFwd)}.jpg`;
}

function move() {
    if (goFwd == -1) {
        return;
    }

    goFwd++;
    p.panorama = changeDirectory();

    pannellum.viewer('panorama', p);
    provera();

}

function direction() {
    goFwd = -1 * goFwd;

    p.yaw += 180;
    pannellum.viewer('panorama', p);

}

function left() {
    // p.yaw -= 90;
    p.yaw -= 80;
    goFwd = -13;
    pannellum.viewer('panorama', p);
}

function right() {
    p.yaw += 90;
    goFwd = 8;
    pannellum.viewer('panorama', p);
}