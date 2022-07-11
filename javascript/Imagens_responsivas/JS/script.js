
const images = document.querySelectorAll("img");
const SIZES = {
	showcase: "100vw",
	reason: "(max-width: 799px) 100vw, 372px",
	features: "(max-width: 799px) 100vw, 558px",
	story: "(max-width: 799px) 100vw, 670px",
};

function makeSrcSet(imgSrc){
	let markup = [];
	let width = 400;
	
	for (let i = 0; 1<5; i++){
		markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
		width =+ 400;
		return markup.join();
	}
}

for (let i = 0; i<images.length; i++ ){
	let imgSrc = images[i].getAttribute("src");
	imgSrc = imgSrc.slice(0, -8);
	console.log(imgSrc);
	let srcSet = makeSrcSet(imgSrc);
	images[i].setAttribute("srcSet", srcSet);
	console.log(srcSet);
	
	let type = images[i].getAttribute("data-type");
	let sizes = SIZES[type];
	images[i].setAttribute("sizes", sizes);
	console.log(sizes);
	console.log(type);
}