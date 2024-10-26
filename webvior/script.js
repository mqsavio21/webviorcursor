document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('top-16');
        menu.classList.toggle('left-0');
        menu.classList.toggle('right-0');
        menu.classList.toggle('bg-white');
        menu.classList.toggle('shadow-md');
        menu.classList.toggle('p-4');
        menu.classList.toggle('z-50');
    });

    // Teams Carousel functionality
    const teamsCarousel = document.querySelector('#teamsCarousel > div');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let currentIndex = 0;
    const totalSlides = 3;

    function updateTeamsCarousel() {
        teamsCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function updateTeamsButtonVisibility() {
        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex === totalSlides - 1);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTeamsCarousel();
            updateTeamsButtonVisibility();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateTeamsCarousel();
            updateTeamsButtonVisibility();
        }
    });

    // Initialize button visibility
    updateTeamsButtonVisibility();

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.querySelector('#scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
