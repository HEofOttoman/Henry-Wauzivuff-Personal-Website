

function createStars() {
    const container = document.body
    for (let i = 0; i <150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = `${Math.random() * 3}px`
        star.style.left = `${Math.random() * 100}vh`;
        star.style.top `${Math.random() * 100}vw`
        star.style.animationDelay = `${Math.random() * 2}s`
        container.appendChild(star);
    }
}

// Thing to create project gallery panels
function createGallery() {
    const container = document.body;
    return;
}