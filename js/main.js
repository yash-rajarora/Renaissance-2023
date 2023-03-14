drawer = document.getElementById("drawer");
overlay = document.getElementById("mobile-body-overly");
document
    .getElementById("drawer-toggler")
    .addEventListener("click", function () {
        if (drawer.attributes.expanded.value == "false") {
            drawer.classList.remove("drawer-inactive");
            overlay.style = "display:block";
            drawer.classList.add("drawer-active");
            drawer.attributes.expanded.value = "true";
        }
    });

document
    .getElementById("drawer-close-btn")
    .addEventListener("click", function () {
        if (drawer.attributes.expanded.value == "true") {
            drawer.classList.add("drawer-inactive");
            overlay.style = "display:none";
            drawer.classList.remove("drawer-active");
            drawer.attributes.expanded.value = "false";
        }
    });
document
    .getElementById("mobile-body-overly")
    .addEventListener("click", function () {
        if (drawer.attributes.expanded.value == "true") {
            drawer.classList.add("drawer-inactive");
            overlay.style = "display:none";
            drawer.classList.remove("drawer-active");
            drawer.attributes.expanded.value = "false";
        }
    });