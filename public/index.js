var MB = MB || {};

MB.LunchTime = (function() {
	
	var btns_,
		socket_;

	function init(socket) {
		btns_ = document.getElementsByTagName('button');
		socket_ = socket;
		setListeners_();
	}

	function setListeners_() {
		for(var i = 0; i < btns_.length; i++) {
			(function(i) {
				btns_[i].addEventListener('click', setAction_);
			})(i);
		}
	}

	function setAction_(e) {
		console.log(e.target.id);
		socket_.emit('btnClick', e.target.id);
	}

	return {
		init: function(socket) { init(socket) }
	}
})();