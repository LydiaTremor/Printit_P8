// Tableau
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

// Récupération des flèches dans le DOM
let fleche_gauche = document.querySelector(".arrow_left");
let fleche_droite = document.querySelector(".arrow_right");
let currentIndex = 0;

// Une boucle pour le slide
function slider() {

    slides.forEach((element, index) => {
        const dot = document.createElement('div');

        if(parseInt(index) === 0){  
            dot.classList.add('dot_selected');

            document.querySelector('.banner-img').src = './assets/images/slideshow/'+element.image;
			document.querySelector('.banner-img').alt = element.alt;
			document.querySelector('#banner > p').innerHTML = element.tagLine;
        }

		dot.classList.add('dot');
		document.querySelector('.dots').appendChild(dot);

		bullet_points(0);
    });
}

slider();

// Une boucle pour les bullets points du slide
function bullet_points(dotIndex) {
	
	Array.from(document.querySelectorAll('.dot')).forEach((element, index) => {
		if(parseInt(dotIndex) === index) {
			element.classList.add('dot_selected');
		}else {
			element.classList.remove('dot_selected');
		}
	});
}

//Défilement du slide infini avec le bon bullet point sélectionné
function showSlide(direction) {
    currentIndex = currentIndex + direction;
	
	if(currentIndex >= slides.length) {currentIndex = 0;}else if(currentIndex <= 0)  {currentIndex = slides.length - 1;}

    document.querySelector('.banner-img').src = './assets/images/slideshow/'+slides[currentIndex].image;
    document.querySelector('.banner-img').alt = slides[currentIndex].alt;
    document.querySelector('#banner > p').innerHTML = slides[currentIndex].tagLine;

	bullet_points(currentIndex);
}


//Au clic qur la flèche gauche : Méthode 1 avec while
fleche_gauche.addEventListener("click", function() {showSlide(-1);});

//Au clic qur la flèche droite
fleche_droite.addEventListener("click", function () {showSlide(1);});










	

