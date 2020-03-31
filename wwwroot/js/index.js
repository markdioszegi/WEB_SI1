window.onscroll = function () {
    var navbar = document.getElementById("myNavbar");
    navbarChange(navbar)
    showContent(navbar)
};

function navbarChange(navbar) {
    if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
        navbar.className = "navbar" + " navbar-scrolled";
    } else {
        navbar.className = navbar.className.replace(" navbar-scrolled", "");
    }
}


function showContent(navbar) {
    var mainContent = document.getElementById("mainContent");
    if (document.body.scrollTop > navbar.offsetHeight / 1.5) {

    }
    //console.log(bounding);
}