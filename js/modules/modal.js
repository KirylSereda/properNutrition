
function modalOpen(modalSelector,ModalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'inline';
    document.body.style.overflow = 'hidden';
    console.log(ModalTimerId)
    if (ModalTimerId) {
        clearInterval(ModalTimerId);
    }
}

function modalExit(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}


function modal (triggerSelector,modalSelector,ModalTimerId) {
    console.log('dsad')
    const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

modalTrigger.forEach(item => item.addEventListener('click',() => modalOpen(modalSelector,ModalTimerId)));

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        modalExit(modalSelector);
    }
});
 
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.style.display == 'inline') {
        modalExit(modalSelector);
    }
});

window.addEventListener('scroll', showModalByscroll);

function showModalByscroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight - 1) {
        modalOpen(modalSelector,ModalTimerId);
        window.removeEventListener('scroll', showModalByscroll);
    }
}

}

export default modal;
export {modalExit,modalOpen};