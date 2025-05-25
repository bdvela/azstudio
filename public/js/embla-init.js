import EmblaCarousel from 'embla-carousel';

document.addEventListener('DOMContentLoaded', () => {
    const emblaNode = document.querySelector('.embla');
    if (emblaNode) {
        EmblaCarousel(emblaNode, {
            loop: true,
            align: 'center',
            skipSnaps: false,
        });
    }
});
