const INITIAL_STATE = {
    email: '',
    password: '',
    id: '',
    cart: []
}

// yg dimasukkan ke redux yg hanya akan dipakai saja.

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN' :
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                id: action.payload.id,
                cart: action.payload.cart
            }

        case 'LOG_OUT' :
            return INITIAL_STATE
        default :
            return state
    }            
}