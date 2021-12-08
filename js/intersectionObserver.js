function loadingObservers() {
    let observerGalleryItem = new IntersectionObserver(function (observables) {
        console.log("done");
        observables.forEach(function (observable) {
            if (observable.intersectionRatio > 0.6) {
                observable.target.classList.remove('notVisible')
                // observerGalleryItem.unobserve(observable.target)
            } else {
                observable.target.classList.add('notVisible')
            }
        })
        }, {
            threshold: [0.6]
    });
    
    let galleryThumbs = document.querySelectorAll('.galleryThumb')
    galleryThumbs.forEach(function (galleryThumb) {
        galleryThumb.classList.add('notVisible')
        observerGalleryItem.observe(galleryThumb)
    })
}