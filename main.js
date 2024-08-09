function discord() {
	navigator.clipboard.writeText("huday");
	const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
