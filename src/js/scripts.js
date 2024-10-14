document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sesso-2-por-que-fazer-terap");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function handleScroll() {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible");
          section.style.opacity = "1";
          section.style.transform = "translateX(0)";
        } else {
          section.classList.remove("visible");
          section.style.opacity = "0";
          section.style.transform = "translateX(-50px)";
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateX(-50px)";
      section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    });

    handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sesso-3-como-funciona-terap");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function handleScroll() {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible");
          section.style.opacity = "1";
          section.style.transform = "translateX(0)";
        } else {
          section.classList.remove("visible");
          section.style.opacity = "0";
          section.style.transform = "translateX(50px)";
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateX(50px)";
      section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    });

    handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".card-1, .card-2, .card-3, .card-4, .card-5, .card-6, .sesso-5-comeando-minha-ter");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function handleScroll() {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible");
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        } else {
          section.classList.remove("visible");
          section.style.opacity = "0";
          section.style.transform = "translateY(-50px)";
        }
      });
    }
    window.addEventListener("scroll", handleScroll);
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(-50px)";
      section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    });
    handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sesso-5-comeando-minha-ter, .sesso-6-assinatura");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function handleScroll() {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible");
          section.style.opacity = "1";
        } else {
          section.classList.remove("visible");
          section.style.opacity = "0";
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
  
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transition = "opacity 1s ease-in-out";
    });
    handleScroll();
  });

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