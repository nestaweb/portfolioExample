function load() {
    initGallery()
    loadingObservers()
}
function start () {
    heroText = document.querySelector(".heroTitle")
    ctaButton = document.querySelector(".cta")
    heroText.classList.toggle("notVisible")
    setTimeout(() => {
        ctaButton.style.display = "none"
    }, 500)
    setTimeout(() => {
        heroText.innerText = "1 year of work ..."
        heroText.classList.toggle("center")
        heroText.classList.toggle("notVisible")
        ctaButton.classList.toggle("notVisible")
        setTimeout(() => {
            showGallery()
        }, 1700)
    }, 600);
    
}
function showGallery() {
    heroText = document.querySelector(".heroTitle")
    ctaButton = document.querySelector(".cta")
    heroText.classList.toggle("notVisible")
    ctaButton.classList.toggle("notVisible")
    setTimeout(() => {
        heroText.classList.toggle("notVisible")
        heroText.innerText = "More than 100 pictures"
        ctaButton.style.display = "none"
        setTimeout(() => {
            
            showExperiences()
        }, 1500)
    }, 600);
}
function showExperiences() {
    main = document.querySelector("main")
    heroText = document.querySelector(".heroTitle")
    scrollbutton = document.querySelector(".scrollDown")
    main.classList.remove("notVisible")
    scrollbutton.classList.remove("notVisible")
    document.querySelector('header').style.backgroundColor = "#fff";
    document.querySelector(".heroTitle").classList.add("lightTheme")
    heroText.innerText = "Travel through this virtual world ..."
}
function initGallery() {
    indexGallery = 0
    pictures.forEach(picture => {
        const cardGallery = `
        <figure class="galleryThumb">
            <img src="${picture.picture}" alt="Photo by ${picture.alt}" class="galleryImage">
            <figcaption class="galleryCaption">Photo by ${picture.alt}</figcaption>
        </figure>
        `
        document.querySelector(".gallery"+ String(indexGallery)).innerHTML += cardGallery
        indexGallery += 1
        if (indexGallery == 4) {
            indexGallery = 0
        }

    });
}
