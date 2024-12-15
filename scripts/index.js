const filterHtmlCollection = (collection, elementType) => [].filter.call(collection, (i) => i.nodeName === elementType)

const header = document.getElementById('header')
const hamburger = document.getElementById('hamburger-menu')

hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    header.classList.toggle('opened')
});

const links = document.getElementsByClassName('navbar__item')
const linksSorted = filterHtmlCollection(links, 'LI')

linksSorted.forEach((i) => {
    i.onclick = function() {
        header.classList.remove('opened')
        hamburger.classList.remove('open')
    }
})

let windowSizeY = window.innerHeight

window.onresize = () => {

}

window.onscroll = () => {
    console.log(windowSizeY)
}