document.addEventListener('DOMContentLoaded', function() {
    const teamCarousel = document.querySelector('#teamMembersCarousel > div');
    const teamPrevBtn = document.querySelector('#teamPrevBtn');
    const teamNextBtn = document.querySelector('#teamNextBtn');
    let teamCurrentIndex = 0;
    const teamTotalSlides = document.querySelectorAll('#teamMembersCarousel > div > div').length;

    function updateTeamCarousel() {
        teamCarousel.style.transform = `translateX(-${teamCurrentIndex * 100}%)`;
    }

    function updateTeamButtonVisibility() {
        teamPrevBtn.classList.toggle('hidden', teamCurrentIndex === 0);
        teamNextBtn.classList.toggle('hidden', teamCurrentIndex === teamTotalSlides - 1);
    }

    teamPrevBtn.addEventListener('click', () => {
        if (teamCurrentIndex > 0) {
            teamCurrentIndex--;
            updateTeamCarousel();
            updateTeamButtonVisibility();
        }
    });

    teamNextBtn.addEventListener('click', () => {
        if (teamCurrentIndex < teamTotalSlides - 1) {
            teamCurrentIndex++;
            updateTeamCarousel();
            updateTeamButtonVisibility();
        }
    });

    // Initialize button visibility
    updateTeamButtonVisibility();
});
