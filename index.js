let numBtns = document.querySelectorAll('.sound').length;

for(let i = 0; i < numBtns ; i++) {
    document.querySelectorAll('.sound')[i].addEventListener('click', function () {

        let btnInnerHtml = this.InnerHtml;
        sounds(btnInnerHtml);
        
    });
}

document.addEventListener('keydown', function(event){
    sounds(event.key);
})

function sounds(key) {

    switch (btnInnerHtml) {

        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'w':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
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



