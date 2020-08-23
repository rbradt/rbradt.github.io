
function Observer() {
	this.listeners = [];
	
	this.add = function(listener) {
		this.listeners[this.listeners.length] = listener;
	}
	
	this.remove = function(listener) {
		for(var i = 0; i < this.listeners.length; i++)
			if(listener === this.listeners[i]) {
				this.listeners.splice(i, 1);
				break;
			}
	}
	
	this.notifyListeners = function(message, data) {
		for(var i = 0; i < this.listeners.length; i++)
			this.listeners[i].updateListener(message, data);
	}
}

function Listener() {
	if(this.constructor === Listener)
		throw new Error("Listener is an abstract base class!");
}

Listener.prototype.updateListener = function(message, data) {
	throw new Error("Listener is an abstract base class!");
}

