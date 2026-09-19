let switchButton = document.getElementById("switch-ar-button");
let mvContainer = document.getElementById("mv-container");
let aFrameContainer = document.getElementById("aframe-container");
let aFrameUis = Array.from(document.getElementsByClassName("mindar-ui-overlay"));

mvContainer.style.display = "flex";
aFrameContainer.style.display = "none";

switchButton.addEventListener("click", () => {
    if (mvContainer.style.display !== "none") {
        mvContainer.style.display = "none";
        aFrameContainer.style.display = "flex";
    }
    else {
        mvContainer.style.display = "flex";
        aFrameContainer.style.display = "none";
    }
});