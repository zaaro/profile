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

var images_loaded = images.map(img => {
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(true)
        img.onerror = () => reject('Image loading failed')
    })
})

$(function(){
    Promise.all(images_loaded).then(() => {
        setTimeout(() => {
            $("body").addClass("animate");
        }, 2000)
    })
});