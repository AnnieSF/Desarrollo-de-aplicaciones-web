function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#album-view');
for (let index = 0; index < PHOTO_LIST.length; index++) {
    const photoSrc = PHOTO_LIST[index];
    const image = createImage(photoSrc);
    albumView.appendChild(image);
    image.addEventListener('click', onThumbnailClick)
}

function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);