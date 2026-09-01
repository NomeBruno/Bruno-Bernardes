
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon i');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.className = isLight ? 'ti ti-sun' : 'ti ti-moon';
});

const sidebarButtons = document.querySelectorAll('.sidebar-menu .icon');

sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            sidebarButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cards-grid article');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            card.classList.remove('animate-in');

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hide');
                
                void card.offsetWidth;
                
                card.classList.add('animate-in');
            } else {
                card.classList.add('hide');
            }
        });
    });
});