//     innerHTML: Modifiez le slide au clic sur le bouton
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

function slider () {
	//for (let i = 0; i <= 0; i++)
	for (let i = 0; i <= 4; i++) {
		let hero = document.getElementById("banner").innerHTML =
		//Récupère l'image = image de la flèche gauche
		document.querySelector(".arrow_left")
		//Récupère l'image = image slide
		const imageElement = document.querySelector(".banner-img")
		//Récupère le texte = tagLine
		document.getElementsbyTagName('p').innerHTML = "tagLine"
		//Récupère l'image = image de la flèche droite
		document.querySelector(".arrow_right")
		//On récupère les bullets points
		document.querySelector(".dots")
	}
}
slider();

//     const carousel_arrows = document.addEventListener('click', carousel_arrows);

// Récupération des flèches dans le DOM
let fleche_gauche = document.querySelector(".arrow_left");
console.log(fleche_gauche);

let fleche_droite = document.querySelector(".arrow_right");
console.log(fleche_droite);

//Création d'un évènement au click
function event_arrows {
	fleche_gauche.addEventListener("click", function() {
		console.log("Ca fonctionne");
	});
	
	fleche_droite.addEventListener("click", function() {
		console.log("Ca fonction");
	});
}
event_arrows();






	

