
function NavMenuUI() {
	// inheritance
	Listener.apply(this, arguments);
	
	// scene
	this.previous_scene = document.getElementById('home');
	
	// home button
	this.hbIconId = 0;
	this.hbIcon = ["angry.png", "yee.png", "annoyed.png", "angry.png", "mad.png", "sad.png"];
}

NavMenuUI.prototype = Object.create(Listener.prototype);

NavMenuUI.prototype.constructor = NavMenuUI;

NavMenuUI.prototype.updateListener = function(message, data) {
	var button = document.getElementById(message);
	var scene_id = message.substr(4);
	
	switch(String(scene_id)) {
		case "home":
			var chance = 1;
			
			if(hbIconId != 0 || Math.random() <= chance) {
				hbIconId = (hbIconId + 1)%6;
				button.style.backgroundImage = "url(" + hbIcon[hbIconId] + ")";
			}
			break;
		case "ttt":
		case "chess":
			//document.getElementById("board"); show block
			break;
		case "coming":
		case "about":
		case "support":
		case "login":
			break;
	}
}
