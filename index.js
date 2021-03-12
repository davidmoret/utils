export let utils = {


    /**
     * @param {HTMLElement} a
     * @param {HTMLElement} b
     */
    getDistanceBetweenElements(a, b) {
        const aPosition = this.getPositionAtCenter(a);
        const bPosition = this.getPositionAtCenter(b);
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    },

    /**
     * @param {HTMLElement} element
     */
    getPositionAtCenter(element) {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
            x: left + width / 2,
            y: top + height / 2
        };
    },

    /**
     * @param {HTMLElement} elem
     * @param {selector} selector
     */
    getNextSibling(elem, selector) {
        var sibling = elem.nextElementSibling;
        if (!selector) return sibling;
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling;
        }
    },

    /**
     * @param {string} className
     * @return {HTMLElement}
     */
    createButton(className) {
        let button = document.createElement('button')
        button.setAttribute('class', className)
        return button;
    },

    /**
     * @param {string} className
     * @return {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div;
    },

    /**
     * @param {string} className
     * @param {string} href
     * @param {string} label
     * @return {HTMLElement}
     */
    createLinkWithClass(className, href, label) {
        let a = document.createElement('a')
        a.setAttribute('class', className)
        a.setAttribute('href', href)
        a.innerHTML = label
        return a;
    },

    /**
     * @param {HTMLElement} el
     */
    fadeOut(el){
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    },


    /**
     * @param {HTMLElement} el
     * @param {string} display
     */
    fadeIn(el, display){
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    },


    /**
     * @callback callback
     * @param {number} delay
     */
    debounce(callback, delay){
        let timer;
        return function(){
            let args = arguments;
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(function(){
                callback.apply(context, args);
            }, delay)
        }
    },

}
