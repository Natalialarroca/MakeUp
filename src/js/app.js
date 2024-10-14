document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    if(header) {
        const navFija = header.offsetTop;

        window.addEventListener('scroll', () =>{
            if(window.scrollY > navFija) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }

        });
    }
})