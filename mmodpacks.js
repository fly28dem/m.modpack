const cards = document.querySelectorAll('.mmodpacks-card');
const tabs = document.querySelectorAll('.mmodpacks-tab');
const panels = document.querySelectorAll('.mmodpacks-panel');
const n = cards.length;
const cardContainer = document.querySelector('.mmodpacks-cards');

function select(active) {
    switch (active) {
        case 0:
            cardContainer.style.transform = 'rotate(5deg)';
            // cardContainer.style.transform = 'rotateX(-12deg) rotateZ(5deg) rotateY(7deg)';
            break;
        case 1:
            cardContainer.style.transform = 'rotate(2deg)';
            // cardContainer.style.transform = 'rotateX(-12deg) rotateZ(2deg) rotateY(7deg)';
            break;
        case 2:
            cardContainer.style.transform = 'rotate(-3deg) translateY(-5%)';
            // cardContainer.style.transform = 'rotateX(-12deg) rotateZ(-3deg) rotateY(7deg) translate(3%)';
            break;
    }

    cards.forEach((card, i) => {
        // позиция в стопке: 0 - верх, 1 - середина, 2 - низ
        card.style.setProperty('--pos', (i - active + n) % n);
    });
    tabs.forEach((tab, i) => {
        const on = i === active; // значение возвращает true/false
        tab.setAttribute('aria-selected', on);
    });
    panels.forEach((p, i) => p.classList.toggle('active', i === active));
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
});

select(0);