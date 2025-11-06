const canvas = document.getElementById('corazones');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const isMobile = window.innerWidth < 640;
const numCorazones = 15;
const corazones = [];
const imgCorazon = new Image();
imgCorazon.src = "Images/Web Icon.png";

for (let i = 0; i < numCorazones; i++) {
    corazones.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isMobile ? (8 + Math.random() * 10) : (16 + Math.random() * 16),
        speed: 1 + Math.random() * 2
    });
}

function dibujarCorazones() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    corazones.forEach(c => {
        ctx.drawImage(imgCorazon, c.x, c.y, c.size, c.size);
        c.y += c.speed;
        if (c.y > canvas.height) {
            c.y = -c.size;
            c.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(dibujarCorazones);
}

imgCorazon.onload = dibujarCorazones;

window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
