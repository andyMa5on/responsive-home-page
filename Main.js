const ftSection = [document.querySelector('#ft_section .types-of-shooting__image'), document.querySelector('#ft_section .types-of-shooting__description')];

const plinkingSection = [document.querySelector('#plinking_section .types-of-shooting__image'), document.querySelector('#plinking_section .types-of-shooting__description')]


function myfunction(x) {
    if (x.matches) {
        ftSection[0].insertAdjacentElement("afterend", ftSection[1]);
        plinkingSection[0].insertAdjacentElement("afterend", plinkingSection[1])
    }else {
        ftSection[1].insertAdjacentElement("afterend", ftSection[0]);
        plinkingSection[1].insertAdjacentElement("afterend", plinkingSection[0])
    }
} 

const mobileMedia = window.matchMedia("(max-width: 650px)");
myfunction(mobileMedia);
mobileMedia.addEventListener('change', myfunction);