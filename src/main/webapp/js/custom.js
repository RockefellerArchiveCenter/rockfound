/*Function to have the menu button drop down and slideup the mobile menu */
$(document).ready(function(){

   $("#nav-trigger span").click(function(){
        $("ul.mobile-nav-menu").toggle("fast" );
    }); 
});



/* Script to look at the number of child elements for the navigation menu and adjust width accordingly*/
/*function NavResize(){
    var numNavItems = $("ul.navigation-bar").find("li.dropdown").length;
    var navWidth = (100/numNavItems) + "%";
    //comment these out when you do not need to test their implementation
    //console.log(numNavItems);
    //console.log("width is :" + navWidth);
    $("ul.navigation-bar").find("li.dropdown").css("width", navWidth);
}

window.addEventListener("load", NavResize);*/