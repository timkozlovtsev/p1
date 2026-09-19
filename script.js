let switchButton = document.getElementById("switch-ar-button");
let mvContainer = document.getElementById("mv-container");
let aFrameContainer = document.getElementById("aframe-container");
let aFrameUis = document.getElementsByClassName("test");

mvContainer.style.display = "flex";
aFrameContainer.style.display = "none";
aFrameUis.forEach(element => {
    element.style.display = "none";
});

switchButton.addEventListener("click", () => {
    if (mvContainer.style.display !== "none") {
        mvContainer.style.display = "none";
        aFrameContainer.style.display = "flex";
        aFrameUis.forEach(element => {
            element.style.display = "block";
        });
    }
    else {
        mvContainer.style.display = "flex";
        aFrameContainer.style.display = "none";
        aFrameUis.forEach(element => {
            element.style.display = "none";
        });
    }
});