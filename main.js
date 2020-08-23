
$(function() {
	navMenu = new NavMenuUI();
	gameBoard = new BoardUI();
	UI_Observer = new Observer();
	
	UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});