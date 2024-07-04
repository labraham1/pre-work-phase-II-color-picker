window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById('color-box');
    let rgb = {
        red: 255,
        green: 255,
        blue: 255,
    };
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("red value: ", rgb.red.value);
    });
    rgb.green.addEventListener('change', () => {
        console.log("green value: ", rgb.green.value);
    });
    rgb.blue.addEventListener('change', () => {
        console.log("blue value: ", rgb.blue.value);
    });
}