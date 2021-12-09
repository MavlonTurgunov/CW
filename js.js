let contact = document.querySelector('.footer__contact-txt');

let txt = contact.innerHTML
contact.innerHTML = ''

function str(x = 0) {
    contact.innerHTML += txt[x]
    x++
    if (x < txt.length) {
        setTimeout(() => {
            str(x)
        }, 220);
    }
}

str()

