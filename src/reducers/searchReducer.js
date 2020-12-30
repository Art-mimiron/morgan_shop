const initialState = {
    query: '',
    showSearchBar: false
}

const searchBar = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SEARCHBAR':
            return {...state, showSearchBar: !state.showSearchBar, query: action.payload}
        case 'GENERATE_SEARCH_QUERY':
            return {...state, query: action.payload }
        default:
            return state
    }
}

export default searchBar;