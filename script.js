window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById('color-box');
    let rgb = {
        red: document.getElementById('red'),
        green: document.getElementById('green'),
        blue: document.getElementById('blue')
    };
    let colorPickers = document.getElementById("color-box");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements){
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', function () {
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue)
        });
    }
}

function setElementBGColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = "rgb(" + rgbVal + "," + green + ")";
}