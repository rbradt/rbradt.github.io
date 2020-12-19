function NavModel () {
	var _this = this;
	
	this.currentScene = "home";
	this.previousScene = "home";
	
	this.observers = [];
	
	this.setCurrentScene = function(scene) {
		if(_this.currentScene !== scene) {
			_this.previousScene = _this.currentScene;
			_this.currentScene = scene;
			_this.notifyObservers();
		}
	}
	
	this.getCurrentScene = function() {return _this.currentScene;}
	
	this.getPreviousScene = function() {return _this.previousScene;}
	
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
		console.log(model.getPreviousScene());
		document.getElementById(model.getPreviousScene()).style.display = "none";
		document.getElementById(model.getCurrentScene()).style.display = "block";
	};
	this.controller.model.addObserver(this);
}
