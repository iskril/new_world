const form1 = document.querySelector('.form-1');
const buttonAge = document.querySelector('.button-age');
const form2 = document.querySelector('.form-2');
const form1s5 = document.querySelector('.form1s5');
const buttonHr = document.querySelector('.button-hr');
const hrMessage = document.querySelector('.hr-message');
const buttonNoHr = document.querySelector('.button-no-hr');
const danger = document.querySelector('.danger');
const btnOk = document.querySelector('.btn-ok');
const content = document.querySelector('.content');
const mainLink = document.querySelector('#link');
const body = document.querySelector('body');


buttonAge.onclick = function() {
    let val = document.querySelector('.input-age').value;

    if (val >= 18) {
        gsap.to(form1, {rotation: 360, y: -1000, duration: 5, ease: "elastic.out(.7, 0.3)"});
        form2.style.display = 'block';
        gsap.to('.hr', {rotation: 360, y: -450, duration: 2, ease: "elastic.out(1.7, 0.3)"});
    } else {
        gsap.to(form1, {rotation: 360, y: -700, duration: 5, ease: "elastic.out(.7, 0.3)"});
        form1s5.style.display = 'block';
        gsap.to('.teenager', {rotation: 360, y: -170, duration: 2, ease: "elastic.out(1.7, 0.3)"});
    }
}
buttonHr.onclick = function() {
    gsap.to(form2, {rotation: 360, y: -700, duration: 5, ease: "elastic.out(.7, 0.3)"});
    hrMessage.style.display = 'block';
    gsap.to(mainLink, {y: -200})
    gsap.to(hrMessage, {rotation: 360, y: -550, duration: 5, ease: "elastic.out(.7, 0.3)"});
}
buttonNoHr.onclick = function() {
    const titleDanger = new SplitType('#title-danger');
    gsap.to('.char', {
        y: 0,
        stagger: 0.07,
        delay: 0.2,
        duration: .1
    })
    gsap.to(form2, {rotation: 360, y: -700, duration: 5, ease: "elastic.out(.7, 0.3)"});
    danger.style.display = 'block';
    gsap.to(danger, {rotation: 360, y: -550, duration: 2, ease: "elastic.out(1.7, 0.3)"});
}
btnOk.onclick = function() {
    gsap.to(danger, {rotation: 360, y: -1700, duration: 2, ease: "elastic.out(1.7, 0.3)"});
    content.style.display = 'block';
    gsap.to(mainLink, {y: -200})
    gsap.to(content, {y: -1220, duration: 10, })
    
    function BG() {
    body.style.background = 'black'
    setTimeout(() => {
        body.style.background = 'white'
    }, 50);
}

let i = 1;
setInterval(function() {
    BG(i)
}, 100);
    
}

// text
const text = new SplitType('#text');
const textLink = new SplitType('#link');

gsap.to('.char', {
    y: 0,
    stagger: 0.07,
    delay: 0.2,
    duration: .1
})
gsap.to('.anima', {rotation: 360, repeat: -1, duration: 15})
gsap.from('.pony', { duration: 15, ease: 'slow(0.7, 0.7, true', x: 2500, repeat: -1})
