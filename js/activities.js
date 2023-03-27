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
document.getElementById("show-day1").addEventListener("click", function() {
    document.getElementById("day1").className = "visible-section";
    document.getElementById("day2").className = "hidden-section";
    document.getElementById("day3").className = "hidden-section";
});

document.getElementById("show-day2").addEventListener("click", function() {
    document.getElementById("day1").className = "hidden-section";
    document.getElementById("day2").className = "visible-section";
    document.getElementById("day3").className = "hidden-section";

});
document.getElementById("show-day3").addEventListener("click", function() {
    document.getElementById("day1").className = "hidden-section";
    document.getElementById("day2").className = "hidden-section";
    document.getElementById("day3").className = "visible-section";
});
document.getElementById("show-day01").addEventListener("click", function() {
    document.getElementById("day01").className = "visible-section";
    document.getElementById("day02").className = "hidden-section";
    document.getElementById("day03").className = "hidden-section";
});

document.getElementById("show-day02").addEventListener("click", function() {
    document.getElementById("day01").className = "hidden-section";
    document.getElementById("day02").className = "visible-section";
    document.getElementById("day03").className = "hidden-section";

});
document.getElementById("show-day03").addEventListener("click", function() {
    document.getElementById("day01").className = "hidden-section";
    document.getElementById("day02").className = "hidden-section";
    document.getElementById("day03").className = "visible-section";
});
document.getElementById("show-day001").addEventListener("click", function() {
    document.getElementById("day001").className = "visible-section";
    document.getElementById("day002").className = "hidden-section";
    document.getElementById("day003").className = "hidden-section";
});

document.getElementById("show-day002").addEventListener("click", function() {
    document.getElementById("day001").className = "hidden-section";
    document.getElementById("day002").className = "visible-section";
    document.getElementById("day003").className = "hidden-section";

});
document.getElementById("show-day003").addEventListener("click", function() {
    document.getElementById("day001").className = "hidden-section";
    document.getElementById("day002").className = "hidden-section";
    document.getElementById("day003").className = "visible-section";
});