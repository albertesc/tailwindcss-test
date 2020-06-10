require("./utilities/accordion");
require("./utilities/anchors");
require("./utilities/burger");
require("./utilities/collapse");
require("./utilities/cookies");
require("./utilities/file");
require("./utilities/header");
require("./utilities/tabs");
require("./utilities/up");

import rangeSlider from "./utilities/range";
import Glide from "@glidejs/glide";

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0
}).mount();


// -------------------
// How to use? 
const newRangeSlider = new rangeSlider('my-slider');

newRangeSlider.onChange = function(min, max) {
    console.log(min, max, this);
    document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
}

newRangeSlider.didChanged = function(min, max) {
    console.log(min,max, this);
    document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
}

// call reset if needed
// newRangeSlider.reset();