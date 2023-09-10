const tokenUser = {
    token: ''
}

export const TOKEN_REDUCER = (state = tokenUser, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };

        default:
            return state;
    }
};