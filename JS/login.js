// javascript of login form
var modal = document.getElementById('login_form');
// when user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display: "none";
	}
}