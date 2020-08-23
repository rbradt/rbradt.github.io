
function UI_Observer() {
	this.listeners = [];
	this.save = this;
	
	this.add = function(listener) {
		save.listeners[listeners.length] = listener;
	}
	
	this.remove = function(listener) {
		for(var i = 0; i < save.listeners.length; i++)
			if(listener === save.listeners[i]) {
				save.listeners.splice(i, 1);
				break;
			}
	}
	
	this.notify = function(message, data) {
		for(var i = 0; i < save.listeners.length; i++)
			save.listeners[i].update(message, data);
	}
}

function Listener() {
	if(this.constructor === Listener)
		throw new Error("Listener is an abstract base class!");
}

Listener.prototype.notify = function(message, data) {
	throw new Error("Listener is an abstract base class!");
}

