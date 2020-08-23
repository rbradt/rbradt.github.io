
function Nav_Menu_Controller() {
	// inheritance
	Listener.apply(this, arguments);
	
	// scene
	this.previous_scene = document.getElementById('home');
	
	// home button
	this.hbIconId = 0;
	this.hbIcon = ["angry.png", "yee.png", "annoyed.png", "angry.png", "mad.png", "sad.png"];
}

Nav_Menu_Controller.prototype = Object.create(Listener.prototype);

Nav_Menu_Controller.prototype.constructor = Nav_Menu_Controller;

Nav_Menu_Controller.prototype.update = function(message, data) {
	var button = document.getElementById(message);
	
	if(message.substring(0, 2) == 'nav') {
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
				break;
			case "chess":
			case "coming":
			case "about":
			case "support":
			case "login":
				break;
		}
	}
}
