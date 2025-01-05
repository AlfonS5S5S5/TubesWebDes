function handleScroll() {
    const scrollPosition = window.scrollY;
    const body = document.body;

    if (scrollPosition == 0) {
        body.style.backgroundImage = "url('../images/background/abyss-background.jpg')";
    }else if (scrollPosition >= 500 && scrollPosition < 1000) {
        body.style.backgroundImage = "url('../images/background/elementals.jpg')";
    } else if (scrollPosition >= 1000) {
        body.style.backgroundImage = "url('../images/background/spiralAbyss.png')";
    } else {
        body.style.backgroundImage = "url('../images/background/genshin-impact-teyvat-the-traveler-fantasy-city-hd-wallpaper-preview.jpg')";
    }
}

document.addEventListener("scroll", handleScroll);

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        if (section.id === 'section1') {
            document.body.style.backgroundImage = "url('../images/background/genshin-impact-teyvat-the-traveler-fantasy-city-hd-wallpaper-preview.jpg')";
        } else if (section.id === 'section2') {
            document.body.style.backgroundImage = "url('../images/background/elementals.jpg')";
        } else if (section.id === 'section3') {
            document.body.style.backgroundImage = "url('../images/background/spiralAbyss.png')";
        }
    });
});

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.style.position = "absolute";
    trail.style.width = "15px";
    trail.style.height = "15px";
    trail.style.borderRadius = "50%";
    trail.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 191, 255, 0.2))`;
    trail.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.8)";
    trail.style.top = `${e.pageY}px`;
    trail.style.left = `${e.pageX}px`;
    trail.style.pointerEvents = "none";
    trail.style.opacity = "0.9";
    trail.style.transition = "opacity 1s, transform 1s";
    trail.style.transform = "translate(-50%, -50%) scale(0)";
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-50%, -50%) scale(2)";
    }, 0);

    setTimeout(() => {
        trail.remove();
    }, 1000);
});

