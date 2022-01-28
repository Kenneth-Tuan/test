const inputName = document.querySelector('.input-name-contact')
const iputEmail = document.querySelector('.input-email-contact')
const iputPhone = document.querySelector('.input-phone-contact')
const iputQuestion = document.querySelector('.input-question-contact')
const sendBtn = document.querySelector('.btn-send-contact')

document.addEventListener('click', event => {
    redNotice(inputName)
    redNotice(iputEmail)
    redNotice(iputPhone)
    redNotice(iputQuestion)
})

function redNotice(ele) {
    if (ele.value.trim() === '') {
        ele.style.cssText = 'border-color : #E77474;'
        ele.nextElementSibling.style.display = 'block'
        ele.previousElementSibling.style.cssText = 'color : #E77474'
        sendBtn.disabled = true
    } else {
        ele.style.cssText = 'border-color: #637081;'
        ele.nextElementSibling.style.display = 'none'
        ele.previousElementSibling.style.cssText = 'color: #637081;'
        sendBtn.disabled = false
    }
}