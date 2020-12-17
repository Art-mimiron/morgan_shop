const emailValidation = (e) => {
    const input = e.target;
    const reg = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|yahoo|hotmail|aol|msn|yahoo|live|yandex|outlook|mail|)\.(com|net|ru|)$/g;
    const tempReg = /@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.[a-zA-Z0-9_.+-])/g

    if (input.value.match(tempReg) && !input.value.match(reg)) {
        input.parentNode.classList.add('invalid-mail')
    }  
    if (input.value.length === 0 || input.value.match(reg)) {
        input.parentNode.classList.remove('invalid-mail')
    }

    return {name: input.value}
}

export default emailValidation;