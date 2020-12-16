const initialState = {
    users: [],
    newUser: {
        name: '',
        mail: '',
        password: null
    }
}

const usersData = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default usersData;