const currentPage = window.location.pathname.split('/').pop();
const buttons = document.querySelectorAll('.btn-acess');

buttons.forEach(btn => {
    if (btn.dataset.link === currentPage) {
        btn.classList.add('active');
    }
});