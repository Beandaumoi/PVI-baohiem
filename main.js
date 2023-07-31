const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
}
new Glide('.glide', config).mount()

const openTitles = document.querySelectorAll('.content-introduce-each-col')

for (const openTitle of openTitles) {
    function activeArrow() {
        openTitle.classList.add('active')
    }
    function unActiveArrow() {
        openTitle.classList.remove('active')
    }
    openTitle.addEventListener('click', (event) => {
        const wasActive = openTitle.classList.contains('active');
        openTitles.forEach(openTitle => {
            openTitle.classList.remove('active');
        });
        if (!wasActive) {
            openTitle.classList.add('active');
        }
      });
}

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}