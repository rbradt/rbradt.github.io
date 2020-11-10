
$(function() {
	UI_Observer = new Observer(); // Observer should be implemented instead of being an object
	//navMenu = new NavMenuUI();
	gameBoard = new BoardUI(document.getElementById("ttt_board"));
	
	//UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});