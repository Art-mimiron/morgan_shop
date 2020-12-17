const passValidation = (e) => {
    const input = e.target;
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

    if (input.value.length > 3 && !input.value.match(reg)) {
        input.parentNode.classList.add('invalid-pass')
    }  
    if (input.value.length === 0 || input.value.match(reg)) {
        input.parentNode.classList.remove('invalid-pass')
    }

    return {password: input.value}
}

export default passValidation;