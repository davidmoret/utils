export let utils = {

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

}