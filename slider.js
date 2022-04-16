let container = document.querySelector("#container"),
    slider2 = document.querySelector("#slider2"),
    blocker = document.querySelector("#blocker");

slider2.onmousedown = (e) => {
    blocker.style.display = 'block';
    let dragX = e.clientX;
    document.onmousemove = function onMouseMove(e) {
        resize = container.offsetWidth + e.clientX - dragX;
        if (resize < 0) {
            files.style.width = files.offsetWidth + e.clientX - dragX + "px";
        } else {
            container.style.width = resize + "px";
        }
        dragX = e.clientX;
    }
    // remove mouse-move listener on mouse-up
    document.onmouseup = () => {
        blocker.style.display = 'none';
        document.onmousemove = document.onmouseup = null
    };
};


let files = document.querySelector("#files"),
    slider1 = document.querySelector("#slider1");

slider1.onmousedown = (e) => {
    blocker.style.display = 'block';
    let dragX = e.clientX;
    document.onmousemove = function onMouseMove(e) {
        container.style.width = container.offsetWidth - e.clientX + dragX + "px";
        files.style.width = files.offsetWidth + e.clientX - dragX + "px";
        dragX = e.clientX;
    }
    // remove mouse-move listener on mouse-up
    document.onmouseup = () => {
        blocker.style.display = 'none';
        document.onmousemove = document.onmouseup = null
    };
};
