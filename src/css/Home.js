document.addEventListener("DOMContentLoaded", () => {
    var x = document.getElementById("background")
    var bar = document.getElementById("navbar")
    bar.hidden = true;
    show(x, bar);


})

function show(x, y) {
    console.log(x)
    console.log(y)
    x.addEventListener("webkitAnimationEnd", () => {

        y.hidden = false;
    })

}





