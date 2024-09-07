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

    function criarElementoResultado(item) {
        const div = document.createElement('div');
        div.className = 'resultado-item';

        const img = document.createElement('img');
        img.src = item.poster; // URL do poster
        img.alt = item.titulo; // Texto alternativo

        const p = document.createElement('p');
        p.textContent = item.titulo; // Título do filme ou série

       