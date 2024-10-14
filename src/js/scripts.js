document.addEventListener('DOMContentLoaded', () => {
    const pageUrls = {
        home: './index.html',
        sobreNos: './pages/error.html',
        psicologos: './pages/error.html',
        empresas: './pages/error.html',
        suporte: './pages/error.html'
    };

    document.querySelector('.home1').addEventListener('click', () => {
        window.location.href = pageUrls.home;
    });

    document.querySelector('.sobre-ns').addEventListener('click', () => {
        window.location.href = pageUrls.sobreNos;
    });

    document.querySelector('.psiclogos').addEventListener('click', () => {
        window.location.href = pageUrls.psicologos;
    });

    document.querySelector('.empresas').addEventListener('click', () => {
        window.location.href = pageUrls.empresas;
    });

    document.querySelector('.suporte').addEventListener('click', () => {
        window.location.href = pageUrls.suporte;
    });
});