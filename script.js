// Изменение цвета заголовка
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0', '#00BCD4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.querySelector('header').style.backgroundColor = randomColor;
    this.textContent = 'Repeat';
    
    // Анимация кнопки
    this.classList.add('animate__animated', 'animate__rubberBand');
    this.addEventListener('animationend', () => {
        this.classList.remove('animate__animated', 'animate__rubberBand');
    });
});

// Кнопка "Магия!"
document.getElementById('magicBtn').addEventListener('click', function() {
    // Анимация всех элементов features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.classList.add('animate__animated', 'animate__tada');
            feature.addEventListener('animationend', () => {
                feature.classList.remove('animate__animated', 'animate__tada');
            });
        }, index * 200);
    });
    
    // Анимация заголовка
    const header = document.querySelector('header');
    header.classList.add('animate__animated', 'animate__swing');
    header.addEventListener('animationend', () => {
        header.classList.remove('animate__animated', 'animate__swing');
    });
    
    // Смена текста
    this.textContent = ['吸吮它', 'Suce-le!', 'Suck it!', 'Succhialo!'][Math.floor(Math.random() * 4)];
});

// Плавное появление при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Появление плавающей кнопки
    setTimeout(() => {
        document.querySelector('.floating-button').classList.add('visible');
    }, 2000);
});

// Прокрутка вверх
document.querySelector('.floating-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Анимация кнопки
    const btn = document.querySelector('.floating-button');
    btn.classList.add('animate__animated', 'animate__bounce');
    btn.addEventListener('animationend', () => {
        btn.classList.remove('animate__animated', 'animate__bounce');
    });
});

// Анимация при скролле
window.addEventListener('scroll', () => {
    const floatingBtn = document.querySelector('.floating-button');
    if (window.scrollY > 300) {
        floatingBtn.classList.add('visible');
    } else {
        floatingBtn.classList.remove('visible');
    }
});

// Анимация навигационных ссылок
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.classList.add('animate__animated', 'animate__pulse');
    });
    
    link.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('animate__animated', 'animate__pulse');
    });
});

// Анимация галереи при появлении в viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__zoomIn');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});