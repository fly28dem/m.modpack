// ------------------------ //
// Меч летающий за курсором //
// ------------------------ //

const follower = document.querySelector('.sword-follower');

// случайный материал меча
follower.style.backgroundPosition = `${(Math.floor(Math.random() * 5) * 20)}%`;

let mouseX = 0;
let mouseY = 0;

let swordX = 0;
let swordY = 0;

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

let lastAngleDegrees = 0;

function swordFollow() {
    // расстояние между курсором и мечом
    let dx = mouseX - swordX;
    let dy = mouseY - swordY;

    // возвращает угол от -PI до PI (на основе расстояния между курсором и мечом)
    let angleRadians = Math.atan2(dy, dx);
    // угол в радианах переводим в градусы (и +45, потому что текстура наклонена)
    let angleDegrees = angleRadians * (180 / Math.PI) + 45;

    // сглаживание скачков на 360 градусов
    let angleDiff = angleDegrees - (lastAngleDegrees % 360);
    if (angleDiff > 180) {
        angleDegrees -= 360;
    } else if (angleDiff < 180) {
        angleDegrees += 360;
    }

    lastAngleDegrees += (angleDegrees - lastAngleDegrees) * 0.15;

    // торможение при приближении
    swordX += dx * 0.04;
    swordY += dy * 0.04;

    follower.style.transform = `translate(calc(-50% + ${swordX}px), calc(-50% + ${swordY}px)) rotate(${angleDegrees}deg)`;

    // каждый кадр вызывается функция swordFollow
    requestAnimationFrame(swordFollow);
}

swordFollow();