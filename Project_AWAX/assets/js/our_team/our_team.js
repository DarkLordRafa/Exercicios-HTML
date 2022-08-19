
const sliderArea2 = document.querySelector(".our-team .slider-area");
const sliderIndicators2 = document.querySelectorAll(".our-team .indicators__indicator");
var marginSliderArea2 = 0;
var maxMarginSliderArea2;
if (screen.width >= 1024){
	maxMarginSliderArea2 = -100;
//Removendo o excesso de indicadores do slider:
	sliderIndicators2.forEach(function(indicator, index){
		if (index > 1){
			indicator.parentElement.removeChild(indicator);
		}
	});
}
else {
	maxMarginSliderArea2 = -500;
}

var slideNumberSliderArea2 = 0;

sliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";

function slider2(){
	if (marginSliderArea2 == maxMarginSliderArea2){
		marginSliderArea2 = 0;
		slideNumberSliderArea2 = 0;
	}
	else{
		marginSliderArea2 += -100;
		slideNumberSliderArea2++;
	}
	sliderIndicators2.forEach(function(indicator){
	indicator.style.cssText = "background-color: transparent; transition: ease-in 0.5s";
	}
	);
	sliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";
	sliderArea2.style.marginLeft = marginSliderArea2+"vw";
}

setInterval(slider2, 4000);
