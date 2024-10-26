const header = document.querySelector('.header.section');

const handleHeaderScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
}

window.addEventListener('scroll', handleHeaderScroll);