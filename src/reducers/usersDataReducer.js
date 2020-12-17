const initialState = {
    users: [],
    newUser: {
        name: '',
        mail: '',
        password: '',
        private: true,
        id: null
    },
    login: {
        name: '',
        password: '',
        showPassword: false
    }
}

const usersData = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {...state, login: {...state.login, ...action.payload} }
        case 'USER_PASSWORD':
            return {...state, login: {...state.login, ...action.payload} }
        case 'TOGLE_PASS_VISIBILITY':
            return {...state, login: {...state.login, showPassword: !state.login.showPassword} }
        default:
            return state;
    }
}

export default usersData;