const initialState = {
    isLoggedIn: false,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
