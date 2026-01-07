// busca.js

// --- 1. FONTE DE DADOS ---
// Adicione ou remova documentos nesta lista.
// O 'url' deve ser o caminho correto para o arquivo na pasta 'docs'.
const documentos = [
    {
        titulo: 'Carta convocatória - ASSEMBLEIA PAROQUIAL DE PASTORAL 2026',
        descricao: 'Convocação para a Assembleia Paroquial de Pastoral a ser realizada no dia 11 de janeiro de 2026.',
        categoria: 'Informativo',
        url: 'pdfs/Carta_Convocatoria_Assembleia_Paroquial_2026.pdf'
    },
    {
        titulo: 'Horários de Missas nas Capelas',
        descricao: 'Tabela atualizada com os horários das celebrações nas Capelas.',
        categoria: 'Informativo',
        url: 'logos-fotos/AGENDAmensalCOMUNIDADES.jpeg'
    },
    {
        titulo: 'Notícias P.N.S.C.',
        descricao: 'Boletim mensal com as principais notícias e eventos da Paróquia Nossa Senhora da Conceição.',
        categoria: 'Informativo',
        url: 'https://pnsconceicao.github.io/matriz/noticias.html'
    },
    {
        titulo: 'Vatican News',
        descricao: 'Notícias oficiais da Igreja Católica diretamente do Vaticano.',
        categoria: 'Informativo',
        url: 'https://www.vaticannews.va/pt.html'
    },
    {
        titulo: 'Diocese de Cajazeiras',
        descricao: 'Site oficial da Diocese de Cajazeiras, com notícias, eventos e informações institucionais.',
        categoria: 'Tecnologia',
        url: 'https://diocesedecajazeiras.com.br'
    },
    {
        titulo: 'Catecismo da Igreja Católica',
        descricao: 'Compêndio oficial e completo da doutrina católica. Essencial para estudo.',
        categoria: 'Doutrina',
        url: 'https://www.vatican.va/archive/cathechism_po/index_new/prima-pagina-cic_po.html'
    },
    {
        titulo: 'Bíblia Católica',
        descricao: 'A Bíblia Sagrada na versão católica diretamente do site oficial do Vaticano.',
        categoria: 'Doutrina',
        url: 'https://www.vatican.va/archive/bible/index_po.htm'
    },
    {
        titulo: 'Códigos de Direito Canônico',
        descricao: 'Códigos oficiais que regem a Igreja Católica, essenciais para estudiosos.',
        categoria: 'Doutrina',
        url: 'https://www.vatican.va/archive/cdc/index_po.htm'
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