function toggleMenuDrop(){
	"use strict";
	var mobileMenu = document.getElementById("mobile_menu");
	if(mobileMenu.className === ""){
		mobileMenu.className += "hidden";
	}else{
		mobileMenu.className = "";
	}
}