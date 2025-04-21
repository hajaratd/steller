/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});
const questions = [
	{
	  question: "Quel est le symbole de l'élément or ?",
	  reponse: "Au"
	},
	{
	  question: "Quel est le numéro atomique de l'élément carbone ?",
	  reponse: "6"
	},
	{
	  question: "Quel est le nom de l'élément avec le symbole Ag ?",
	  reponse: "Argent"
	}
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  
  document.getElementById("valider").addEventListener("click", () => {
	const reponseUtilisateur = document.getElementById("reponse").value;
	if (reponseUtilisateur.toLowerCase() === questions[currentQuestion].reponse.toLowerCase()) {
	  score++;
	  document.getElementById("resultat").innerHTML = "Bonne réponse !";
	} else {
	  document.getElementById("resultat").innerHTML = `Mauvaise réponse. La bonne réponse était ${questions[currentQuestion].reponse}.`;
	}
	currentQuestion++;
	if (currentQuestion >= questions.length) {
	  document.getElementById("question").innerHTML = `Fin du défi ! Votre score est ${score} sur ${questions.length}.`;
	  document.getElementById("reponse").disabled = true;
	  document.getElementById("valider").disabled = true;
	} else {
	  document.getElementById("question").innerHTML = questions[currentQuestion].question;
	  document.getElementById("reponse").value = "";
	}
  });
  