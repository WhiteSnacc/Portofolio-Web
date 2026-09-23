document.querySelectorAll('[data-helpy-widget]').forEach((widget) => {
    const toggleButton = widget.querySelector('[data-helpy-toggle]');
    const closeButton = widget.querySelector('[data-helpy-close]');

    toggleButton.addEventListener('click', () => {
        widget.classList.toggle('is-minimized');
    });

    closeButton.addEventListener('click', () => {
        widget.remove();
    });
});