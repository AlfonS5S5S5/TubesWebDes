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
