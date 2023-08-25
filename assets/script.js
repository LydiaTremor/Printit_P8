//     innerHTML: Modifiez le slide au clic sur le bouton
const slides = [
	{
		"image":"slide1.jpg",
        "alt": "Impressions tous formats",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
        "alt": "Tirages haute définition grand format",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
        "alt": "Grand choix de couleurs",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
        "alt": "Autocollants",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function slider(){
	//Boucle
    slides.forEach((index,element) => {
        /* Creation of dots */
        console.log('Ligne du tableau', index, element);
        const dot = document.createElement('div');
		//Condition
        if(parseInt(index) === 0){
			//Ajouter la class dot_selected
            dot.classList.add('dot_selected');
            /* Show the first slide */
			//Récupère l'image
            document.querySelector('.banner-img').src = './assets/images/slideshow/'+element.image;
			//Récupère alt
            document.querySelector('.banner-img').alt = element.alt;
			//Modifier texte
            document.querySelector('#banner > p').innerHTML = element.tagLine;
        }
		//Ajouter la class dot
        dot.classList.add('dot');
        document.querySelector('.dots').appendChild(dot);
    });
}

//


/*function slider () {
	//for (let i = 0; i <= 0; i++)
	for (let i = 0; i <= 4; i++) {
		//Modification de la div banner
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
}*/
slider();


// Récupération des flèches dans le DOM
let fleche_gauche = document.querySelector(".arrow_left");
console.log(fleche_gauche);

let fleche_droite = document.querySelector(".arrow_right");
console.log(fleche_droite);

//Création d'un évènement au click
function event_arrows () {
	fleche_gauche.addEventListener("click", function() {
		console.log("Ca fonctionne");
	});
	
	fleche_droite.addEventListener("click", function() {
		console.log("Ca fonctionne");
	});
}
event_arrows();






	

