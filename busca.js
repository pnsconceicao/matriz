// busca.js

// --- 1. FONTE DE DADOS ---
// Adicione ou remova documentos nesta lista.
// O 'url' deve ser o caminho correto para o arquivo na pasta 'docs'.
const documentos = [
    {
        titulo: 'Diretório Litúrgico 2025',
        descricao: 'Orientações e calendário para as celebrações litúrgicas do ano de 2025.',
        categoria: 'Liturgia',
        url: 'docs/diretorio-liturgico-2025.pdf'
    },
    {
        titulo: 'Formulário de Inscrição para Batismo',
        descricao: 'Ficha cadastral para pais e padrinhos que desejam batizar uma criança.',
        categoria: 'Sacramentos',
        url: 'docs/formulario-batismo.pdf'
    },
    {
        titulo: 'Formulário de Inscrição para Crisma',
        descricao: 'Ficha cadastral para jovens e adultos que desejam receber o sacramento da Crisma.',
        categoria: 'Sacramentos',
        url: 'docs/formulario-crisma.pdf'
    },
    {
        titulo: 'Catecismo da Igreja Católica',
        descricao: 'Compêndio oficial e completo da doutrina católica. Essencial para estudo.',
        categoria: 'Doutrina',
        url: 'https://www.vatican.va/archive/cathechism_po/index_new/prima-pagina-cic_po.html'
    },
    {
        titulo: 'Horários de Missas e Confissões',
        descricao: 'Tabela atualizada com os horários das celebrações na Matriz e Capelas.',
        categoria: 'Informativo',
        url: 'logos-fotos/AGENDAmensalCOMUNIDADES.jpeg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');

    // --- 2. FUNÇÃO PARA RENDERIZAR OS DOCUMENTOS ---
    function renderizarDocumentos(docsParaRenderizar) {
        // Limpa os resultados anteriores
        resultsContainer.innerHTML = '';

        if (docsParaRenderizar.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhum documento encontrado.</p>';
            return;
        }

        docsParaRenderizar.forEach(doc => {
            const docElement = document.createElement('a');
            docElement.href = doc.url;
            docElement.target = '_blank'; // Abre em nova aba
            docElement.classList.add('document-card');

            docElement.innerHTML = `
                <h4>${doc.titulo}</h4>
                <p>${doc.descricao}</p>
                <span class="category-tag">${doc.categoria}</span>
            `;
            resultsContainer.appendChild(docElement);
        });
    }

    // --- 3. EVENTO DE BUSCA AO VIVO ---
    searchInput.addEventListener('input', (event) => {
        const termoBusca = event.target.value.toLowerCase();

        const resultadosFiltrados = documentos.filter(doc => {
            return doc.titulo.toLowerCase().includes(termoBusca);
        });

        renderizarDocumentos(resultadosFiltrados);
    });

    // --- Renderiza todos os documentos ao carregar a página ---
    renderizarDocumentos(documentos);
});