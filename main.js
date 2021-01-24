
$(function() {
	Nav_Model = new NavModel();
	Nav_Controller = new NavController(Nav_Model);
	Nav_View = new NavView(Nav_Controller);
	
	UI_Observer = new Observer();
	//navMenu = new NavMenuUI();
	gameBoard = new BoardUI(document.getElementById("ttt_board"));
	
	//UI_Observer.add(navMenu);
	UI_Observer.add(gameBoard);
});
