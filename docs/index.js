const viewer = document.getElementsByClassName('viewer')[0];

function onImageClick(image) {
    viewer.src = image.src;
}