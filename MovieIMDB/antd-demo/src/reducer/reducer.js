
const defaultState = {
    username: JSON.parse(localStorage.getItem('logged-in')) || false,
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CREATE_USERNAME":
            return {
                ...state,
                username: action.payload,
            }
        default:
            return state
    }
}

export default userReducer;
