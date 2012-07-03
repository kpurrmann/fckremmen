// Animationen f�r Goldrausch

$(document).ready(function() {

//	/* MENUF�HRUNG */
//	var inter = 0;
//
//	$('#menu li a.main').mouseover(function() {
//		var i = $('#menu li a').index(this);
//		$('div.aktiv').removeClass('aktiv');
//		$('#submenu:hidden').slideDown();
//		$('div.col-' + (i+1)).addClass('aktiv');
//		$('#menu img').removeClass('einfahren');
//		$('#menu img').addClass('ausfahren');
//		clearInterval(inter);
//		return false;
//	});
//
//	$('#menu img').click(function() {
//		if($('#submenu').css('display') == 'block') {
//			$('#submenu').slideUp();
//			$(this).removeClass('ausfahren');
//			$(this).addClass('einfahren');
//		} else {
//			$('#submenu').slideDown();
//			$(this).removeClass('einfahren');
//			$(this).addClass('ausfahren');
//		}
//	});
//
//	$('#menu a').click(function() {
//		return true ;
//	});
//
//	$('#submenu a').click(function() {
//		return true ;
//	});
//
//	$('#submenu > div').mouseover(function() {
//		$('div.aktiv').removeClass('aktiv');
//		$(this).addClass('aktiv');
//	});
//
//	$('#menu').mouseleave(function() {
//		$('#submenu').slideUp();
//		$('#menu img').removeClass('ausfahren');
//		$('#menu img').addClass('einfahren');
//	});
	
	/* TEASER */	
	var intTimeout = 0;
	var intCurrId  = 0;
	
	$('.teaser:eq('+ intCurrId +')').show();

	$("#teaser-navi li").hover( function () {
		var id = $('#teaser-navi li').index(this);
		if ($(".teaser:eq("+ id +")").is(":visible") === false) {
			$('.teaser:eq('+ intCurrId +')').fadeOut();
			$('.teaser:eq('+ id +')').fadeIn();
			intCurrId = id;
			$('#teaser-navi > li').removeClass('aktiv');
			$('#teaser-navi > li:eq(' + (intCurrId)+ ')').addClass('aktiv');
			window.clearInterval(intTimeout);			
		}
	});

	changeImg = function() {
		$('.teaser:eq('+ intCurrId +')').fadeOut(2000);
		intCurrId = ( intCurrId == 2 ) ? 0 : intCurrId + 1;
		$('.teaser:eq('+ intCurrId +')').fadeIn(2000);
		$('#teaser-navi > li').removeClass('aktiv');
		$('#teaser-navi > li:eq(' + (intCurrId)+ ')').addClass('aktiv');
	}

	intTimeout = window.setInterval("changeImg()", 10000);
	
	/* NEWS 
	$('.newshead').hover(function() {						  
		var nid = $('.newshead').index(this);
		
		if($('.further:eq(' + nid + ')').is(':visible') == false ) {
			$('.further:visible').hide();
			$('.aktiv').removeClass('aktiv');
			$('.further:eq(' + nid + ')').slideDown().addClass('aktiv');
			$(this).addClass('aktiv');
		}
	}); */

	/* TABELLEN */
	$('#team').tablesorter({ 
        // sort on the first column and third column, order asc 
		sortList: [[1, 0],[0, 0]]
    }); 
	$('#profil tr:odd').css('background-color','#F1F1F1');
	$('#team tr:odd').css('background-color','#F1F1F1');
	$('#coach tr:odd').css('background-color','#F1F1F1');
	$('#supporter tr:odd').css('background-color','#F1F1F1');	

	/* LIGHTBOX */
//	$('a[rel*=lightbox]').lightBox();
	Shadowbox.init();

/*
	
	if(($('#newsflash').length > 0) && (document.cookie) ) {
		lb = document.cookie;
		if(lb.match(/lb/)){
		}
		else {

		var ablauf = new Date();
		var inEinemTag = ablauf.getTime() + (1 * 24 * 60 * 60 * 1000);
		ablauf.setTime(inEinemTag);
		document.cookie = "lb=start; expires=" + ablauf.toGMTString();
		var overlay = '<div id="overlay" style="filter:alpha(opacity=75); -moz-opacity: 0.75; opacity: 0.75;background:#000; position:fixed; top:0; left:0; height:100em; width:100%; z-index:200000;"></div>';
		$('body').prepend(overlay); 
		$('#newsflash').fadeIn(1800);

		}
	}  */

	$('.close, #overlay').live('click', function(){ 
			$('#newsflash, #overlay').fadeOut(function(){ 
				$('#overlay').remove();
			});
			return false;
		});
	

});