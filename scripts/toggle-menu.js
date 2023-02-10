(function () {
    "use strict";
    // Skapa knappen som visar/döljer menyn
    $(".tagline").html("<button>Visa menyn</button>");
    // Lagra åtkomst till knappen i en variabel
    var button = $(".tagline > button");
    // Lagra åtkonst till menyn i en variabel
    var menu = $(".menu");
    // När någon klickar på knappen
    button.click(function(){
        if (menu.hasClass("show")) {
    // Om menyn redan visas
            menu.removeClass("show");
    // Ska den döljas
            button.html("Visa menyn");
    // Och ändra knappens text
        } else {
    // Annars ska den visas
            menu.addClass("show");
    // Och knappens text ändras       
            button.html("Dölj menyn");
        }
    })   
}());
