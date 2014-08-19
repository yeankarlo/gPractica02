//JavaScript
	
$(document).ready(function(e){	
	/* Esperamos a que el dispositivo esté lispo para empezar a escuchar los eventos 
	  (poner horizontal el dispositivo, tap o clic, inclinar el dispositivo, etc.) y hacer algo. */
	document.addEventListener("deviceready",function(){
    	$('#btnBeep').tap(function(){
			navigator.notification.beep(2);
		});
		
		$('#btnVibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});
	},false); //deviceready
});//ready