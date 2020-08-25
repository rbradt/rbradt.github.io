
$(function() {
	UI_Observer = new Observer();
	navMenu = new NavMenuUI();
	gameBoard = new BoardUI();
	
	UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});