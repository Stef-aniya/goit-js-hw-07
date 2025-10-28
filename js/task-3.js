const inputName = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')
inputName.addEventListener('input', () => {
    const trimmedValue = inputName.value.trim()
if (trimmedValue === ''){
spanName.textContent = "Anonymous"
}else{
    spanName.textContent = trimmedValue
}
})