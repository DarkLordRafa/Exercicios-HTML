
const sliderArea2 = document.querySelector(".our-team .slider-area");
const sliderIndicators2 = document.querySelectorAll(".our-team .indicators__indicator");
const mobileSliderIndicators2 = document.querySelectorAll(".our-team__mobile-indicators .indicators__indicator");
const desktopSliderIndicators2 = document.querySelectorAll(".our-team__desktop-indicators .indicators__indicator");
var marginSliderArea2 = 0;
var maxMarginSliderArea2;
var slideNumberSliderArea2 = 0;
var maxSlideNumberSlideArea2;

sliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";

function checkWidth(){
	if (window.innerWidth >= 400){
	maxMarginSliderArea2 = -100;
	desktopSliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";
}
	else {
	maxMarginSliderArea2 = -500;
	mobileSliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";
	}
}

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
	sliderArea2.style.marginLeft = marginSliderArea2+"vw";
}

checkWidth();
//setInterval(checkWidth, 100);
window.addEventListener("resize", checkWidth)
setInterval(slider2, 4000);
