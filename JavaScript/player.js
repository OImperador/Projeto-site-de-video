function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const videoLink = getParameterByName('video');

    if (videoLink) {

        document.getElementById('videoPlayer').src = videoLink;
        document.getElementById('message').style.display = 'none'; 
    } else {

        document.getElementById('videoPlayer').style.display = 'none'; 
        document.getElementById('message').textContent = "Nenhum vídeo encontrado!";
    }
});
