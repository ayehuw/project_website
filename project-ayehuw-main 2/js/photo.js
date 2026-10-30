console.log("js loaded!");



// only the gallery photos open the modal (not the enlarged image inside it)
let images = $('.photos-flex img');
images.css("cursor", "pointer");
images.attr("data-bs-toggle", "modal");
images.attr("data-bs-target", "#imgModal");
let modal = $("#imgModal");
modal.on("show.bs.modal", function(event) {
    let imageSelected = $(event.relatedTarget);
    let imageSrc = imageSelected.attr("src");
    let imageAlt = imageSelected.attr("alt");
    $("#modalImage").attr("src", imageSrc);
    $("#modalImage").attr("alt", imageAlt);
});
 
$("nav.photo").addClass("interactive");


$(".country:not(#usparks)").css("display", "none");
$("#usparksTrigger").addClass("activeLink");

let photoNav = $(".photo li");
photoNav.css("cursor", "pointer");
photoNav.on("click", function(event) {
    event.preventDefault(); // stop the page from jumping to the #anchor
    let clickedLink = $(this);
    
    if(!clickedLink.hasClass("activeLink")) {
        let previousActive = $(".photo li.activeLink");
        previousActive.removeClass("activeLink");
        clickedLink.addClass("activeLink");

        let photoSectionId = clickedLink.attr("id").replace("Trigger", "");
        let otherCountries = $(".country:not(#" + photoSectionId + ")");
        otherCountries.css("display", "none");
        $("#" + photoSectionId).show("fast");
    }
});