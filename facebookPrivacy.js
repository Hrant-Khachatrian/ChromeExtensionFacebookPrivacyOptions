// Inspired by an image from the web
(function () {
	var refresh = function () {
		var options = document.querySelectorAll('.fbPrivacyAudienceSelectorOption .itemLabel:not(.CIA)');
		for(var i in options){
			if (options[i].innerHTML !== 'Public') {
				options[i].innerHTML += ' and the CIA';
			}
			options[i].className += ' CIA';
		}

		var currentOption = document.querySelector('.composerAudienceSelector .uiButtonText');
		if (currentOption && currentOption.innerHTML && currentOption.innerHTML.substr(-3) !== 'CIA' && currentOption.innerHTML !== 'Public') {
			currentOption.innerHTML += ' and the CIA';
		}
		setTimeout(refresh, 400);
	};
	setTimeout(refresh, 400);
})();