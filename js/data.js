console.log("javascript is loaded!");

let fire = $("#fires");
let moxi = $("#housing");
let fridge = $("#fridge");

let dataInteractive = $(".interactive li");
dataInteractive.css("cursor", "pointer");
dataInteractive.addClass("list-group-item");
let fireTrigger = $("#firesTrigger");
fireTrigger.addClass("activeLink");
moxi.css("display", "none");
fridge.css("display", "none");

dataInteractive.on("click", function(event){
    event.preventDefault(); // stop the page from jumping to the #anchor
    let clickedLink = $(this);
    if(!clickedLink.hasClass("activeLink")) {
        let previousActive = $(".interactive li.activeLink");
        previousActive.removeClass("activeLink");
        clickedLink.addClass("activeLink");

        let dataSectionId = clickedLink.attr("id").replace("Trigger", "");
        let otherProjects = $(".project:not(#" + dataSectionId + ")");
        otherProjects.css("display", "none");
        $("#" + dataSectionId).show("fast");
    }
});



let images = $('.image');
images.css("cursor", "pointer");
images.attr("data-bs-toggle", "modal");
images.attr("data-bs-target", "#imgModal");
let modal = $("#imgModal");
modal.on("show.bs.modal", function(event) {
    let imageSelected = $(event.relatedTarget);
    
    let imageSrc = imageSelected.attr("src");
    let imageAlt = imageSelected.attr("alt");
    let legendSrc = "";
    let legendAlt = "";
    if(imageSelected.hasClass("legendImage")) {
        let imageSelected1 = $(".legendImage img:first-child");
        let imageSelected2 = $(".legendImage .legend");
        imageSrc = imageSelected1.attr("src");
        imageAlt = imageSelected1.attr("alt");  
        legendSrc = imageSelected2.attr("src");
        legendAlt = imageSelected2.attr("alt");
        console.log("legend image clicked!");  
    } 

    $("#modalImage").attr("src", imageSrc);
    $("#modalImage").attr("alt", imageAlt);
    let legendImg = $("#modalImageLegend");
    if (legendSrc) {
        legendImg.attr("src", legendSrc).attr("alt", legendAlt).show();
    } else {
        // no legend for this chart: hide the element instead of leaving an empty src
        legendImg.removeAttr("src").attr("alt", "").hide();
    }


});