export const slider = (windowSlider, listSlider, itemSlider, backGo, frontGo) => {
    document.querySelector(frontGo).addEventListener('click', front);
    document.querySelector(backGo).addEventListener('click', back);
    const window = document.querySelector(windowSlider);
    const widthWindow = +getComputedStyle(window).width.match(/\d/g).join('');
    const list = document.querySelector(listSlider);
    const items = document.querySelectorAll(itemSlider).length;
    let trans = 0;
    function front() {
        trans = trans > (- widthWindow) * (items - 1) ? trans - widthWindow : 0;
        console.log(trans);
        list.style.transform = `translateX(${trans}px)`;
    }
    function back() {
        trans = trans >= (- widthWindow) * (items - 1) && trans < 0 ? trans + widthWindow : (- widthWindow) * (items - 1);
        console.log(trans);
        list.style.transform = `translateX(${trans}px)`;
    }
}