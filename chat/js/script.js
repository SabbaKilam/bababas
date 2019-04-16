//=====| references and data |=============//
let chatTextArea = id(`chatTextArea`);
let inputAssembly = id(`chatInputAssembly`);

//=====| setup event listeners |==========/
chatTextArea.addEventListener(`focus`, raiseInputAssembly);
chatTextArea.onblur = lowerInputAssembly;




//=====| event handlers |================//
function raiseInputAssembly(){
	inputAssembly.style.bottom = "60%";
	window.scrollTo(0,document.body.scrollHeight);	
}
/////
function lowerInputAssembly(){
	inputAssembly.style.bottom = "0";
	window.scrollTo(0,document.body.scrollHeight);	
}

//=====| other functions |================//
function id(idString){
	return document.getElementById(idString);
}




//======|initialization |===================//