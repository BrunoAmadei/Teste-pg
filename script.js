const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let currentPage = 0;

function flipPage(direction) {
    const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (nextPage >= 0 && nextPage < pages.length) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        pages[nextPage].style.transform = 'rotateY(0deg)';
        currentPage = nextPage;
    }
}

prevButton.addEventListener('click', () => flipPage('prev'));
nextButton.addEventListener('click', () => flipPage('next'));
