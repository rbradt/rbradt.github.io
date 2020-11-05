
function NavMenuUI() {
	// inheritance
	Listener.apply(this, arguments);
	
	// scene
	this.current_scene = document.getElementById('home');
	
	// home button
	this.hbIconId = 0;
	this.hbIcons = ["angry.png", "yee.png", "annoyed.png", "angry.png", "mad.png", "sad.png"];
}

NavMenuUI.prototype = Object.create(Listener.prototype);

NavMenuUI.prototype.constructor = NavMenuUI;

NavMenuUI.prototype.updateListener = function(message, data) {
	var button = document.getElementById(message);
	var scene_id = message.substr(4);
	
	switch(String(scene_id)) {
		case "home":
			var chance = 1;
			
			if(this.hbIconId != 0 || Math.random() <= chance) {
				this.hbIconId = (this.hbIconId + 1)%this.hbIcons.length;
				button.style.backgroundImage = "url(" + this.hbIcons[this.hbIconId] + ")";
			}
			break;
				
		case "ttt":
		case "chess":
		case "coming":
		case "about":
		case "support":
		case "login":
			this.current_scene.style.display = "none";
			this.current_scene = document.getElementById(scene_id);
			this.current_scene.style.display = "block"; 
			break;
	}
}
