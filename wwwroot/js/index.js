window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
        navbar.className = "navbar" + " navbar-scrolled";
    } else {
        navbar.className = navbar.className.replace(" navbar-scrolled", "");
    }
}