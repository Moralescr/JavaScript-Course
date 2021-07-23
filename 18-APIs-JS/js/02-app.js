document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionOserver( entries => {
        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
});