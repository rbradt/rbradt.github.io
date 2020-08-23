
$(function() {
	var navMenu = new NavMenuUI();
	var gameBoard = new BoardUI();
	var UI_Observer = new Observer();
	
	UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});