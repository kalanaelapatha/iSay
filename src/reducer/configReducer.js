
export const initialState = initialState => ({
    isLogged: false,
});


const configReducer = (state = initialState(), action) => {
    switch (action.type) {


        case 'LOGIN':
            return {isLogged: true};

        case 'LOGOUT':
            return {isLogged: false};

        default:
            return state
    }
};
export default configReducer;