const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});