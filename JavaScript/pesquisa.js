document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultadosContainer = document.getElementById('resultadosContainer');

    // Função para exibir resultados
    function mostrarResultados(termoDePesquisa) {
        resultadosContainer.innerHTML = ""; // Limpa resultados anteriores

        if (termoDePesquisa.trim() === "") {
            resultadosContainer.classList.remove('show'); // Esconder se o campo estiver vazio
            return;
        }

        const filmesEncontrados = filtrarFilmes(termoDePesquisa);
        const seriesEncontradas = filtrarSeries(termoDePesquisa);

        if (filmesEncontrados.length > 0 || seriesEncontradas.length > 0) {
            filmesEncontrados.concat(seriesEncontradas).forEach(item => {
                resultadosContainer.appendChild(criarElementoResultado(item));
            });
            resultadosContainer.classList.add('show'); // Mostrar o contêiner de resultados
        } else {
            resultadosContainer.classList.remove('show'); // Esconder se nada for encontrado
        }
    }

    // Exibe os resultados quando o campo de pesquisa é alterado
    searchInput.addEventListener('input', function() {
        mostrarResultados(this.value.toLowerCase());
    });

    // Exibe os resultados quando a tecla Enter é pressionada
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            mostrarResultados(this.value.toLowerCase());
            event.preventDefault(); // Evita o envio de formulários
        }
    });

    // Exibe os resultados quando o botão de pesquisa é clicado
    searchButton.addEventListener('click', function() {
        mostrarResultados(searchInput.value.toLowerCase());
    });

    // Oculta os resultados quando clica fora da área de pesquisa
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.pesquisa-container')) {
            resultadosContainer.classList.remove('show');
        }
    });

    // Função para criar o elemento de resultado
    function criarElementoResultado(item) {
        const div = document.createElement('div');
        div.className = 'resultado-item';

        const img = document.createElement('img');
        img.src = item.poster; // URL do poster
        img.alt = item.titulo; // Texto alternativo

        const p = document.createElement('p');
        p.textContent = item.titulo; // Título do filme ou série

        div.appendChild(img);
        div.appendChild(p);

        return div;
    }

    // Função fictícia para filtrar filmes - substitua com a lógica real
    function filtrarFilmes(termo) {
        // Simulação de dados - substitua com dados reais
        const filmes = [
            { titulo: 'A Hora do Rush', poster: 'https://example.com/a-hora-do-rush.jpg' },
            { titulo: 'O Poderoso Chefão', poster: 'https://example.com/o-poderoso-chefao.jpg' }
        ];
        return filmes.filter(filme => filme.titulo.toLowerCase().includes(termo));
    }

    // Função fictícia para filtrar séries - substitua com a lógica real
    function filtrarSeries(termo) {
        // Simulação de dados - substitua com dados reais
        const series = [
            { titulo: 'Breaking Bad', poster: 'https://example.com/breaking-bad.jpg' },
            { titulo: 'American Horror Story', poster: 'https://www.google.com/imgres?q=american%20horror%20story%20poster&imgurl=https%3A%2F%2Fuauposters.com.br%2Fmedia%2Fcatalog%2Fproduct%2F3%2F7%2F377320211103-uau-posters-american-horror-story-murder-house-historia-de-horror-americana-ahs-series.jpg&imgrefurl=https%3A%2F%2Fuauposters.com.br%2F377320211103-uau-posters-american-horror-story-murder-house-historia-de-horror-americana-ahs-series&docid=MdL-Yvk1U7RkMM&tbnid=3zlDpY7F8OXjvM&vet=12ahUKEwiS7u3e-7GIAxUXr5UCHYJVFzIQM3oECD4QAA..i&w=600&h=900&hcb=2&ved=2ahUKEwiS7u3e-7GIAxUXr5UCHYJVFzIQM3oECD4QAA'}
        ];
        return series.filter(serie => serie.titulo.toLowerCase().includes(termo));
    }
});