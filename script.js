document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const siteNav = document.getElementById('siteNav');
    const buildBtn = document.getElementById('buildBtn');

    let isDarkMode = false;

    themeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        const root = document.documentElement;

        if (isDarkMode) {
            root.style.setProperty('--color-primary', '#3B82F6');
            root.style.setProperty('--color-accent', '#38BDF8');
            root.style.setProperty('--color-bg', '#0B1120');
            root.style.setProperty('--color-section', '#0F172A');
            root.style.setProperty('--color-card', '#172033');
            root.style.setProperty('--color-sidebar', '#111827');
            root.style.setProperty('--color-header', '#08111F');
            root.style.setProperty('--color-focus', '#F8FAFC');
            root.style.setProperty('--color-text', '#E5E7EB');
            root.style.setProperty('--color-muted', '#CBD5E1');
            root.style.setProperty('--color-border', '#26364F');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            root.style.setProperty('--color-primary', '#2563EB');
            root.style.setProperty('--color-accent', '#0EA5E9');
            root.style.setProperty('--color-bg', '#F8FAFC');
            root.style.setProperty('--color-section', '#F1F5F9');
            root.style.setProperty('--color-card', '#FFFFFF');
            root.style.setProperty('--color-sidebar', '#E2E8F0');
            root.style.setProperty('--color-header', '#0F172A');
            root.style.setProperty('--color-focus', '#1E3A5F');
            root.style.setProperty('--color-text', '#1E293B');
            root.style.setProperty('--color-muted', '#64748B');
            root.style.setProperty('--color-border', '#CBD5E1');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });

    hamburgerBtn.addEventListener('click', () => {
        siteNav.classList.toggle('active');
    });

    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('active');
        });
    });

    buildBtn.addEventListener('click', () => {
        alert('🚀 Workspace initialized! Open your IDE, load index.html, and begin crafting your responsive layout according to DecodeLabs standards.');
    });
});

