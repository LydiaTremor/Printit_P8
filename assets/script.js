//////////////  Tableau contenant une image, un attribut alt et un tagLine    
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


///////////////   Récupération des flèches dans le DOM
let fleche_gauche = document.querySelector(".arrow_left");
console.log(fleche_gauche);

let fleche_droite = document.querySelector(".arrow_right");
console.log(fleche_droite);


///////////////   Création d'un évènement au click
function event_arrows () {
	fleche_gauche.addEventListener("click", function() {
		console.log("Ca fonctionne");
	});
	
	fleche_droite.addEventListener("click", function() {
		console.log("Ca fonctionne");
	});
}
event_arrows();


//////////////	   Boucle forEach

//La méthode forEach() des instances Array exécute une fonction fournie une fois pour chaque élément du tableau.
//Permet d'exécuter une fonction donnée sur chaque élément du tableau.
//element : l'élément actuel en cours de traitement dans le tableau.
//index : index du tableau. Index est un argument facultatif qui porte l'index de element.

/*
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
*/

//On crée une fonction (slider)
function slider() {

	//Dans le tableau slides déclaré ci-dessus, on crée un boucle boucle forEach avec un index et des éléments
    slides.forEach((index,element) => {

		//On affiche les informations dans la console
        console.log('Ligne du tableau', index, element); // ? index
		// Création de la div dots (les 4 bullets points) stockée dans la constance dot
        const dot = document.createElement('div');

		//Condition avec innerHTML: Modifiez le slide au clic sur le bouton
		//La fonction ou méthode parseInt() analyse un argument de chaîne et renvoie le premier entier (convertit chaine en un nombre entier) de la base spécifiée 
		//Si le 1er élément de l'index est triplement également (égalité stricte) à 0, on affiche tous les éléments ci-dessous 
        if(parseInt(index) === 0){  // ? index === 0
			//Ajouter la class dot_selected (bullet point remplit) à la class dot (bullet points vide) : remplit pour l'image sélectionnée
            dot.classList.add('dot_selected');

            //Afficher la première diapositive
			//Récupère l'image en ciblant la class banner-img, ajouter du chemin relatif
            document.querySelector('.banner-img').src = './assets/images/slideshow/'+element.image;

			//Récupère l'attribut alt en ciblant la class banner-img
            document.querySelector('.banner-img').alt = element.alt;

			//Récupère texte en ciblant tous les p de l'id banner + modification du texte avec innerHTML en récupérant les tagLine
            document.querySelector('#banner > p').innerHTML = element.tagLine;
        }

		//Puis, on ajoute la class dot (bullet points vide) pour les autres images
        dot.classList.add('dot');
		//On récupère et on déclare la class dot (bullet points vide) comme étant l'enfant du parent (la div dots)
        document.querySelector('.dots').appendChild(dot);
    });
}

//La fonction slider est appelée
slider();








	

