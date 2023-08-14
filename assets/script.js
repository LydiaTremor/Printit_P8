const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let fleche_gauche = document.querySelector(".arrow_left");
console.log(fleche_gauche);
fleche_gauche.addEventListener("click", function() {
	console.log("Ca fonction");
});

let fleche_droite = document.querySelector(".arrow_right");
console.log(fleche_droite);
fleche_droite.addEventListener("click", function() {
	console.log("Ca fonction");
});

/*const arrows = {
	"image":"arrow_left",
	"image":"arrow_left"
}*/
	
/*const carousel_arrows = document.addEventListener('click', carousel_arrows);*/
