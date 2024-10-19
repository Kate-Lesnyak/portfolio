const header = document.querySelector('.header', handleHeaderScroll);

const handleHeaderScroll = () => {
    if (window.scrollY > 300) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
}

window.addEventListener('scroll', handleHeaderScroll);