let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 9000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelector('.thumbnail');
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    thumbnails.addEventListener('mousedown', (e) => {
        isDown = true;
        thumbnails.classList.add('active');
        startX = e.pageX - thumbnails.offsetLeft;
        startY = e.pageY - thumbnails.offsetTop;
        scrollLeft = thumbnails.scrollLeft;
        scrollTop = thumbnails.scrollTop;
    });

    thumbnails.addEventListener('mouseleave', () => {
        isDown = false;
        thumbnails.classList.remove('active');
    });

    thumbnails.addEventListener('mouseup', () => {
        isDown = false;
        thumbnails.classList.remove('active');
    });

    thumbnails.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - thumbnails.offsetLeft;
        const y = e.pageY - thumbnails.offsetTop;
        const walkX = (x - startX) * 3; // Ajusta la sensibilidad del desplazamiento horizontal
        const walkY = (y - startY) * 3; // Ajusta la sensibilidad del desplazamiento vertical
        thumbnails.scrollLeft = scrollLeft - walkX;
        thumbnails.scrollTop = scrollTop - walkY;
    });
});
