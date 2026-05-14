// Floating hearts
setInterval(() => {

    const heart = document.createElement('div');

    heart.innerHTML = '💗';

    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);