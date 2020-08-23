
$(function() {
	var NavMenu = new Nav_Menu_Controller();
	var gameBoard = new BoardUI();
	var UI_Observer = new Observer();
	
	UI_Observer.add(NavMenu);
	UI_Observer.add(gameBoard);
});