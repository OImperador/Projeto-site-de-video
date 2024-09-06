function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const videoLink = getParameterByName('video');

if (videoLink) {
    document.getElementById('videoPlayer').src = videoLink;
} else {
    document.getElementById('videoPlayer').textContent = "Nenhum vídeo encontrado!";
}
