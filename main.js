function discord() {
	navigator.clipboard.writeText("Huday#0001");
	const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}