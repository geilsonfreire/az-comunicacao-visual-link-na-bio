 const cards = document.querySelectorAll('.card-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        const el = entry.target;

        // Delay progressivo (efeito cascata)
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-10');
          el.classList.add('opacity-100', 'translate-y-0');
        }, index * 150);

        observer.unobserve(el); // anima só uma vez
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach((card) => observer.observe(card));
