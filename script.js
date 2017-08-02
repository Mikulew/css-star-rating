const starsWrapper = document.getElementsByClassName("star-wrapper")[0];
const starsInput = document.getElementsByName("star");
//const starsInputArr = Array.prototype.slice.call(starsInput);
//const star = starsWrapper.querySelector("label");
//const stars = starsWrapper.querySelectorAll("label");
//const starsArr = Array.prototype.slice.call(stars);
//const starColor = window.getComputedStyle(star, ':before').getPropertyValue('color');



window.addEventListener('click', clickOutOfWrapper, false);

function clickOutOfWrapper(e) {
    e.stopPropagation();
    if (!starsWrapper.contains(e.target)) {
        for (let i = 0; i < starsInput.length; i++) {
            starsInput[i].checked = false;
        }
    }
}