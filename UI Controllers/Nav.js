function NavModel () {
	var _this = this;
	this.currentScene = "home";
	this.previousScene = "home";
	this.observers = [];
	
	this.setCurrentScene = function(scene) {
		if(currentScene !== scene) {
			_this.previousScene = _this.currentScene;
			_this.currentScene = scene;
			_this.notifyObservers();
		}
	}
	
	this.getCurrentScene = function() {return _current;}
	
	this.getPreviousScene = function() {return _previous;}
	
	this.addObserver = function(observer) {_this.observers.push(observer);}		
	
	this.notifyObservers = function() {
		for(var i = 0; i < _this.observers.length; i++)
			_this.observers[i].update(_this);
	}
}

function NavController(model) {
	var _this = this;
	this.model = model;
	
	this.handleEvent = function(event) {
		event.stopPropagation();
		
		switch(event.type) {
			case "click":
			_this.model.setCurrentScene(event.target.id.substr(4));
			break;
		}
	}
}

function NavView(controller) {
	var _this = this;
	this.controller = controller;
	document.getElementById("nav_home").addEventListener("click", controller);
	document.getElementById("nav_ttt").addEventListener("click", controller);
	document.getElementById("nav_chess").addEventListener("click", controller);
	document.getElementById("nav_coming").addEventListener("click", controller);
	document.getElementById("nav_about").addEventListener("click", controller);
	document.getElementById("nav_support").addEventListener("click", controller);
	document.getElementById("nav_login").addEventListener("click", controller);
	this.update = function(model) {
		document.getElementById(model.getPreviousScene()).style.display = "none";
		document.getElementById(model.getCurrentScene()).style.display = "block";
	};
	this.controller.model.addObserver(this);
}

//function NavMenuUI() {
//	//inheritance
//	Listener.apply(this, arguments);
//	
//	//scene
//	this.current_scene = document.getElementById('home');
//	
//	//home button
//	this.hbIconId = 0;
//	this.hbIcons = ["angry.png", "yee.png", "annoyed.png", "angry.png", "mad.png", "sad.png"];
//}
//
//NavMenuUI.prototype = Object.create(Listener.prototype);
//
//NavMenuUI.prototype.constructor = NavMenuUI;
//
//NavMenuUI.prototype.updateListener = function(message, data) {
//	var button = document.getElementById(message);
//	var scene_id = message.substr(4);
//	
//	switch(String(scene_id)) {
//		case "home":
//			var chance = 1;
//			
//			if(this.hbIconId != 0 || Math.random() <= chance) {
//				this.hbIconId = (this.hbIconId + 1)%this.hbIcons.length;
//				button.style.backgroundImage = "url(" + this.hbIcons[this.hbIconId] + ")";
//			}
//			break;
//				
//		case "ttt":
//		case "chess":
//		case "coming":
//		case "about":
//		case "support":
//		case "login":
//			this.current_scene.style.display = "none";
//			this.current_scene = document.getElementById(scene_id);
//			this.current_scene.style.display = "block"; 
//			break;
//	}
//}
