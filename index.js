let numBtns = document.querySelectorAll(".sound").length;

for(let i = 0; i < numBtns ; i++) {
    document.querySelectorAll('.sound')[i].addEventListener('click', function () {

        let btnInnerHtml = this.innerHTML;

        sounds(btnInnerHtml);
        
        animateBtn(btnInnerHtml);
        
    });
}

document.addEventListener("keydown", function(event){

    sounds(event.key);

    animateBtn(event.key);
});

function sounds(key) {

    switch (key) {

        case 'w':
            let tom1 = new Audio('sounds/what.wav');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('sounds/prayer.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            let kick = new Audio('sounds/kick.mp3');
            kick.play();
            break;

        default:
            console.log(btnInnerHtml);

    }
}



function animateBtn(key){

    let activeBtn = document.querySelector('.'+key);

    activeBtn.classList.add('pressed');

    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);

}


