const series = [{
    titulo: "Breaking Bad",
    poster: "data:image/jpeg;base64,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", 
    link: "https://superflixapi.dev/serie/1396"},{
    titulo: "American Horror Story",  
    poster: "data:image/jpeg;base64,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", 
    link: "https://superflixapi.dev/serie/1413",
}];

function gerarSeries() {
    const container = document.getElementById('seriesContainer');
    series.forEach(serie => {
        const linkElement = document.createElement('a');
        linkElement.href = `player02.html?video=${encodeURIComponent(serie.link)}`;
        linkElement.target = "_blank"; 

        const imgElement = document.createElement('img');
        imgElement.src = serie.poster; 
        imgElement.alt = `Poster de ${serie.titulo}`;
        imgElement.classList.add('poster');

        linkElement.appendChild(imgElement);
        container.appendChild(linkElement);
    });
}

document.addEventListener('DOMContentLoaded', gerarSeries());
