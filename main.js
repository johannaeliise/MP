
function ColorSwatch(sid, r, g, b) {
	
	this.swatchID = sid;
	

	this.red = r;
	this.green = g;
	this.blue = b;
	
	
	this.displaySwatch = function() {
		

		swatchObj = document.getElementById(this.swatchID);
		
	
		swatchHex = rgbToHex(this.red, this.green, this.blue);
		
	
		swatchObj.style.backgroundColor = "#" + swatchHex;
		

		swatchText = document.querySelector("#" + this.swatchID + " p");
		swatchText.innerHTML = "#" + swatchHex;
		
	
		location.hash = swatchHex;

	
		colorAvg = (this.red + this.green + this.blue)/3;
		if (colorAvg < 128) swatchText.classList.add("lite");
		else swatchText.classList.remove("lite");
		
	} 
	
	
	
	this.randomColor = function() {
		this.red = randomColorVal();
		this.green = randomColorVal();
		this.blue = randomColorVal();
		this.displaySwatch();
	}
	

	
} 


window.onload = function() {
	
	urlHex = location.hash;
	console.log("Passed hash: " + urlHex);
	
	if (urlHex != "") {
		urlHexConverted = hexToRgb(urlHex); 
		passedRed = urlHexConverted.r;
		passedGreen = urlHexConverted.g;
		passedBlue = urlHexConverted.b;
	} else {
		passedRed = randomColorVal();
		passedGreen = randomColorVal();
		passedBlue = randomColorVal();
	}

	Swatch1 = new ColorSwatch("colorSwatch1", passedRed, passedGreen, passedBlue);
	Swatch1.displaySwatch();
  

	document.getElementById("colorSwatch1").onclick = function() {
		console.log("clicked");
		Swatch1.randomColor();

	}
  
   Swatch2 = new ColorSwatch("colorSwatch2", passedRed, passedGreen, passedBlue);
	Swatch2.displaySwatch();
  
  	document.getElementById("colorSwatch2").onclick = function() {
		console.log("clicked");
		Swatch2.randomColor();

	}
   Swatch3 = new ColorSwatch("colorSwatch3", passedRed, passedGreen, passedBlue);
	Swatch3.displaySwatch();
  
  	document.getElementById("colorSwatch3").onclick = function() {
		console.log("clicked");
		Swatch3.randomColor();

	}
     Swatch4 = new ColorSwatch("colorSwatch4", passedRed, passedGreen, passedBlue);
	Swatch4.displaySwatch();
  
  	document.getElementById("colorSwatch4").onclick = function() {
		console.log("clicked");
		Swatch4.randomColor();

	}

	     
	document.onkeydown = function(event) {
		k = event.keyCode; 
		if (k == 32) {
			console.log("key: space");
			Swatch1.randomColor();
      Swatch2.randomColor();
      Swatch3.randomColor();
      Swatch4.randomColor();
     
      

		}
	} 
 
}

