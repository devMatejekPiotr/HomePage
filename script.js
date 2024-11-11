const buttonEl = document.querySelector(".header__button")
const text = document.querySelector('.js-toggleText')

buttonEl.addEventListener('click', toogleText)

function toogleText() {
    if (buttonEl.innerText === "Dowiedz się więcej") {
        buttonEl.innerText = 'Ukryj szczegoly'
        text.innerText = "Nasza firma oferuje kompleksowe usługi dekoracji wnętrz: projektowanie, konsultacje i tworzenie atmosfery zgodnej z Twoim stylem."
    } else {
        buttonEl.innerText = "Dowiedz się więcej"
        text.innerText = "Jesteśmy zespołem profesjonalistów, którzy od lat pomagają tworzyć wyjątkowe wnętrza."
    }

}