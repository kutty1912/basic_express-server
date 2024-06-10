document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save the user's preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load the user's preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
