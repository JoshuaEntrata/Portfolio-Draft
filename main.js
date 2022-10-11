const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000);

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:200, origin:'left'})
sr.reveal('.home-img', {delay:200, origin:'right'})

sr.reveal('.about, .skills, .portfolio, .contact', {delay:200, origin:'bottom'})