document.querySelectorAll('.slider-image').forEach(image => {
    image.addEventListener('click', () => {
        const slider = document.querySelector('.slider');
        slider.style.animationPlayState = 'paused';
        setTimeout(() => {
            slider.style.animationPlayState = 'running';
        }, 2000); // Pause for 2 seconds
    });
});

function handleImageClick(url) {
    const slider = document.querySelector('.slider');
    slider.style.animationPlayState = 'paused';
    setTimeout(() => {
        window.location.href = url;
        slider.style.animationPlayState = 'running';
    }, 500); // Pause for 5 seconds
}

