const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const page = document.getElementById('conteiner')

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        page.classList.add('dark');
        return;
    }


    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    page.classList.remove('dark')
});