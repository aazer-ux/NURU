// ===== MENU BURGER =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Anime les 3 barres du burger
        const spans = burger.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('open')
            ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('open')
            ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
            burger.querySelectorAll('span').forEach(s => {
                s.style.transform = '';
                s.style.opacity = '1';
            });
        }
    });
}

// ===== NAVBAR : fond visible au scroll =====
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.background = 'rgba(255,255,255,1)';
            navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.97)';
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        }
    });
}

// ===== ANIMATION D'APPARITION DES CARTES =====
const cards = document.querySelectorAll('.card');

if (cards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        observer.observe(card);
    });
}