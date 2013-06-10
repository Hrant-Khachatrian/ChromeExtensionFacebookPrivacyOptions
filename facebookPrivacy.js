// Inspired by an image from the web
(function () {
	var refresh = function () {
		var t = document.querySelectorAll('.fbPrivacyAudienceSelectorOption .itemLabel:not(.CIA)');
		for(var i in t){
			if(t[i].innerHTML != 'Public'){
				t[i].innerHTML += ' and the CIA';
			}
			t[i].className += ' CIA';
		}
		setTimeout(refresh, 1000);
	};
	setTimeout(refresh, 1000);
})();