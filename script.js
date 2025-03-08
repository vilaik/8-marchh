// Создание элементов цветов для анимации
function createFlowers() {
    const flowerContainer = document.getElementById('flowers');
    const flowerCount = 30;
    const flowerSymbols = ['🌸', '🌷', '🌹', '💐', '🌺'];
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        
        // Случайный символ цветка
        const flowerSymbol = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        flower.innerHTML = flowerSymbol;
        
        // Случайный размер
        const size = Math.random() * 20 + 20;
        flower.style.fontSize = size + 'px';
        
        // Случайная позиция
        flower.style.left = Math.random() * 100 + 'vw';
        
        // Случайная скорость
        const duration = Math.random() * 20 + 15;
        flower.style.animationDuration = duration + 's';
        
        // Случайная задержка
        flower.style.animationDelay = Math.random() * 10 + 's';
        
        flowerContainer.appendChild(flower);
    }
}

// Настройка аудио-плеера
function setupMusicPlayer() {
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const audio = document.getElementById('myAudio');
    let isPlaying = false;
    
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playIcon.className = 'fas fa-play';
            isPlaying = false;
        } else {
            audio.play();
            playIcon.className = 'fas fa-pause';
            isPlaying = true;
        }
    });
}

// Плавная прокрутка для якорных ссылок
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    createFlowers();
    setupMusicPlayer();
    setupSmoothScroll();
});
