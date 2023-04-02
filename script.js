console.log("load script.js");

const body = document.body;
const nose_cover = document.getElementById("nose-cover");
const nose = document.getElementById("nose");

document.addEventListener('mousemove', (e) => {
    const first_position = [250, 120];
    const len = calcHypotenuse(e.clientX - first_position[0], e.clientY - first_position[1]);
    const degree = getDegree(first_position[0], first_position[1], e.clientX, e.clientY);

    nose.style.width = len.toString() + "px";
    nose_cover.style.transform = "rotate(" + degree + "deg)";

    if (len <= 100) {
        nose.style.height = len.toString() + "px";
    }
});

function calcHypotenuse(a, b) {
    return parseInt(Math.sqrt((a * a) + (b * b)));
}

function getDegree(first_x, firxt_y, x, y) {
    const radian = Math.atan2(y - firxt_y, x - first_x);
    const degree = radian * (180 / Math.PI);
    return parseInt(degree);
}