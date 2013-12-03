$(document).ready(function(){

/* fonction de scroll */

	var documentBody = document.body;

	    //Scroll Shop
	    $('.shop').click(function() {
	        $(documentBody).animate({scrollTop: $('#wrapperHome').offset().top}, 300);
	        return false;
	    });

		//Scroll to top
	    $('#scrollTop').click(function() {
	        $(documentBody).animate({scrollTop: $('.wrapper').offset().top}, 500);
	        return false;
	    });

	/* fonction d'affichage panier + compte */

	/*appel*/

	$('#seConnecter').click(showConnexion);
	$('#voirPanier').click(showPanier);

	function showConnexion(){
		$('#connexion').fadeIn(200);
		$('#panier').fadeOut(200);
		return false;
	}

	function showPanier(){
		$('#panier').fadeIn(200);
		$('#connexion').fadeOut(200);
		return false;
	}

	/* fonction d'affichage infos + commande */

	$('#commande').click(showCommande);
	$('#infos').click(showInfo);

	function showCommande(){
		if ($('#commande').hasClass('selected')) {
			return false;
		};
		$('#infosbox').toggleClass('on');
		$('#compteCommande').toggleClass('on');
		$('#commande').toggleClass('selected');
		$('#infos').toggleClass('selected');
		return false;
	}

	

	function showInfo(){
		if ($('#infos').hasClass('selected')) {
			return false;
		};
		$('#infosbox').toggleClass('on');
		$('#compteCommande').toggleClass('on');
		$('#commande').toggleClass('selected');
		$('#infos').toggleClass('selected');
		return false;
	}




	/* fonction d'affichage de la lightbox */

	/* appel */

	$('#voir').click(lightbox);

	$('#cache').click(function(){
		$('#cache').fadeOut(250, function(){
			$('#cache').removeClass('on');
		});
		return false;
	});

	function lightbox(){

		$('#cache').fadeIn(250, function(){
			$('#cache').addClass('on');
		});
		return false;
	}

/* ENVOI DE DONNES EN AJAX */

    $('#ajoutPanier').click(function(event){
    	var taille = $('#taille option:selected').text();
    	var idtaille = $('#taille option:selected').attr('value');
    	var currentLocation =  document.location.href;
    	var action = "ajout";
      	$.post(currentLocation, {taille:taille,action:action, idtaille:idtaille}, function(data) { 
			$("#panier").empty();
			$("#panier").append(data);  
	    });
	    showPanier();
      	event.preventDefault();
    });
    
    $('#panier').on('click','.corbeille',function(event){
	    var cle = $(this).attr('id');
	    var currentLocation =  '/beluga/';
	    var click = "minipanier";
	    var action = "suppression";
		$.post(currentLocation, {cle:cle,action:action,click:click}, function(data) { 
			$("#panier").empty();
			$("#panier").append(data);  
		});
		event.preventDefault();
	});

	$('#etape1').on('click','tr td:nth-child(5) a',function(event){
	    var cle = $(this).attr('id');
	    var currentLocation =  '/beluga/';  ///beluga/
	    var click = "tableau";
	    var action = "suppression";
		$.post(currentLocation, {cle:cle,action:action, click:click}, function(data) { 
			$("#etape1").empty();
			$("#etape1").append(data);  
		});
		event.preventDefault();
	});
});

