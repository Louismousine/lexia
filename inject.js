chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		chrome.storage.sync.get(['key'], function(result) {
			let font=result.key;
			document.querySelectorAll("*").forEach( e => e.style.fontFamily=font ? font : "Arial");
		});
	}
	}, 10);
});