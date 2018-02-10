var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "https://zakiya123.github.io/profile/Assets/profile-pic.jpg",
    "https://zakiya123.github.io/profile/Assets/background.jpg"
)

$(function(){
    setTimeout(function() {
        $("body").addClass("animate");
        
    }, 1000)
});