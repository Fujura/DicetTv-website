let clonedSlider1 = document.getElementById("slider").cloneNode(true);
clonedSlider1.setAttribute('id', 'slider-copy-right')
document.querySelector("#slider-line").appendChild(clonedSlider1);

let clonedSlider2 = document.getElementById("slider").cloneNode(true);
clonedSlider2.setAttribute('id', 'slider-copy-left')
document.querySelector("#slider-line").appendChild(clonedSlider2);

let offset = 0;
const sliderLine = document.querySelector('#slider-line')


function MoveSliderRight(){
    offset = offset + 1870;
    
    if(offset > 3740){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}


function MoveSliderLeft(){
    offset = offset - 1870;
    
    if(offset < 0){
        offset = 3740;
    }
    sliderLine.style.left = -offset + 'px';
}

