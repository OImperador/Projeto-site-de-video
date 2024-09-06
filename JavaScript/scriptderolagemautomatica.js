function rolarAutomaticamente(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Ajuste a velocidade da rolagem
    const delay = 10; // Ajuste o intervalo de rolagem

    function rolar() {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (scrollAmount >= scrollWidth - clientWidth) {
            scrollAmount = 0; // Reinicia a rolagem
        } else {
            scrollAmount += scrollStep;
        }

        container.scrollLeft = scrollAmount;
    }

    setInterval(rolar, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    rolarAutomaticamente('lancamentoContainer');
    rolarAutomaticamente('posterContainer');
    rolarAutomaticamente('seriesContainer');
});