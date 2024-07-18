document.querySelector(".ri-menu-line").addEventListener("click", function (e) {

    if (document.querySelector("nav").style.display === "none" && document.querySelector("nav").style.display != "flex") {
        document.querySelector("nav").style.display = "flex"
        document.querySelector(".container").style.minHeight = "170vw"
    } else {
        document.querySelector("nav").style.display = "none"
        document.querySelector(".container").style.minHeight = "60vw"

    }
})
// console.log(document.querySelector("#menu"))