
export const slider = (windowSlider, listSlider, prev, next, t) => {
    document.querySelector(next).addEventListener('click', front);
    document.querySelector(prev).addEventListener('click', back);
    const window = document.querySelector(windowSlider);
    const widthWindow = +getComputedStyle(window).width.match(/\d/g).join('');
    

    function front() {
        const list = document.querySelector(listSlider);
        list.style.transition = `${t}ms All`;
        list.style.transform = `translateX(-${widthWindow}px)`;
        setTimeout(() => {
            const start = list.firstElementChild;
            const newStart = start.cloneNode(true);
            list.append(newStart);
            start.remove();
            list.style.transition = '';
            list.style.transform = 'translateX(0px)';
        }, t); 
    }

    function back() {
        const list = document.querySelector(listSlider);
        const end = list.lastElementChild;
        const newEnd = end.cloneNode(true);
        list.prepend(newEnd);
        end.remove();
        list.style.transform = `translateX(-${widthWindow}px)`;
        getComputedStyle(list).transform;
        list.style.transition = `${t}ms All`;
        list.style.transform = 'translateX(0px)';
        setTimeout(() => { list.style.transition = '' }, t); 
    }
}