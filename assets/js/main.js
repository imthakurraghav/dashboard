let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".aside");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
});

let menuitem = document.querySelector(".iconup");
let menulinks = document.querySelector(".navbar");

menuitem.addEventListener("click", () => {
	menulinks.classList.toggle("remove");
});

// tabs
function openTab(evt, detailList) {
	var i, x, tablinks;
	x = document.getElementsByClassName("tabcontent");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-button");
	for (i = 0; i < x.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(detailList).style.display = " block";
	evt.currentTarget.className += " active";
  }
