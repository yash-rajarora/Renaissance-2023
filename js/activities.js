document.getElementById("show-tech").addEventListener("click", function() {
    document.getElementById("tech").className = "visible-section";
    document.getElementById("cultural").className = "hidden-section";
    document.getElementById("splash").className = "hidden-section";
});

document.getElementById("show-cultural").addEventListener("click", function() {
    document.getElementById("tech").className = "hidden-section";
    document.getElementById("cultural").className = "visible-section";
    document.getElementById("splash").className = "hidden-section";

});
document.getElementById("show-splash").addEventListener("click", function() {
    document.getElementById("tech").className = "hidden-section";
    document.getElementById("cultural").className = "hidden-section";
    document.getElementById("splash").className = "visible-section";
});