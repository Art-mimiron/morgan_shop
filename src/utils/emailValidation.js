const emailValidation = (e) => {
    e.target.value.match(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(domain|domain2)\.(com|net)$/g)
}