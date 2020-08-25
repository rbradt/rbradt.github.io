
$(function() {
	UI_Observer = new Observer();
	navMenu = new NavMenuUI();
	gameBoard = new BoardUI(document.getElementById("ttt_board"));
	
	UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});