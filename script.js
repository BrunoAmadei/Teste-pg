const catalog = document.querySelector('.catalog');
const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let currentPage = 0;

function flipPage(direction) {
    if (direction === 'next' && currentPage < pages.length - 1) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage--;
    }

    catalog.style.transform = `rotateY(${currentPage * -180}deg)`;
}

prevButton.addEventListener('click', () => flipPage('prev'));
nextButton.addEventListener('click', () => flipPage('next'));
